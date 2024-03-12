import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, Box,
} from '@chakra-ui/react'



export const Communication = () => {
    return (
      <>
        <h1
          id="communication"
          className="underline underline-offset-8 text-center text-violet-500 mt-20 mb-16 sm:text-7xl text-5xl  font-bold"
        >
          Communication & Soft skills
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
                    Communication Skills
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className=" flex flex-wrap">
                <a
                  className="link-style"
                  href="https://drive.google.com/file/d/1RmrBEdPjSz2JKS4DVYfsDEGPbuplxKCC/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Barriers of Communication
                </a>
                <a
                  className="link-style"
                  href="https://drive.google.com/file/d/1QiQZDDtUpfbCVgibOjpbfa_cC4z6DF8K/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Public Communication
                </a>
                <a
                  className="link-style"
                  href="https://drive.google.com/file/d/1gYCZazPVxPPsskMP4m9wsU6Q4CLAdI7G/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Types of Communication
                </a>
                <a
                  className="link-style"
                  href="https://drive.google.com/file/d/1bQ0frZJAulgO1EAgDdq50Z_xJaprJWVp/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Written Communication
                </a>
                <a
                  className="link-style"
                  href="https://drive.google.com/file/d/1HBtcR9wC5T-ng3q_i9NZ1LbbdFSuqKRT/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Non-verbal Communication
                </a>
                <a
                  className="link-style"
                  href="https://drive.google.com/file/d/1QsJAcSnBmQ1IA5WKdxAWItWIgElkLDj_/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Interview
                </a>
                <a
                  className="link-style"
                  href="https://drive.google.com/file/d/1TGkjYG9E5VUIRdWZhK7PX-k6RWYe9GA2/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Interpersonal Communication
                </a>
                <a
                  className="link-style"
                  href="https://drive.google.com/file/d/1cYGo4raC0ihlXO6lUarNVGHHuXX24icp/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Business Communication{" "}
                </a>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </>
    );
}
