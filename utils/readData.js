import fs from "fs";

export function readData(path) {
  if (!fs.existsSync(path)) return [];
  return JSON.parse(fs.readFileSync(path));
}
