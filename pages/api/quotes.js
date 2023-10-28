import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "data/quotes.json");
  const quotesJson = fs.readFileSync(filePath, "utf8");
  const quotes = JSON.parse(quotesJson);
  res.status(200).json(quotes);
}
