import handler from '@/pages/api/flights';
import { createMocks } from 'node-mocks-http';
import * as mock from '../mock.json';
import { cleanup } from '@testing-library/react';

describe('/api/flight', () => {
  const { req, res } = createMocks({
    method: 'GET',
    query: {
      origin: 'FRA',
      destination: 'LHR',
    },
  });

  beforeAll(async () => {
    await handler(req, res);
  });

  afterAll(cleanup);

  it('should be successful', async () => {
    expect(res._getStatusCode()).toBe(200);
  });

  it('should be successful', async () => {
    expect(JSON.parse(res._getData())).toEqual(expect.objectContaining(mock));
  });
});
