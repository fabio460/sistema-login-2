import { PrismaClient } from "@prisma/client";
import { execSync } from "child_process";

// Força a geração dos tipos no ambiente Serverless da Vercel
try {
  execSync("npx prisma generate", { stdio: "inherit" });
} catch (e) {
  console.error("Erro ao gerar Prisma Client:", e);
}

const prisma = new PrismaClient();

export { prisma };
