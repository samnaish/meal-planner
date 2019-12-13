const database = require('../services/database');
const list = require('../routes/users/list');

jest.mock('../services/database');

describe.only('List User Endpoint', () => {

    const dummyConnection = 'hello';
    const dummyResults = [1,2,3,4,5,6];
    const findStub = jest.fn();
    
    class DummyModel {
        static find () {
            return findStub();
        }
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
        database.loadModel.mockImplementation(() => DummyModel);
        findStub.mockImplementation(() => Promise.resolve(dummyResults));
    });

    afterEach(() => {
        mockRes.status.mockClear();
        mockRes.json.mockClear();
    });

    describe('when user list is successful', () => {
        
        test('responds with a 200 and the json response', async () => {
            await list(mockReq, mockRes);
            expect(mockRes.json).toHaveBeenCalledWith({
                results: dummyResults
            });
        });

    });

    describe('when there is an error', () => {

        beforeEach(() => {
            findStub.mockImplementation(() => Promise.reject('test fail!'))
        });
        
        test('responds with an 500 status code and a json error message', async () => {
            await list(mockReq, mockRes);
            expect(mockRes.status).toHaveBeenCalledWith(500);
            expect(mockRes.json).toHaveBeenCalledWith({
                error: 'Unexpected error. Please try again later.'
            });
        });

    });
});