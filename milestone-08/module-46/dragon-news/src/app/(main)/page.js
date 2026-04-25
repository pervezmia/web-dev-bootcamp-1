import Image from "next/image";

export default function Home() {
  return (
    <div className="grid md:grid-cols-4 gap-5 p-2 md:p-0 container mx-auto lg:max-w-[90%] my-[60px]">
      
      <div className="grid-cols-1 font-bold text-3xl bg-green-100">All categories</div>
      <div className="md:col-span-2 font-bold text-3xl bg-violet-100">All News</div>
      <div className="grid-cols-1 font-bold text-3xl bg-amber-100">Social Links</div>
      
      
    </div>
  );
}
