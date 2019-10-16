const mockData = ['one', 'second', 'three'];
jest.mock('../routes/food/food.json', () => {
    return mockData;
}, { virtual: true });

const foodIndex = require("../routes/food");

describe("Index Endpoint" , () => {

    const mockReq = {};

    const mockRes = {
        status: jest.fn(),
        json: jest.fn(() => {
            const { json } = mockRes;
            return { json };
        })
    }

    afterEach(() => {
        mockRes.json.mockClear();
        mockRes.status.mockClear();
    });

    test("returns json response with with number of items", () => {    

        foodIndex(mockReq, mockRes);
        expect(mockRes.json).toBeCalledWith({
            data: mockData,
            count: mockData.length
        });
    })

});