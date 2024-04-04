import Footer from "@/components/footer";
import Hadist from "@/components/hadist";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { useHadist } from "@/hooks/useHadist";
import { Loader } from "lucide-react";

//TODO: Create feature for bookmarking hadist, store data on local storage
//TODO: Create feature for sharing hadist to social media

export default function Home() {
  const data = useHadist();

  return (
    <main className="flex flex-col gap-4 max-w-screen-md m-auto py-14 min-h-screen px-10 sm:px-0">
      <div className="space-y-4">
        <Heading
          title="Hadist of the day"
          description="Hadist of the day is a hadist that is updated every day."
        />
        <Separator className="mt-4" />
      </div>
      {data?.id ? (
        <Hadist data={data} />
      ) : (
        <Loader
          className="animate-spin text-center m-auto"
          size={20}
        />
      )}
      <Footer />
    </main>
  );
}
