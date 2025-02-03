import Container from "@/components/shared/Container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { JoinUsData } from "@/lib/data";
import Image from "next/image";
import { Button } from "../ui/button";

const JoinUs = () => {
  return (
    <main className="w-full min-h-screen mt-20">
      <Container>
        <header className="mt-20">
          <h1 className="font-mediaanIt text-[1.75rem] leading-[1.8375rem] my-6">
            Become a member
          </h1>
          <h2 className="text-[3.875rem] leading-[4.2625rem] mb-6">
            Join the
            <br />
            Wilde–side
          </h2>
        </header>

        <div className="mt-12">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <header className="flex justify-between items-center mb-6">
              <h1 className="text-[3.875rem] leading-[4.2625rem]">
                Our Favourites
              </h1>
              <div className="flex items-center gap-6">
                <CarouselPrevious
                  className="w-[52px] h-[52px] bg-transparent border-black hover:bg-primaryBg hover:border-none"
                  variant={"outline"}
                />
                <CarouselNext
                  className="w-[52px] h-[52px] bg-transparent border-black hover:bg-primaryBg hover:border-none"
                  variant={"outline"}
                />
              </div>
            </header>
            <CarouselContent>
              {JoinUsData.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="ml-[100px] md:ml-0 basis-1/2 lg:basis-1/3"
                >
                  <div className="flex flex-col gap-4 items-center">
                    <h3
                      id="small-title"
                      className="text-[1.375rem] leading-[1.58125rem;] font-mediaanIt"
                    >
                      {item.smallTitle}
                    </h3>
                    <h2
                      id="large-title"
                      className="text-center text-[2.625rem] max-w-[294px] leading-[3.15rem] space-x-[.0131em]"
                    >
                      {item.largeTitle}
                    </h2>
                    <div
                      className={`min-w-[294px] min-h-[294px] relative ${
                        item.start !== true &&
                        "border-l-[1px] border-black border-opacity-15"
                      }`}
                      id="image-container "
                    >
                      <Image src={item.image} alt="" fill />
                    </div>
                    <p className="text-center max-w-[294px] text-[1.25rem] leading-[2rem] space-x-[.0125em]">
                      {item.description}
                    </p>
                    <Button
                      className="rounded-full font-mediaanIt text-xl bg-transparent border-black hover:bg-black hover:text-white"
                      variant={"outline"}
                    >
                      {item.buttonText}
                    </Button>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </Container>
    </main>
  );
};

export default JoinUs;
