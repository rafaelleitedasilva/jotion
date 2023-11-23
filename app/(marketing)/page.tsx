import { Heading } from "./_components/heading";
import { Heroes } from "./_components/heroes";
import { Footer } from "./_components/footer";

const MarketinPage = () => {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col items-center justify-center md:justidy-start text-center gap-y-8 flex-1 px-6 pb-10 dark:bg-[#1F1F1F]">
        <Heading></Heading>
        <Heroes></Heroes>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MarketinPage;
