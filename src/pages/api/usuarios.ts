import { NextApiRequest, NextApiResponse } from "next"

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.status(200).json([
        { name: 'Leandro', email: 'leandro@gmail.com' },
        { name: 'Luciana', email: 'luciana@gmail.com' },
        { name: 'Beatriz', email: 'beatriz@gmail.com' },
        { name: 'Pedro Henrique', email: 'pedrohenrique@gmail.com' },
    ])
}