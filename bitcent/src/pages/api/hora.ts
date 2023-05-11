import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.status(200).send(`
        <html>
            <head>
                <style>
                    html {
                        color: #eee;
                        background-color: #333;
                        font-size: 5rem;
                    }
                </style>
            </head>
            <body>
                <b>Hora certa:</b>
                ${new Date().toLocaleTimeString('pt-BR')}
            </body>
        </html>
    `)
}