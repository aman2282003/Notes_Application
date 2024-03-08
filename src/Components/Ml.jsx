import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, Box,
} from '@chakra-ui/react'



export const Ml = () => {
    return (
        <>
            <h1 className='underline underline-offset-8 text-center text-violet-500 mt-20 mb-16 sm:text-7xl text-5xl  font-bold'>Machine Learning</h1>

            <div className='md:mx-[18rem] mx-[1rem]'>
                <Accordion allowToggle className='text-3xl border border-violet-500' style={{ borderWidth: '5px' }}>


                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' className='md:text-3xl text-2xl bg-transparent mx-2 my-1'>
                                    Ml Topics
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} className=' flex flex-wrap' >
                            <a className="link-style" href="https://drive.google.com/file/d/1VonNJC5Q_VuC8B0Is2qG0i7p15RGON7_/view?usp=sharing" target="_blank" rel="noreferrer">One short</a>
                            <a className="link-style" href="https://drive.google.com/file/d/1Iv90kuVRuAnoijCiAukJeQhKYEkMZzRW/view?usp=sharing" target="_blank" rel="noreferrer">Types</a>
                            <a className="link-style" href="https://drive.google.com/file/d/11Vsj3H_43X7_skVpDdzJvSSmA_d3OGSs/view?usp=sharing" target="_blank" rel="noreferrer">Classification</a>
                        </AccordionPanel>

                    </AccordionItem>
                </Accordion>



            </div >
        </>
    )
}
