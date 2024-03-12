import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, Box,
} from '@chakra-ui/react'



export const Fcpit = () => {
    return (
      <>
        <h1
          id="fcpit"
          className="underline underline-offset-8 text-center text-violet-500 mt-20 mb-16 sm:text-7xl text-5xl  font-bold"
        >
          Fundamentals of computer
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
                    className="md:text-3xl text-2xl bg-transparent mx-2 my-1 "
                  >
                    Ms-Excel
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className=" flex flex-wrap">
                <a
                  className="link-style"
                  href="https://drive.google.com/file/d/1W3L6k47x6ZMRWoB8PFheM5JeNo0nLZTs/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Excel formulas
                </a>
                <a
                  className="link-style"
                  href="https://drive.google.com/file/d/1KvzQuAPoQitTxQE6LbpH1AT86x1qJuMB/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mail merge
                </a>
                <a
                  className="link-style"
                  href="https://drive.google.com/file/d/1Sb1459rzbW9znUpJVbyTpeBZY5Hcujcl/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Macro
                </a>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    className="md:text-3xl text-2xl bg-transparent mx-2 my-1"
                  >
                    Ms-Word
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className=" flex flex-wrap">
                <a
                  className="link-style"
                  href="https://drive.google.com/file/d/16cG2wZfSjSyGH3xyFUK09jXyUf9WUm47/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Shortcuts in Ms-word
                </a>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    className="md:text-3xl text-2xl bg-transparent mx-2 my-1"
                  >
                    Fundamentals
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className=" flex flex-wrap">
                <a
                  className="link-style"
                  href="https://drive.google.com/file/d/11F5VU-4qy9crKnkk27WJs-gh5b8qmBFG/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Computer Language
                </a>
                <a
                  className="link-style"
                  href="https://drive.google.com/file/d/1A01RbimqvdKVcuBSJurYTvYCDLI8JR5e/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Registers
                </a>
                <a
                  className="link-style"
                  href="https://drive.google.com/file/d/12oFd35mPtb2guUCkfhvuy_pY-IlMNjP9/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Fcpit Module
                </a>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </>
    );
}
