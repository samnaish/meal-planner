const database = require('../services/database');
const authentication = require('../services/authentication');
const login = require('../routes/login');

jest.mock('../services/database');
jest.mock('../services/authentication');

describe("login Endpoint", () => {
    const dummyConnection = "Hello";
    const notFoundEmail = "no email";
    const errorEmail = "error";
    const dummyModel = {
        findOne: jest.fn().mockImplementation(({ email }) => {
            if ( email === notFoundEmail) return Promise.resolve(null);
            if ( email === errorEmail) return Promise.reject(new Error('test error'));
            return Promise.resolve(dummyData);
        })
    }

    const dummyData = {
        email: "test@test.com",
        password: "found"
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
    };

    beforeAll(() => {
        process.env.JWT_SECRET = 'test';
        database.connect.mockImplementation(() => Promise.resolve(dummyConnection));
        database.loadModel.mockImplementation(() => dummyModel);
        authentication.compareHash.mockImplementation((password) => {
            return Promise.resolve(password === 'found');
        });
    })

    afterEach(() => {
        mockRes.status.mockClear();
        mockRes.json.mockClear();
    })

    describe("when the login credentials are acceptable", () => {

        beforeAll(() => {
            mockReq.body = dummyData;
        })

        test("will respond with json", async () => {
            await login(mockReq, mockRes);
            expect(mockRes.json.mock.calls.length).toEqual(1);
        });

        test("responds with an object with a token property", async () => {
            await login(mockReq, mockRes);

            const [responseObject] = mockRes.json.mock.calls[0];
            expect(responseObject).toHaveProperty('token');
        })

    });

    describe("when the login credentials are not recognised", () => {

        beforeAll(() => {
            mockReq.body = {
                email: notFoundEmail
            };
        });

        test("will set the statusCode to 400", async () => {
            await login(mockReq, mockRes);
            expect(mockRes.status).toHaveBeenCalledWith(400);
        });

        test("will respond with json", async () => {
            await login(mockReq, mockRes);
            expect(mockRes.json.mock.calls.length).toEqual(1);
        });

        test("responds with an object with a result property equal to 'Failure'", async () => {
            await login(mockReq, mockRes);
            expect(mockRes.json).toHaveBeenCalledWith({
                error: "User not found."
            });
        })

    });

    describe("when the password doesn't match the found record", () => {

        beforeAll(() => {
            mockReq.body = {
                password: 'not-found'
            };
        });

        test("will set the statusCode to 400", async () => {
            await login(mockReq, mockRes);
            expect(mockRes.status).toHaveBeenCalledWith(400);
        });

        test("will respond with json", async () => {
            await login(mockReq, mockRes);
            expect(mockRes.json.mock.calls.length).toEqual(1);
        });

        test("responds with an object with a result property equal to 'Failure'", async () => {
            await login(mockReq, mockRes);
            expect(mockRes.json).toHaveBeenCalledWith({
                error: "User not found."
            })
        })

    })

    describe("when there's an error", () => {

        beforeAll(() => {
            mockReq.body = {
                email: errorEmail
            }
        })

        test("responds with a 500", async () => {
            await login(mockReq, mockRes);
            expect(mockRes.status).toHaveBeenCalledWith(500);
        })

        test("responds with json", async () => {
            await login(mockReq, mockRes);
            expect(mockRes.json).toHaveBeenCalledWith({
                error: 'Unexpected error. Please try again later'
            });
        })
    })

})