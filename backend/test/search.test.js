const search = require("../routes/search");

jest.mock('../routes/food/food.json');

describe("Search Endpoint", () => {

    const mockReq = {
        query: {}
    }

    const mockRes = {
        json: jest.fn()
    }

    afterEach(() => {
        mockRes.json.mockClear();
    })

    describe("when there is no term in req.query", () => {

        test("returns a json response with an error", () => {
            search(mockReq, mockRes);
            expect(mockRes.json).toBeCalledWith({
                error: "Please provide a search term."
            })
        })
    })

    describe("when there is a term in req.query", () => {

        test("but the query doesnt match any results", () => {
            mockReq.query.term = 'dummy-term';
            search(mockReq, mockRes);
            expect(mockRes.json).toBeCalledWith({
                results: [],
                count: 0
            });
        });

        xtest("when there is a partial match", () => {
            mockReq.query.term = 'test';
            search(mockReq, mockRes);
            expect(mockRes.json).toBeCalledWith({
                results: [],
                count: 1
            });
        });

        xtest("when all the results match", () => {

        });
    });
})