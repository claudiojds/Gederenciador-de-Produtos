import { PrismaClient } from "@prisma/client";

// verificar se necessario do uso do new
const prismaClient = new PrismaClient();

export default prismaClient;