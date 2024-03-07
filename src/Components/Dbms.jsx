import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, Box,
} from '@chakra-ui/react'



export const Dbms = () => {
    return (
        <>
            <h1 className='underline underline-offset-8 text-center text-violet-500 mt-20 mb-16 sm:text-7xl text-5xl  font-bold'>Database Management System</h1>
            <div className='md:mx-[18rem] mx-[1rem]'>
                <Accordion allowToggle className='text-3xl border border-violet-500' style={{ borderWidth: '5px' }}>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' className='md:text-3xl text-2xl bg-transparent mx-2 my-1'>
                                    Database Management Systems (DBMS)
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} className=' flex flex-wrap' >
                            <a className="link-style" href="https://drive.google.com/file/d/1UBxe-kON9h8iRZ9G-dhkLnJ4DEYgHfsw/view?usp=sharing" target="_blank" rel="noreferrer">Introduction to Dbms</a>
                            <a className="link-style" href="https://drive.google.com/file/d/19d8_Nx5DFUdEkKz11dYlO-mCzvuyPg9T/view?usp=sharing" target="_blank" rel="noreferrer">Components of Dbms</a>
                            <a className="link-style" href="https://drive.google.com/file/d/1suWF6vRE-XLt8skFNIaAlBppV5lPe70e/view?usp=sharing" target="_blank" rel="noreferrer">Three level Architecture</a>
                            <a className="link-style" href="https://drive.google.com/file/d/15zRrjWf2fN_Cie_UBsWg_-WI4A65BUYI/view?usp=sharing" target="_blank" rel="noreferrer">Relational Algerba</a>
                            <a className="link-style" href="https://drive.google.com/file/d/1ci4YedvpGbCVMLFVKuYU1Q4a0U1iMZIh/view?usp=sharing" target="_blank" rel="noreferrer">Relational Database</a>
                            <a className="link-style" href="https://drive.google.com/file/d/10TVE3NVSOJvz0FIkzWAkavtAnht_k-uE/view?usp=sharing" target="_blank" rel="noreferrer">Normalization</a>
                            <a className="link-style" href="https://drive.google.com/file/d/1SOizqZk4GUkioZLALWXu2lEx-no_6rAk/view?usp=sharing" target="_blank" rel="noreferrer">Data Recovery</a>
                            <a className="link-style" href="https://drive.google.com/file/d/16GPACk_MHwfvMGtAe_mPRfhIQwLV9e4u/view?usp=sharing" target="_blank" rel="noreferrer">Database Sequirity</a>
                        </AccordionPanel>

                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' className='md:text-3xl text-2xl bg-transparent mx-2 my-1'>
                                    Database Fundamentals
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} className='flex justify-center flex-wrap'>
                            <a className="link-style" href="https://drive.google.com/file/d/1azgEP-W3BWzT7Bg5ylRie-sAx7g6jSC9/view?usp=sharing" target="_blank" rel="noreferrer">Normalization</a>
                            <a className="link-style" href="https://drive.google.com/file/d/1TFyc4GdvCph-9QOv4TL2G3qgzyPj3_AA/view?usp=sharing" target="_blank" rel="noreferrer">Calculus</a>
                            <a className="link-style" href="https://drive.google.com/file/d/1iRGBqQ4THMWX3GZkS7zGN00ECkKYtzBS/view?usp=sharing" target="_blank" rel="noreferrer">Entity_Relationship_Model</a>
                            <a className="link-style" href="https://drive.google.com/file/d/1Oc3UQddGrXc3VUZo2r2ZRq468gC_xfqa/view?usp=sharing" target="_blank" rel="noreferrer">Sql Fundamentals</a>

                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' className='md:text-3xl text-2xl bg-transparent mx-2 my-1'>
                                    Database Integrity and Control
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} className='flex justify-center flex-wrap'>
                            <a className="link-style" href="https://drive.google.com/file/d/170tNNSylPLHX9i-1-wcq8uYZQ2F-Tytk/view?usp=sharing" target="_blank" rel="noreferrer">Functional Dependency</a>
                            <a className="link-style" href="https://drive.google.com/file/d/1ovFw02Mypv6IHz6CCByCmWl-30hT1TNe/view?usp=sharing" target="_blank" rel="noreferrer">Pl_Sql</a>
                            <a className="link-style" href="https://drive.google.com/file/d/1pGfSZtJARYx5vwNp1abPuOZIJxMj5e_0/view?usp=sharing" target="_blank" rel="noreferrer">Triggers in Pl_Sql</a>

                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' className='md:text-3xl text-2xl bg-transparent mx-2 my-1'>
                                    Data Models
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} className='flex justify-center flex-wrap'>
                            <a className="link-style" href="https://drive.google.com/file/d/1LKN5RnNlm94Hdl_9TBc2fOq_1UTxdD3w/view?usp=sharing" target="_blank" rel="noreferrer">Data Models</a>
                            <a className="link-style" href="https://drive.google.com/file/d/165Sl71id7kFAG9NnlSxwULtln-epjfTR/view?usp=sharing" target="_blank" rel="noreferrer">Cursors</a>
                            <a className="link-style" href="https://drive.google.com/file/d/1IVQr9KP3kyLNjxb6l3OHtwoZ9qAs8T_l/view?usp=sharing" target="_blank" rel="noreferrer">Concurrency Management</a>


                        </AccordionPanel>
                    </AccordionItem>


                </Accordion>



            </div>
        </>
    )
}
