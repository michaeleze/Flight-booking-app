import type { NextApiRequest, NextApiResponse } from 'next';
import * as mock from '../../mock.json';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<typeof mock>
) {
  if (req.method === 'GET') {
    const { origin, destination } = req.query;
    res.setHeader('Content-Type', 'application/json');
    if (origin && destination) res.status(200).json(mock);
  }
}
