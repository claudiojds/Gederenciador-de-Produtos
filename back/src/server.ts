import express, { Request, Response, NextFunction } from "express";
import { router } from "./routes";
import "express-async-errors"

const app = express();
const port = 3306;
app.use(express.json());
app.use(router);

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if(err instanceof Error){
            return response.status(400).json({
                error: err.message,
            });
        }

        return response.status(500).json({
            status: "error",
            message: "Erro 500: Internal server error"
        });
    }
);

app.listen(port, () =>{
    console.log("Servidor rodando na poprta 3306, Projeto Cadastro de Produtos!")
});