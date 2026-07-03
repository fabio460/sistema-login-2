import express from "express";
import { getUsuario } from "./controllers/usuarioControllers";

const app = express();
app.use(express.json());

// Rota padrão para teste
app.get("/usuario", getUsuario);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
