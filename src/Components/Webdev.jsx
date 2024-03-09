import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

export const Webdev = () => {
  return (
    <>
      <h1 className="underline underline-offset-8 text-center text-violet-500 mt-20 mb-16 sm:text-7xl text-5xl  font-bold">
        Web dev
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
                  Html one short
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} className="flex justify-center">
              <a
                className="link-style"
                href="https://drive.google.com/file/d/1fdotHNeNJ6ffvqYbnX6Bdagizk58CXHv/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Animated Html Notes
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
                  Html Topic wise
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} className=" flex flex-wrap">
              <a
                className="link-style"
                href="https://drive.google.com/file/d/1LPNwt8Y96n34nOP9e72H85aBg6vlRylm/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Inroduction to html
              </a>
              <a
                className="link-style"
                href="https://drive.google.com/file/d/1WCka_QhZMxWFWtWYfFYEcBEPqjKBIuC-/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Tables
              </a>
              <a
                className="link-style"
                href="https://drive.google.com/file/d/17Ho8mi_ZkNOmqmoOQNACGsn8GRDFWlxH/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Box model
              </a>
              <a
                className="link-style"
                href="https://drive.google.com/file/d/1HcEV-o7zG0LZDpG8lCvi2t8zbuH_S7OG/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Flex
              </a>
              <a
                className="link-style"
                href="https://drive.google.com/file/d/12nq9P3XmiHFahL4Uq7asCVBYmjw5SJZX/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Grid
              </a>
              <a
                className="link-style"
                href="https://drive.google.com/file/d/1ENOPMgqbksMAOgcn8yhPuFO6qLPlM70s/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Git
              </a>
              <a
                className="link-style"
                href="https://drive.google.com/file/d/1q7scpvP8cnNOn5cwEJ7xfSgkQbkxMqWU/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Frames
              </a>
              <a
                className="link-style"
                href="https://drive.google.com/file/d/1tkreJwSEMF151XeixpO-RSvIKE1mG5Tu/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Media query
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
                  Seo
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} className=" flex flex-wrap">
              <a
                className="link-style"
                href="https://drive.google.com/file/d/1o4hlOD3-I0gQjJxYfw5Ow5yD3jIioSbr/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Dhtml
              </a>
              <a
                className="link-style"
                href="https://drive.google.com/file/d/1Iucbk0qSoYkkq1wMHERPU5DeFvqXaIVA/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Javascript Overview
              </a>
              <a
                className="link-style"
                href="https://drive.google.com/file/d/1RBw6zIaFkinPqAIIeUhrJVUIvJPpblHz/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Joomla
              </a>
              <a
                className="link-style"
                href="https://drive.google.com/file/d/1T1CzCMKiKVqyk8Yvemn467qzyE5F4RNI/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Xml
              </a>
              <a
                className="link-style"
                href="https://drive.google.com/file/d/1oS97AgP6Kz-ptIbzWiLzReD3h2YceCyo/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Mysql
              </a>
              <a
                className="link-style"
                href="https://drive.google.com/file/d/10BBwR-Jhg-HAd7-hr3bDgx9U6gif_A4M/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Php (server side scripting)
              </a>
              <a
                className="link-style"
                href="https://drive.google.com/file/d/1FdDysY1vi3yS60wtF0Y4cu7zf-3yiJEy/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                SEO
              </a>
              <a
                className="link-style"
                href="https://drive.google.com/file/d/1ye5euDS3UbyLPTz4DBXaeIlD_XoanaEw/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                SEO optimatization
              </a>
              <a
                className="link-style"
                href="https://drive.google.com/file/d/1iihHYtUNRG_0FVuzEgYwZ4yXG85i5sds/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Dynamic sites with PHP & MySQL
              </a>
              <a
                className="link-style"
                href="https://drive.google.com/file/d/1LEPO9j87eeU5sTZiGzfd04HYp1htDNBV/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Xml dom
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
                  Frameworks
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} className="flex justify-center">
              <a
                className="link-style"
                href="https://drive.google.com/file/d/1BzhKNh_3IrNwcY8xtTbqps8ar5VKpWfL/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                React
              </a>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};
