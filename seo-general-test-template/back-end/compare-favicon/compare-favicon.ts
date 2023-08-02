import FetchFavicon from "@/api/fetch-favicon";
import ico from "icojs";
import { getAllData, getFilteredData } from "@/utils/supabase-fetch";
import { createClient } from "@supabase/supabase-js";

export default async function CompareFavicon() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

  const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
      persistSession: false,
    },
  });
  const { data, error } = await supabase.from("favicons").select("*");
  console.log(data, "data");
  const faviconData: ArrayBuffer = await FetchFavicon();
  //   console.log(faviconData, "faviconData");
  const pngBuffer = await ico.parse(faviconData).then((images) => {
    // console.log(images);
    return Buffer.from(images[0].buffer);
  });
  //   console.log(pngBuffer, "pngBuffer");
}
