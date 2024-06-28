import Cartskeleton from "@/components/Cartskeleton";

const array = Array.from({ length: 10 }).fill(null); // Or any value you want

export default function Loading() {
  // including a Skeleton.
  return (
    <div className="w-[80%] mx-auto">
      <div className="grid grid-cols-5 gap-x-4 gap-y-10">
        {array?.map((arr: any) => (
          <Cartskeleton key={arr} />
        ))}
      </div>
    </div>
  );
}
