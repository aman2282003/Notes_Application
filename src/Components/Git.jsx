import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

export const Git = () => {
  return (
    <>
      <h1
        id="git"
        className="underline underline-offset-8 text-center text-violet-500 mt-20 mb-16 sm:text-7xl text-5xl  font-bold"
      >
        Git & Github
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
                  Git Commands
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} className=" flex flex-wrap">
              <a
                className="link-style"
                href="https://drive.google.com/file/d/1SHAoQgk815VAgccGXTEUPCUbAwUotvi_/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Git Cheat Sheet
              </a>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};
