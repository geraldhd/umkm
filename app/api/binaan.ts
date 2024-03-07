import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import jwt from "jsonwebtoken";
//import venue_validation from "@/validation/venue_validation";

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
    const response = await prisma.umkm_Binaan.findMany();
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Terjadi kesalahan saat mengambil data" });
  }
}

async function handlePostMethod(req: NextApiRequest, res: NextApiResponse) {
  const dataFromClient = req.body;
//   const validation = venue_validation.safeParse(dataFromClient);
//   if (validation.success === false) {
//     return res.status(403).json(validation.error.flatten().fieldErrors);
//   }
  try {

    const result = await prisma.umkm_Binaan.create({
      data: {
        NamaUMKM: dataFromClient.NamaUMKM,
        NamaPemilik: dataFromClient.NamaPemilik,
        Kategori: dataFromClient.Kategori,
        Alamat: dataFromClient.Alamat,
        NoHP: dataFromClient.NoHP,
        KabKota: dataFromClient.KabKota,
        Keterangan: dataFromClient.Keterangan,
      },
    });

    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Terjadi kesalahan saat menyimpan data" });
  }
}

async function handleDeleteMethod(req: NextApiRequest, res: NextApiResponse) {
    const idData = req.query.Id as string;
    try {
      const response = await prisma.umkm_Binaan.delete({
        where: {
          Id: idData,
        },
      });
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Terjadi kesalahan saat mengambil data" });
    }
}

async function handlePutMethod(req: NextApiRequest, res: NextApiResponse) {
  const dataFromClient = req.body;

  try {
    const result = await prisma.umkm_Binaan.update({
      data: {
        NamaUMKM: dataFromClient.NamaUMKM,
        NamaPemilik: dataFromClient.NamaPemilik,
        Kategori: dataFromClient.Kategori,
        Alamat: dataFromClient.Alamat,
        NoHP: dataFromClient.NoHP,
        KabKota: dataFromClient.KabKota,
        Keterangan: dataFromClient.Keterangan,
      },
      where: {
        Id: dataFromClient.Id,
      },
    });

    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Terjadi kesalahan saat memperbarui data" });
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    handleGetMethod(req, res);
  }

  if (req.method === "POST") {
    handlePostMethod(req, res);
  }

  if (req.method === "DELETE") {
    handleDeleteMethod(req, res);
  }

  if (req.method === "PUT") {
    handlePutMethod(req, res);
  }
}
