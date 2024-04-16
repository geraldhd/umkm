import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import jwt from "jsonwebtoken";

async function handleGetMethod(req: NextApiRequest, res: NextApiResponse) {
    if (typeof req.cookies.token === "undefined") {
      return res.status(401).json({ message: "Unauthorized" });
    }
  
    jwt.verify(req.cookies.token, "dgbzuhuy", (err) => {
      if (err) {
        return res.status(401).json({ message: "Unauthorized" });
      }
    });
    try {
      const response = await prisma.umkm_Pemasaran.findMany();
      const response1 = await prisma.umkm_Binaan.findMany();
      res.status(200).json(response);
      res.status(200).json(response1);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Terjadi kesalahan saat mengambil data" });
    }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
      handleGetMethod(req, res);
    }
}

