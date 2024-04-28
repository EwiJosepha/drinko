import { Button } from "@/components/ui/button";
import LandingPage from "./landing/page";

export default function Home() {
  return (<>
    <main className=" p-24">
      <LandingPage />
    </main>
    {/* <section className="p-24">
      <h1 className=" text-2xl font-bold">SHADCN is awesome </h1>
      <p className="text-2xl text-muted-foreground">handy code for themes easy to implement in our code</p>
    </section>
    <div className="flex gap-8 p-24">
      <Button>LEARN MORE</Button>
      <Button>LEARN MORE</Button>

    </div> */}
  </>
  );
}
