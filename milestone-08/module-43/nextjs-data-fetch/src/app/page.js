import Home from "@/components/Home";


export default function Page() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans ">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16">
        <Home></Home>
      </main>
    </div>
  );
}
