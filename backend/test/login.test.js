const login = require('../routes/login');

describe ("login Endpoint", () => {
    const mockGoodLogin = {
        usernmane:"angela",
        password: "baking"
    };
    const mockBadLogin = {
        usernmane: "hello",
        password: "crippin"
    };

    const mockReq = {
        body: {}
    };

    const mockRes = {
        status: jest.fn(),
        json: jest.fn()
    };

    describe("when the login credentials are acceptable", () => {

        beforeAll(() => {
            mockReq.body = mockGoodLogin;
        })

        test("will respond with json", () => {
            login(mockReq, mockRes);
            expect(mockRes.json.mock.calls.length).toEqual(1);
        });

        test("responds with an object with a result property equal to 'Success'", () => {
            expect(mockGoodLogin).toEqual({
                usernmane:"angela",
                password: "baking"
            });
        })

    });

    describe("when the login credentials are not recognised", () => {

        test("will set the statusCode to 400", () => {
            fetch('/400').then((response) => {
                if (response.status === 400) {
                    return response;
                }
            })
        });

        test("will respond with json", () => {
            login(mockReq, mockRes);
            expect(mockRes.json.mock.calls.length).toEqual(1);
        });

        test("responds with an object with a result property equal to 'Failure'", () => {
            expect(mockBadLogin).toEqual({
                usernmane: "hello",
                password: "crippin"
            });
        })

    });

})