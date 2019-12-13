const database = require('../services/database');
const create = require('../routes/users/create');

jest.mock('../services/database');

describe('User Create Endpoint', () => {

    const dummyConnection = "hello";
    const notFoundId = "no id found";
    const foundEmail = "found";
    const mockSave = jest.fn();
    const mockValidate = jest.fn();

    class DummyData {
        static findOne({ email }) {
            if (email === foundEmail) {
                return Promise.resolve('A response');
            };
            return Promise.resolve(null);
        }
        save() {
            return mockSave();
        }

        validate () {
            return mockValidate();
        }
    }

    const dummyUser = {
        _id: 123456,
        first_name: 'Bob',
        last_name: 'Shilling',
        email: 'test@test.com'
    }

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

    beforeEach(() => {
        database.connect.mockImplementation(() => Promise.resolve(dummyConnection));
        database.loadModel.mockImplementation(() => DummyData);
        mockSave.mockResolvedValue(dummyUser);
        mockValidate.mockResolvedValue(true);
    });

    afterEach(() => {
        mockRes.status.mockClear();
        mockRes.json.mockClear();
        mockSave.mockReset();
        mockValidate.mockReset();
    });
    
    describe('when the payload is invalid', () => {

        const dummyErrorMessage = 'test error';
        const dummyError = {
            errors: {
                email: {
                    message: dummyErrorMessage
                }
            }
        }

        beforeEach(() => {
            mockValidate.mockRejectedValue(dummyError);
        });
        
        test('it should respond with a 400', async () => {
            await create(mockReq, mockRes);
            expect(mockRes.status).toHaveBeenCalledWith(400);
        });

        test('responds with an payload error', async () => {
            await create(mockReq, mockRes);
            expect(mockRes.json).toHaveBeenCalledWith({
                error: "failed - Not Valid",
                failures:{
                    email: dummyErrorMessage
                }
            })
        });

    });

    describe('when the save operation fails', () => {

        beforeEach(() => {
            mockReq.body.email = 'something-else';
            mockSave.mockRejectedValue(true);

        });
        
        test('it should respond with a 500 status', async () => {
            await create(mockReq, mockRes);
            expect(mockRes.status).toHaveBeenCalledWith(500);
        });

        test('should responds with appropriate json response', async () => {
            await create(mockReq, mockRes);
            expect(mockRes.json).toHaveBeenCalledWith({
                error: 'Unexpected error, Please try again later.'
            });
        });

    });

    describe('when everything is working as expected', () => {

        test('responds with a 200 and the created record', async () => {
            await create(mockReq, mockRes);
            expect(mockRes.json).toHaveBeenCalledWith({
                user: dummyUser
            });
        });

    });

});