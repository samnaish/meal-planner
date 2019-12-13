const database = require('../services/database');
const update = require("../routes/food/update");

jest.mock('../services/database');

describe("Recipe Update Endpoint", () => {

    const dummyConnection = "Hello";
    const foundId = 'found';
    const mockSaveFunction = jest.fn();
    const mockValidateFunction = jest.fn();

    class DummyModel {
        static findOne ({ _id }) {
            if (_id === foundId) return Promise.resolve('something');
            return Promise.resolve(null);
        }
        static findOneAndUpdate () {
            return mockSaveFunction();
        }

        validate () {
            return mockValidateFunction();
        }
    }

    const dummyRecipeObject = {
        name: "dish",
        image: "image",
        servings: 2,
        time: {
            prep: 3,
            cook: 8
        },
        ingredients: [
            {
                name: "ingredient Name",
                quauntity: 10,
                unit: "grams"
            }
        ]
    };

    const mockReq = {
        query: {},
        body: {}
    };

    const mockRes = {
        status: jest.fn(() => {
            const { json } = mockRes;
            return { json };
        }),
        json: jest.fn()
    }

    beforeEach(() => {
        database.connect.mockImplementation(() => Promise.resolve(dummyConnection));
        database.loadModel.mockImplementation(() => DummyModel);
        mockSaveFunction.mockResolvedValue(dummyRecipeObject);
        mockValidateFunction.mockResolvedValue(true);
    });

    afterEach(() => {
        mockRes.status.mockClear();
        mockRes.json.mockClear();
        mockSaveFunction.mockReset();
        mockValidateFunction.mockReset();
    });

    describe('when no record is found', () => {

        test("", () => {

        })
        // it tests something

    });

    describe('when submitted data is not valid', () => {

        // it tests something
        const dummyErrorMessage = 'test error';
        const dummyError = {
            errors: {
                name: {
                    message: dummyErrorMessage
                },
                description: {
                    message: dummyErrorMessage
                }
            }
        }
        beforeEach(() => {
            mockReq.query.id = foundId;
            mockValidateFunction.mockRejectedValue(dummyError);
        });

        test("responds with an 400 status code", async () => {
            await update(mockReq, mockRes);
            expect(mockRes.status).toHaveBeenCalledWith(400);
        })

    });

    describe('when record is found and data is valid', () => {

        // it tests something
        beforeEach(() => {
            mockReq.body._id = foundId;
        })

        test("responds with json", async () => {
            await update(mockReq,mockRes);
            expect(mockRes.json).toHaveBeenCalledWith({
                result: dummyRecipeObject
            });
        })

    });

    describe('when an error happens', () => {

        beforeEach(() => {
            mockReq.body._id = 'anything-else';
            mockSaveFunction.mockRejectedValue(true);
        })

        test("responds with a 500 status code", async () => {
            await update(mockReq,mockRes);
            expect(mockRes.status).toHaveBeenCalledWith(500);
        })

        // it tests something

    });

});