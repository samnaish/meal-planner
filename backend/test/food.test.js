const food = require('../routes/food/');
const database = require('../services/database');
jest.mock('../services/database');

describe("List Food Endpoint" , () => {

    const dummyConnection = "fake connection";
    const dummyModel = {
        find: jest.fn().mockImplementation(() => {
            return Promise.resolve(dummyData)
        })
    };

    const dummyData = [1,2,3];
    
    const mockReq = {};

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
    })

    afterEach(() => {
        mockRes.json.mockClear();
        mockRes.status.mockClear();
    });

    describe("When Succesful", () => {
        test("returns json response with with number of items", async () => {
            await food(mockReq, mockRes);    
            expect(mockRes.json).toBeCalledWith({
                data: dummyData,
                count: dummyData.length
            });
        })
    })

    describe("When Failed", () => {

        beforeAll(() => {
            dummyModel.find.mockImplementation(() => Promise.reject(new Error))
        })

        test('response with a 500', async () => {
            await food( mockReq, mockRes);
            expect(mockRes.status).toBeCalledWith(500);
        });

        test('response with a 500', async () => {
            await food( mockReq, mockRes);
            expect(mockRes.json).toBeCalledWith({
                error: 'Unexpected error. Please try again later'
            });
        });
    })

});
