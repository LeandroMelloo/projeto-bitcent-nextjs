import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const colunas = +(req.query.colunas || 10)
    const linhas = +(req.query.linhas || 10)

    // http://localhost:3000/api/tabela?colunas=6&linhas=4
    res.status(200).send(`
        <html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                <style>
                    html {
                        background-color: #333;
                        color: #eee;
                    }

                    table {
                        border-collapse: collapse;
                        width: 100%;
                        font-size: 2rem;
                    }
                </style>
            </head>
            <body>
                <table border="1">
                    ${linhasEColunas(colunas, linhas)}
                </table>
            </body>
        </html>
    `)
}

function linhasEColunas(colunas: number, linhas: number) {
    let html = ''
    for(let l = 0; l < linhas; l++) {
        html += `<tr>`
        for(let c = 0; c < colunas; c++) {
            html += `<td>${l + 1}x${c + 1}</td>`
        }
        html += `</tr>`
    }
    return html
}