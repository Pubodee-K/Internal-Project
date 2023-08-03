import FetchFavicon from "@/api/fetch-favicon";
import ico from "icojs";
import { project_name_join_all } from "@/types/interfaces";
import Jimp from "jimp";

export const revalidate = 0;

export default async function CompareFavicon(data: project_name_join_all) {
  //get supahase record
  const base64Favicon = data.favicons.pop();
  const projectUrl = data.urls.pop();

  // get supabase favicon base64 buffer
  const base64buffer = base64Favicon
    ? Buffer.from(base64Favicon?.favicons, "base64")
    : undefined;

  // get site buffer
  const faviconData: ArrayBuffer = await FetchFavicon(projectUrl?.url);
  const pngBuffer = ico
    .parse(faviconData, "image/png")
    .then((images) => Buffer.from(images[0].buffer));

  return Promise.all([base64buffer, pngBuffer])
    .then(([base64Buffer, pngBuffer]) => {
      if (!base64Buffer) return false;
      else {
        // read both images
        const base64BufferRead = Jimp.read(base64Buffer);
        const pngBufferRead = Jimp.read(pngBuffer);
        return Promise.all([base64BufferRead, pngBufferRead]).then(
          ([base64Jimp, pngJimp]) => {
            // compare with pics distance
            const picsDistance = Jimp.distance(base64Jimp, pngJimp);
            // compare with pics diff
            const picsDiff = Jimp.diff(base64Jimp, pngJimp);
            console.log(picsDistance, "picsDistance");
            console.log(picsDiff.percent, "picsDiff");
            return picsDistance < 0.15 && picsDiff.percent < 0.25;
          }
        );
      }
    })
    .finally(() => console.log("finished"));
}
