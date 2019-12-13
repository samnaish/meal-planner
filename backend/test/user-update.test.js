const database = require('../services/database');
const update = require('../routes/users/update');

jest.mock('../services/database');

describe('Update User Enpoint', () => {
    
    const dummyConnection = "hello";
    const foundUserId = "found";
    const mockValidate = jest.fn();
    const mockUpdate = jest.fn(() => {
        
    });

    class DummyModel {
        static findOne({ _id }) {
            if (_id === foundUserId) {
                return Promise.resolve('something');
            };
            return Promise.resolve(null);
        }
        static findOneAndUpdate () {
            return mockUpdate();
        }
        validate () {
            return mockValidate();
        }
    }

    const mockReq = {
        body: {},
        query: {}
    };

    const mockRes = {
        status: jest.fn(() => {
            const { json } = mockRes;
            return { json };
        }),
        json: jest.fn()
    };

    const dummyUser = {
        _id: 123456,
        first_name: 'Bob',
        last_name: 'Shilling',
        email: 'test@test.com'
    }

    beforeEach(() => {
        database.connect.mockImplementation(() => Promise.resolve(dummyConnection));
        database.loadModel.mockImplementation(() => DummyModel);
        mockUpdate.mockReturnValue(dummyUser);
        mockValidate.mockResolvedValue(true);
    });

    afterEach(() => {
        mockRes.status.mockClear();
        mockRes.json.mockClear();
        mockUpdate.mockReset();
        mockValidate.mockReset();
    });

    describe('when the user Id can not be found', () => {
        
        beforeEach(() => {
            mockReq.query.id = 'anything';
        });

        test('responds with a 404 status code', async () => {
            await update(mockReq, mockRes);
            expect(mockRes.status).toHaveBeenCalledWith(404);
        });

        test('reponds with a json object with an message', async () => {
            await update(mockReq, mockRes);
            expect(mockRes.json).toHaveBeenCalledWith({
                error: 'User not found'
            });
        });

    });    
    
    describe('when the provided payload is not valid', () => {
     
        const dummyErrorMessage = 'some test error';
        const dummyError = {
            error: dummyErrorMessage
        }

        beforeEach(() => {
            mockReq.query.id = foundUserId;
            mockValidate.mockRejectedValue(dummyError);
        });

        test('responds with an 400 status code', async () => {
            await update(mockReq, mockRes);
            expect(mockRes.status).toHaveBeenCalledWith(400);
        });

        test('responds with a json response', async () => {
            await update(mockReq, mockRes);
            expect(mockRes.json).toHaveBeenCalledWith({
                error: 'Not valid User'
            });
        });

    });

    describe('when there is an error', () => {
        
        beforeEach(() => {
            mockReq.query.id = foundUserId;
            mockUpdate.mockRejectedValue(true);
        });

        test('responds with a 500 status code', async () => {
            await update(mockReq, mockRes);
            expect(mockRes.status).toHaveBeenCalledWith(500);
        });
    });

    describe('when everything is working as expected', () => {

        test('responds with a 200 and the created record', async () => {
            await update(mockReq, mockRes);
            expect(mockRes.json).toHaveBeenCalledWith({
                result: dummyUser
            });
        });

    });

});