import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, Box,
} from '@chakra-ui/react'



export const Python = () => {
    return (
        <>
            <h1 className='underline underline-offset-8 text-center text-violet-500 mt-20 mb-16 sm:text-7xl text-5xl  font-bold'>Python</h1>

            <div className='md:mx-[18rem] mx-[1rem]'>
                <Accordion allowToggle className='text-3xl border border-violet-500' style={{ borderWidth: '5px' }}>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' className='md:text-3xl text-2xl bg-transparent mx-2 my-1'>
                                    Python one short
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} className='flex justify-center'>
                            <a className="link-style" href="https://drive.google.com/file/d/1VungvGUTDezN6x71V-uABZBkHDmfDya1/view?usp=sharing" target="_blank" rel="noreferrer">Complete Python Notes</a>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' className='md:text-3xl text-2xl bg-transparent mx-2 my-1'>
                                    Python Topic wise
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} className=' flex flex-wrap' >
                            <a className="link-style" href="https://drive.google.com/file/d/1YT8HEEk9123-y-bAg6CFo5S_ryc2Tu00/view?usp=sharing" target="_blank" rel="noreferrer">Introduction to Python</a>
                            <a className="link-style" href="https://drive.google.com/file/d/1LD7Ski6CtxuRGrmvfJ23WV7Z7J9hWYAK/view?usp=sharing" target="_blank" rel="noreferrer">Variable & Datatype</a>
                            <a className="link-style" href="https://drive.google.com/file/d/1VVzRuoF6Lmejkh198za2klw8xcuVfQkW/view?usp=sharing" target="_blank" rel="noreferrer">Strings</a>
                            <a className="link-style" href="https://drive.google.com/file/d/1Ff1elHR-MdKCLLXv03kEYsAvcyrGZ7j5/view?usp=sharing" target="_blank" rel="noreferrer">For Loops</a>
                            <a className="link-style" href="https://drive.google.com/file/d/1SXaPmUmNZ93QzVBpV8EpZuj2tA2h9n82/view?usp=sharing" target="_blank" rel="noreferrer">While Loops</a>
                            <a className="link-style" href="https://drive.google.com/file/d/12V016OE2zSicCCIlEt5Qf-qm6xQr6YJ6/view?usp=sharing" target="_blank" rel="noreferrer">Loops 2</a>
                            <a className="link-style" href="https://drive.google.com/file/d/1S8Be_dJVkPp_bSsaLGtiDC23LN-KWqdN/view?usp=sharing" target="_blank" rel="noreferrer">Nested Loops</a>
                            <a className="link-style" href="https://drive.google.com/file/d/1OIZ3inNQT3K7J8ZIJJQXpWE2bsmjsQFe/view?usp=sharing" target="_blank" rel="noreferrer">Comparison operators</a>
                            <a className="link-style" href="https://drive.google.com/file/d/1MZCWPCzuxEG4n4PLAPKeMbEnMZKppL8O/view?usp=sharing" target="_blank" rel="noreferrer">Conditional Statements</a>
                            <a className="link-style" href="https://drive.google.com/file/d/15xCkc_qdzDJLwSK6N13A_zqc5yWa95v8/view?usp=sharing" target="_blank" rel="noreferrer">Lists</a>
                            <a className="link-style" href="https://drive.google.com/file/d/1oJXhZeIlAaZAMvr10O8hkCm7BgVN8z1g/view?usp=sharing" target="_blank" rel="noreferrer">Multi Dimensional Array</a>
                            <a className="link-style" href="https://drive.google.com/file/d/199Lk15eEXan7yDCjukgq9P9kUCj43O-9/view?usp=sharing" target="_blank" rel="noreferrer">Functions</a>
                            <a className="link-style" href="https://drive.google.com/file/d/1f1hl6rbGRVkH247oGhbEm8zIRJ8BlQTH/view?usp=sharing" target="_blank" rel="noreferrer">Functions 2</a>
                            <a className="link-style" href="https://drive.google.com/file/d/1RRWT5f3sEI59MtjvFobCjtOv48aW0_iR/view?usp=sharing" target="_blank" rel="noreferrer">Dictionary</a>
                            <a className="link-style" href="https://drive.google.com/file/d/1uz9T6RRG7yualratfWuSLtHdpIOuNtQq/view?usp=sharing" target="_blank" rel="noreferrer">Dictionary 2</a>
                        </AccordionPanel>

                    </AccordionItem>
                </Accordion>



            </div>
        </>
    )
}
