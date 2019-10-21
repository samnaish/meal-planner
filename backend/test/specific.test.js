const specific = require("../routes/food/specific");

describe("Specific Endpoint", () => {
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

    afterEach(() => {
        mockRes.json.mockClear();
        mockRes.status.mockClear();
    })

    describe("when an item id is found", () => {

        test("returns a json response", () => {
            specific(mockReq, mockRes);
            expect(mockRes.json.mock.calls.length).toEqual(1);
        })

    });

    describe("when the item id doesn't match the dish id", () => {

        test("responds with an object with a result property equal to 'Dish not found'", () => {
            specific(mockReq, mockRes);
            expect(mockRes.json).toHaveBeenCalledWith({
                error: "Dish not found."
            });
        });

    });
});