import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import jwt from "jsonwebtoken";
import argon from "argon2";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const loginData = req.body;
  try {
    const userData = await prisma.user.findUnique({
      where: {
        Email: loginData.email,
      },
    });
    if (!userData)
      return res
        .status(404)
        .json({ message: "Email or password are incorrect." });

    const jwtToken = jwt.sign(
      {
        id: userData.Id,
        email: userData.Email,
      },
      "dgbzuhuy"
    );

    // check password
    const passwordValidate = await argon.verify(
      userData.Pass,
      loginData.password
    );
    if (!passwordValidate)
      return res.status(401).json({ message: "Email or password are incorrect." });

    res.setHeader(
      "Set-Cookie",
      `token=${jwtToken}; HttpOnly; path=/; SameSite=Lax; Secure`
    );
    res.status(200).json({
      id: userData.Id,
      email: userData.Email,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Something went wrong on the server, please try again later",
    });
  }
}