import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, Box,
} from '@chakra-ui/react'



export const Dm = () => {
    return (
      <>
        <h1
          id="digital marketing"
          className="underline underline-offset-8 text-center text-violet-500 mt-20 mb-16 sm:text-7xl text-5xl  font-bold"
        >
          Digital Marketing
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
                    Dm Topics
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className=" flex flex-wrap">
                <a
                  className="link-style"
                  href="https://drive.google.com/file/d/1KZd-9u11S_jZ-fBqiPBsLQK__5Fqs8tm/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Inbound vs Outbound Marketing
                </a>
                <a
                  className="link-style"
                  href="https://drive.google.com/file/d/1lsagGTK7HaNsmNvPX-qTWyL9Zahft3nw/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Components of dm
                </a>
                <a
                  className="link-style"
                  href="https://drive.google.com/file/d/1C86L89l4fytVOoDldl8DwoAdIgV2hbyS/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Dm
                </a>
                <a
                  className="link-style"
                  href="https://drive.google.com/file/d/1SonP4uuDZZQhVoRVwzX0k3FSQ-2vbHgh/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Traditional Marketing vs Digital Marketing
                </a>
                <a
                  className="link-style"
                  href="https://drive.google.com/file/d/1aI75ha7d1RV22zCVMfB3LY3wEiprXEdi/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Peom Structure
                </a>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </>
    );
}
