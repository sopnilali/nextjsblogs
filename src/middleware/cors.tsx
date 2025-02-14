import { NextApiRequest, NextApiResponse } from 'next';

export const cors =
    (handler: (req: NextApiRequest, res: NextApiResponse) => void) =>
        async (req: NextApiRequest, res: NextApiResponse) => {
            // Set CORS headers
            res.setHeader('Access-Control-Allow-Origin', 'https://nextjsblogs-blue.vercel.app'); // Allow all origins
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Allowed methods
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allowed headers

            // Handle preflight requests
            if (req.method === 'OPTIONS') {
                return res.status(200).end();
            }

            // Call the actual handler
            return handler(req, res);
};