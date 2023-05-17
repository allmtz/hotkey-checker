// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import mysql from "mysql2";
import { chromeHks } from "../../../hotkeys/chromeHotkeys";
import type { NextApiRequest, NextApiResponse } from "next";

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  database: "hotkeys",
  password: "",
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const lines = chromeHks.split("\n");

  lines.forEach((line) => {
    const splitLine = line.split(":");
    const description = splitLine[0];
    const command = splitLine[1];

    const sql = `INSERT INTO hotkeys(command, description, browser) VALUES( "${command}", "${description}" , ${0});`;
    db.query(sql);
  });

  res.status(200).json({ msg: "Successfully inserted into table" });
}
