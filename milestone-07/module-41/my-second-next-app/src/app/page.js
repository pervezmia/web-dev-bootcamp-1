import Counter from "@/components/Counter";
import Pervez from "@/components/Pervez";



export default function Home() {
  console.log("Alhamdulillah Summa Alhamdulillah");
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

        <Counter></Counter>
        <Pervez></Pervez>
      </main>
    </div>
  );
}
