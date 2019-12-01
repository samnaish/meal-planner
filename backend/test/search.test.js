const database = require('../services/database');
const search = require("../routes/search");

jest.mock('../services/database');

describe("Search Endpoint", () => {

    const dummyConnection = 'my-connection';
    const dummyModel = {
        find: jest.fn().mockImplementation(({ name }) => {
            if (name.test('dummy-term')) return Promise.resolve([])
            return Promise.resolve(dummyResults);
        })
    };
    const dummyResults = [1,2,3];

    const mockReq = {
        query: {}
    }
    const mockRes = {
        json: jest.fn()
    }

    beforeAll(() => {
        database.connect.mockImplementation(() => Promise.resolve(dummyConnection));
        database.loadModel.mockImplementation(() => dummyModel);
    });

    afterEach(() => {
        mockRes.json.mockClear();
    })

    describe("when there is no term in req.query", () => {

        test("returns a json response with an error", async () => {
            await search(mockReq, mockRes);
            expect(mockRes.json).toBeCalledWith({
                error: "Please provide a search term."
            })
        })
    })

    describe("when there is a term in req.query", () => {

        test("but the query doesnt match any results", async () => {
            mockReq.query.term = 'dummy-term';
            await search(mockReq, mockRes);
            expect(mockRes.json).toBeCalledWith({
                results: [],
                count: 0
            });
        });

        test("when there is a match", async () => {
            mockReq.query.term = 'test';
            await search(mockReq, mockRes);
            expect(mockRes.json).toBeCalledWith({
                results: dummyResults,
                count: dummyResults.length
            });
        });
    });
})