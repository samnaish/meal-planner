const login = require('../routes/login');

describe ("login Endpoint", () => {
    const mockGoodLogin = {
        username:"angela",
        password: "baking"
    };
    const mockBadLogin = {
        username: "hello",
        password: "crippin"
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

    afterEach(() => {
        mockRes.status.mockClear();
        mockRes.json.mockClear();
    })

    describe("when the login credentials are acceptable", () => {

        beforeAll(() => {
            mockReq.body = mockGoodLogin;
        })

        test("will respond with json", () => {
            login(mockReq, mockRes);
            expect(mockRes.json.mock.calls.length).toEqual(1);
        });

        test("responds with an object with a result property equal to 'Success'", () => {
            login(mockReq, mockRes);
            expect(mockRes.json).toHaveBeenCalledWith({
                result: "Success"
            });
        })

    });

    describe("when the login credentials are not recognised", () => {

        beforeAll(() => {
            mockReq.body = mockBadLogin;
        })

        test("will set the statusCode to 400", () => {
            login(mockReq, mockRes);
            expect(mockRes.status).toHaveBeenCalledWith(400);
        });

        test("will respond with json", () => {
            login(mockReq, mockRes);
            expect(mockRes.json.mock.calls.length).toEqual(1);
        });

        test("responds with an object with a result property equal to 'Failure'", () => {
            login(mockReq, mockRes);
            expect(mockRes.json).toHaveBeenCalledWith({
                result: "Failure"
            })
        })

    });

})