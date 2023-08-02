import ico from "icojs";
import fs from "fs";
import Jimp from "jimp";
import axios from "axios";

export default async function main() {
  const siteURL = "8.219.208.165";

  // ico to png
  const { data } = await axios.get(`https://icon.horse/icon/${siteURL}`, {
    responseType: "arraybuffer",
  });
  const pngConvert = (await ico.parse(data, "image/png"))[0];
  // png to buffer
  const pngBuffer = Buffer.from(pngConvert.buffer);
  // base64 to buffer
  const base64 = fs.readFileSync("./image/favicon.txt", "utf-8");
  const base64buffer = Buffer.from(base64, "base64");
  // read both pics
  const JimpImage = await Jimp.read(base64buffer);
  const JimpImage1 = await Jimp.read(pngBuffer);
  // compare pics
  const diff = Jimp.diff(JimpImage, JimpImage1);
  const distance = Jimp.distance(JimpImage, JimpImage1);
  console.log(diff.percent, "diff");
  console.log(distance, "distance");
}

main();
