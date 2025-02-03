import React from "react";
import Container from "../shared/Container";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Map } from "lucide-react";

const SubHero = () => {
  return (
    <div className="w-full py-16">
      <Container className="flex flex-col md:flex-row justify-between md:items-center gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-[2rem] leading-[2.4rem] space-x-[.01em] text-center md:text-left">
            4 Aparthotels in London
          </h2>

          <Button
            className="h-[49.6px] bg-transparent rounded-full w-fit border-black border-opacity-15 hover:bg-[#beb7aa] hover:border-none mx-auto md:mx-0"
            variant={"outline"}
          >
            <Map />
            <Separator
              orientation="vertical"
              className="bg-black bg-opacity-15 mx-2"
            />
            <span className="text-[1rem] font-normal leading-[1.35rem] space-x-[.01em]">
              Map
            </span>
          </Button>
        </div>

        <div className="max-w-[431.74px] flex justify-self-start text-center md:text-left mx-auto md:mx-0">
          <p className="text-[1.375rem] leading-[2.0625rem] space-x-[0.01375em]">
            Why London? World-class art, ravishing food and pubs older than
            certain countries. Any more questions?
          </p>
        </div>
      </Container>

      <Separator className="my-8 bg-black bg-opacity-15 w-[90%] mx-auto" />
    </div>
  );
};

export default SubHero;
