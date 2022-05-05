import handler from '@/pages/api/flights';
import { createMocks } from 'node-mocks-http';
import * as mock from '../mock.json';

describe('/api/flight', () => {
  test('returns a message with the specified animal', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: {
        origin: 'FRA',
        destination: 'LHR',
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(expect.objectContaining(mock));
  });
});
