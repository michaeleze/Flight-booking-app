import request from 'supertest';
import * as mock from '../mock.json';
import handler from '../pages/api/flights';

describe('sendSomeStuff', () => {
  it('should create a new post', async () => {
    const res = await request(handler).post('/api/flights').send({
      userId: 1,
      title: 'test is cool',
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty(String('mock'));
  });
});
