import Cartskeleton from "@/components/common/Cartskeleton";

const array = Array.from({ length: 10 }).fill(null); // Or any value you want

export default function Loading() {
  // including a Skeleton.
  return (
    <div className="layout-width">
      <div className="grid grid-cols-5 gap-x-4 gap-y-10">
        {array?.map((arr: any) => (
          <Cartskeleton key={arr} />
        ))}
      </div>
    </div>
  );
}
