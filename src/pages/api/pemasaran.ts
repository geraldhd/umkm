import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import jwt from "jsonwebtoken";
import multer, { MulterError } from 'multer';
import exceljs from 'exceljs';
import { Buffer } from 'exceljs';

const upload = multer({ dest: 'uploads/' });

async function handleGetMethod(req: NextApiRequest, res: NextApiResponse) {
  // if (typeof req.cookies.token === "undefined") {
  //   return res.status(401).json({ message: "Unauthorized" });
  // }

  // jwt.verify(req.cookies.token, "dgbzuhuy", (err) => {
  //   if (err) {
  //     return res.status(401).json({ message: "Unauthorized" });
  //   }
  // });

  try {
    const response = await prisma.umkm_Pemasaran.findMany();
    res.status(200).json(response);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Terjadi kesalahan saat mengambil data" });
  }
}

async function handlePostMethod(req: NextApiRequest, res: NextApiResponse) {
  const dataFromClient = req.body;

  try {
    const result = await prisma.umkm_Pemasaran.create({
      data: {
        NamaBrand: dataFromClient.NamaBrand,
        NamaOwner: dataFromClient.NamaOwner,
        Kategori: dataFromClient.Kategori,
        Alamat: dataFromClient.Alamat,
        NoHP: dataFromClient.NoHP,
        Keterangan: dataFromClient.Keterangan,
      },
    });

    res.status(200).json(result);
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ message: "Terjadi kesalahan saat menyimpan data" });
  }
}

async function handleDeleteMethod(
  req: NextApiRequest, 
  res: NextApiResponse
  ) {
    const idData = req.query.Id as string;
    try {
      const response = await prisma.umkm_Pemasaran.delete({
        where: {
          Id: idData,
        },
      });
      res.status(200).json(response);
    } catch (err: any) {
      console.error(err);
      res.status(500).json({ message: "Terjadi kesalahan saat menghapus data" });
    }
}

async function handlePutMethod(req: NextApiRequest, res: NextApiResponse) {
  const dataFromClient = req.body;

  try {
    const result = await prisma.umkm_Pemasaran.update({
      data: {
        NamaBrand: dataFromClient.NamaBrand,
        NamaOwner: dataFromClient.NamaOwner,
        Kategori: dataFromClient.Kategori,
        Alamat: dataFromClient.Alamat,
        NoHP: dataFromClient.NoHP,
        Keterangan: dataFromClient.Keterangan,
      },
      where: {
        Id: dataFromClient.Id,
      },
    });

    res.status(200).json(result);
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ message: "Terjadi kesalahan saat memperbarui data" });
  }
}

async function readExcel(filePath: string): Promise<any[]> {
  try {
    const workbook = new exceljs.Workbook();
    await workbook.xlsx.readFile(filePath);

    const worksheet = workbook.getWorksheet(1);
    if (!worksheet) {
      throw new Error('Worksheet tidak ditemukan.');
    }

    const headers: string[] = [];
    const data: any[] = [];

    worksheet.getRow(1).eachCell((cell) => {
      headers.push(cell.value as string);
    });

    for (let i = 2; i <= worksheet.rowCount; i++) {
      const row = worksheet.getRow(i);
      const rowData: any = {};

      for (let j = 1; j <= headers.length; j++) {
        rowData[headers[j - 1]] = row.getCell(j).value;
      }

      data.push(rowData);
    }

    return data;
  } catch (err:any) {
    throw new Error(`Terjadi kesalahan dalam membaca file Excel: ${err.message}`);
  }
}

async function writeExcel(data: any[]): Promise<Buffer> {
  const workbook = new exceljs.Workbook();
  const worksheet = workbook.addWorksheet('Data');

  const headers = Object.keys(data[0]);
  worksheet.addRow(headers);

  data.forEach((rowData) => {
    const values = headers.map((header) => rowData[header]);
    worksheet.addRow(values);
  });

  const buffer: Buffer = await workbook.xlsx.writeBuffer(); // Tentukan tipe Buffer secara eksplisit
  return buffer;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    handleGetMethod(req, res);
  }

  if (req.method === "POST") {
    handlePostMethod(req, res);
  }

  // if (req.method === "POST") {
  //   const uploadMiddleware = upload.single('file'); // Menambahkan middleware multer untuk menangani file
  //   uploadMiddleware(req as any, res as any, (err: any) => { // Update fungsi callback untuk multer
  //     if (err) {
  //       console.error(err);
  //       return res.status(500).json({ message: "Terjadi kesalahan dalam upload file." });
  //     }
  //     handlePostMethod(req, res);
  //   });
    
  // }

  if (req.method === "DELETE") {
    handleDeleteMethod(req, res);
  }

  if (req.method === "PUT") {
    handlePutMethod(req, res);
  }

  // if (req.method === 'POST') {
  //   if (req.body.type === 'import') {
  //     try {
  //       const data = await readExcel(req.body.file.path); // Menggunakan req.body.file untuk akses file
  //       res.json(data);
  //     } catch (error: any) {
  //       console.error('Error:', error);
  //       res.status(500).send('Terjadi kesalahan dalam mengimpor file Excel.');
  //     }
  //   }
  // }

  // if (req.method === 'GET') {
  //   if (req.query.type === 'export') {
  //     try {
  //       const data = await prisma.umkm_Pemasaran.findMany();
  //       const buffer = await writeExcel(data);
  //       res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  //       res.setHeader('Content-Disposition', 'attachment; filename=data.xlsx');
  //       res.send(buffer);
  //     } catch (error: any) {
  //       console.error('Error:', error);
  //       res.status(500).send('Terjadi kesalahan dalam mengekspor file Excel.');
  //     }
  //   }
  // }
}
