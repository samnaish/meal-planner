const database = require('../services/database');
const create = require('../routes/food/create');

jest.mock('../services/database');

describe("Create API Endpoint", () => {

    const dummyConnection = "Hello";
    const errorId = 'error';
    const notFoundId = 'no-record-here';
    const foundName = 'found';
    const mockSaveFunction = jest.fn();
    const mockValidateFunction = jest.fn();
    
    class DummyModel {
        static findOne ({ name }) {
            if (name === foundName) return Promise.resolve('something');
            return Promise.resolve(null);
        }
        save () {
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
        mockSaveFunction.mockReturnValue(Promise.resolve(dummyRecipeObject));
        mockValidateFunction.mockReturnValue(Promise.resolve(true));
    });

    afterEach(() => {
        mockRes.status.mockClear();
        mockRes.json.mockClear();
        mockSaveFunction.mockReset();
        mockValidateFunction.mockReset();
    });

    describe("when the recipe is not valid", () => {

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
            mockValidateFunction.mockReturnValue(Promise.reject(dummyError));
        });

        test("responds with an 400 status code", async () => {
            await create(mockReq, mockRes);
            expect(mockRes.status).toHaveBeenCalledWith(400);
        })

        test("responds with a validation error", async () => {
            await create(mockReq, mockRes);
            expect(mockRes.json).toHaveBeenCalledWith({
                error: "Validation failed",
                failures: {
                    name: dummyErrorMessage,
                    description: dummyErrorMessage
                }
            });
        })

    })

    describe("when the same recipe is found", () => {

        beforeEach(() => {
            mockReq.body.name = foundName;
        })

        test("responds with a 409 status code", async () => {
            await create(mockReq,mockRes);
            expect(mockRes.status).toHaveBeenCalledWith(409);
        })

        test("responds with a conflict error", async () => {
            await create(mockReq, mockRes);
            expect(mockRes.json).toHaveBeenCalledWith({
                error: "We already have that recipe."
            });
        })

    })

    describe("when there is an error saving", () => {

        beforeEach(() => {
            mockReq.body.name = 'anything-else';
            mockSaveFunction.mockReturnValue(Promise.reject(true));
        })

        test("responds with a 500 status code", async () => {
            await create(mockReq,mockRes);
            expect(mockRes.status).toHaveBeenCalledWith(500);
        })

        test("responds with a conflict error", async () => {
            await create(mockReq, mockRes);
            expect(mockRes.json).toHaveBeenCalledWith({
                error: "Unexpected error. Please try again later."
            });
        })

    })

    describe('when everything works', () => {

        test('returns with the inserted recipe', async () => {

            await create(mockReq, mockRes);
            expect(mockRes.json).toHaveBeenCalledWith({
                recipe: dummyRecipeObject
            });

        })

    })
})