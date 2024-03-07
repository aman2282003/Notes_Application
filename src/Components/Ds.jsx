import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, Box,
} from '@chakra-ui/react'



export const Ds = () => {
    return (
        <>
            <h1 className='underline underline-offset-8 text-center text-violet-500 mt-20 mb-16 sm:text-7xl text-5xl  font-bold'>Data Structure</h1>

            <div className='md:mx-[18rem] mx-[1rem]'>
                <Accordion allowToggle className='text-3xl border border-violet-500' style={{ borderWidth: '5px' }}>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' className='md:text-3xl text-2xl bg-transparent mx-2 my-1 '>
                                    Dsa One short
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} className=' flex flex-wrap' >
                            <a className="link-style" href="https://drive.google.com/file/d/1C7cU--AXqhGahlu2a8xKea-wzanOHmtr/view?usp=sharing" target="_blank" rel="noreferrer">Complete Dsa</a>
                        </AccordionPanel>

                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' className='md:text-3xl text-2xl bg-transparent mx-2 my-1'>
                                    Graph & Tree
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} className=' flex flex-wrap' >
                            <a className="link-style" href="https://drive.google.com/file/d/1B2RblhX5qp0-NDNN8njbeQCs4depO2SZ/view?usp=sharing" target="_blank" rel="noreferrer">Graphs & Trees</a>
                        </AccordionPanel>

                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' className='md:text-3xl text-2xl bg-transparent mx-2 my-1'>
                                    Fundamentals of Ds
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} className=' flex flex-wrap' >
                            <a className="link-style" href="https://drive.google.com/file/d/172hjDAdHdMZ2-bPnoUmooQpOf-XouqXN/view?usp=sharing" target="_blank" rel="noreferrer">Intro to Dsa</a>
                            <a className="link-style" href="https://drive.google.com/file/d/13fcOflHT94L61CnPT9FYXlyT7YkulTRC/view?usp=sharing" target="_blank" rel="noreferrer">Complaxity Analysis</a>
                            <a className="link-style" href="https://drive.google.com/file/d/1IZvlWo59hmVfFX70P-jlfSheERzE3cc5/view?usp=sharing" target="_blank" rel="noreferrer">Brute Force</a>
                        </AccordionPanel>

                    </AccordionItem>
                </Accordion>

            </div>
        </>
    )
}
