import type { NextApiRequest, NextApiResponse } from 'next';
import * as data from 'mock.json';

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    const {
      origin,
      destination,
      departureDate,
      returnDate,
      cabinCode,
      requestCountry,
      serviceType,
    } = req.query;

    res.status(200).json(data as any);
  }
}
