import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, Box,
} from '@chakra-ui/react'



export const Gd = () => {
    return (
        <>
            <h1 className='underline underline-offset-8 text-center text-violet-500 mt-20 mb-16 sm:text-7xl text-5xl  font-bold'>Graphics & Camera</h1>

            <div className='md:mx-[18rem] mx-[1rem]'>
                <Accordion allowToggle className='text-3xl border border-violet-500' style={{ borderWidth: '5px' }}>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' className='md:text-3xl text-2xl bg-transparent mx-2 my-1 '>
                                    Camera
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} className=' flex flex-wrap' >
                            <a className="link-style" href="https://drive.google.com/file/d/1f1jSRg1m8O0hUtLhc6aa_6LD4QgKj2eL/view?usp=sharing" target="_blank" rel="noreferrer">Camera & Photography</a>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' className='md:text-3xl text-2xl bg-transparent mx-2 my-1'>
                                    Photoshop
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} className=' flex flex-wrap' >
                            <a className="link-style" href="https://drive.google.com/file/d/1v0NZYObNHeJD0L7iw7L9aharaq_-Ug2d/view?usp=sharing" target="_blank" rel="noreferrer">Photoshop Shortcuts</a>
                        </AccordionPanel>

                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' className='md:text-3xl text-2xl bg-transparent mx-2 my-1'>
                                    Elements of Design
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} className=' flex flex-wrap' >
                            <a className="link-style" href="https://drive.google.com/file/d/1Ixlec2k_T4b7krdgtaS9ZhwHcEnG4p7j/view?usp=sharing" target="_blank" rel="noreferrer">Eod one short</a>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>

            </div>
        </>
    )
}
