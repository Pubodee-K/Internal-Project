// import { SkeletonLoading } from "@/front-end/components/skeleton-loading";

export default function Loading() {
  return (
    <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-3 lg:gap-5">
      <div>
        {/* <SkeletonLoading className="h-8 lg:h-60" /> */}
      </div>
      <div className="mt-4 lg:col-span-2 lg:mt-0">
        {/* <SkeletonLoading className="h-18 lg:h-50" /> */}
      </div>
      <div className="mt-3.5 lg:col-span-2 lg:col-start-2 lg:-mt-9">
        {/* <SkeletonLoading className="h-[330px] lg:h-[724px]" /> */}
      </div>
    </div>
  );
}
