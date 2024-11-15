import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

export const R = () => {
  return (
    <>
      <h1
        id="r programming"
        className="underline underline-offset-8 text-center text-violet-500 mt-20 mb-16 sm:text-7xl text-5xl  font-bold"
      >
        R Programming
      </h1>

      <div className="md:mx-[18rem] mx-[1rem]">
        <Accordion
          allowToggle
          className="text-3xl border border-violet-500"
          style={{ borderWidth: "5px" }}
        >
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  className="md:text-3xl text-2xl bg-transparent mx-2 my-1"
                >
                  R Programming one short
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} className=" flex flex-wrap">
              <a
                className="link-style"
                href="https://drive.google.com/file/d/1uWAyGKQF3Zp8V_kNUN66ixxOtUMDor8Q/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                R Programming one short
              </a>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};
