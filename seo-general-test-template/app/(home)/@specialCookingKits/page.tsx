import Image from "next/image";

import * as Home from "@/app/front-end/screens/home";

// import { getImageFormat } from "@/front-end/utils/get-image-format";


export default async function Page() {
  // const banners = await Event.getBanners({ lang });

  return (
    <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-[274px_repeat(2,_1fr)] lg:gap-5">
      <div className="mt-3.5 lg:col-span-2 lg:col-start-2 lg:-mt-9">
        <Home.SpecialCookingKitsProducts />
        {/* <div className="h-[330px] bg-black-100 lg:h-[724px]"></div> */}
      </div>
    </div>
  );
}
