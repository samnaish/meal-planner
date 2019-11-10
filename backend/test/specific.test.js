const database = require('../services/database');
const specific = require("../routes/food/specific");

jest.mock('../services/database');

describe("Specific Endpoint", () => {

    const dummyConnection = "Hello";
    const notFoundId = 'no-record-here';
    const errorId = 'error';
    const dummyModel = {
        findOne: jest.fn().mockImplementation(({ _id }) => {
            if ( _id === notFoundId) return Promise.resolve(null);
            if (_id === errorId) return Promise.reject(new Error('test error'));
            return Promise.resolve(dummyData);
        })
    }

    const dummyData = 'my Dummy Object';

    const mockReq = {
        query: {}
    }

    const mockRes = {
        status: jest.fn(() => {
            const { json } = mockRes;
            return { json };
        }),
        json: jest.fn()
    }

    beforeAll(() => {
        database.connect.mockImplementation(() => Promise.resolve(dummyConnection));
        database.loadModel.mockImplementation(() => dummyModel);
    });

    afterEach(() => {
        mockRes.json.mockClear();
        mockRes.status.mockClear();
    })

    describe("when an item id is found", () => {

        beforeAll(() => {
            mockReq.query.id = "hello";
        })

        test("returns a json response", async () => {
            await specific(mockReq, mockRes);
            expect(mockRes.json).toHaveBeenCalledWith({
                dish: dummyData
            });
        })

    });

    describe("when the item id doesn't match the dish id", () => {

        beforeAll(() => {
            mockReq.query.id = notFoundId;
        });

        test('responds with 404 status code', async () => {
            await specific(mockReq, mockRes);
            expect(mockRes.status).toHaveBeenCalledWith(404);
        });

        test("responds with an object with a error property equal to 'Dish not found'", async () => {
            await specific(mockReq, mockRes);
            expect(mockRes.json).toHaveBeenCalledWith({
                error: "Dish not found."
            });
        });

    });

    describe("when there is an error", () => {

        beforeAll(() => {
            mockReq.query.id = errorId;
        })

        test('responds with a 500', async () => {
            await specific(mockReq, mockRes);
            expect(mockRes.status).toHaveBeenCalledWith(500);
        });

        test('responds with json', async () => {
            await specific(mockReq, mockRes);
            expect(mockRes.json).toHaveBeenCalledWith({
                error: "Unable to retrieve recipe. Please try again later."
            })
        });

    })
});