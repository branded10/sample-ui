// /api/register.js
import jwt from 'jsonwebtoken';
import User from '@/mongodb/models/User';
import { NextApiRequest, NextApiResponse } from 'next';

export async function POST(req: NextApiRequest, res:NextApiResponse) {
  if (req.method === 'POST') {
    // Extract user data from request body
    const { name, email, password, phoneNumber } = req.body;

     // Check if required fields are provided
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

    // Create new user document in MongoDB
    const user = await User.create({ name, email, password, phoneNumber });

    // Create JWT token
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error('JWT Secret is undefined');
      }
    const token = jwt.sign({ userId: user._id }, secret, { expiresIn: '1h' });

    // Return user data and token
    res.status(200).json({ user, token });
  } else {
    // Handle other HTTP methods
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
