const express = require("express");
const cors = require("cors");
const authRoutes = require("./auth"); // Importe suas rotas de autenticação

const app = express();
const port = 5000; // A porta não importa no Vercel, a função serverless vai ser chamada diretamente

// Configuração do CORS
app.use(cors());  // Habilita o CORS para todas as origens

// Middleware para parse do corpo das requisições
app.use(express.json());

// Use as rotas de autenticação
app.use("/api/auth", authRoutes);

// Exporta a função serverless
module.exports = (req, res) => {
  // A função serverless recebe o req e res como argumentos
  app(req, res);
};
