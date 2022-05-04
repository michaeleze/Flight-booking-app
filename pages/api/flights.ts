import type { NextApiRequest, NextApiResponse } from 'next';
import * as mock from 'mock.json';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<typeof mock>
) {
  if (req.method === 'GET') {
    console.log('backend', req.query);
    const { origin, destination, departureDate, returnDate, cabinCode } =
      req.query;

    res.status(200).json(mock);
  }
}
