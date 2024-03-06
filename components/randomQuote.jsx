
import React, { useState, useEffect } from 'react';
import { useFetch } from '@/utils/useFetch';
import Loading from './loading';
import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link';
import { motion } from 'framer-motion';


const RandomQuote = ({ refreshKey }) => {

    const { randomQuote, loading, error } = useFetch(`https://quote-garden.onrender.com/api/v3/quotes?refresh=${refreshKey}`);
    const [currentQuote, setCurrentQuote] = useState('');



    useEffect(() => {
        if (randomQuote) {
            setCurrentQuote(randomQuote.quoteText);
        }
    }, [randomQuote]);


    return (
        <div className="">
            <div className="grid">

                <div className="absoluteleft-0 right-0
                            text-center">
                    {loading && !randomQuote &&
                        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black/10 bg-opacity-50
                        duration-300 ease-in">
                            <Loading />
                        </div>
                    }
                </div>
                {error && <p>Error: {error}</p>}
                {currentQuote && (
                    <>
                        <motion.div
                            className="flex items-center max-w-[700px] mx-auto w-[90%]"
                            initial={{y: -100, opacity: 0}}
                            animate={{y: 0, opacity: 1}}>


                            <div className="w-[6px] h-full bg-yellow-500"></div>

                            <p className="text-2xl pl-4 font-medium">
                                {currentQuote}
                            </p>
                            {loading  &&
                                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black/10 bg-opacity-50
                                duration-300 ease-in">
                                    <Loading />
                                </div>
                            }


                        </motion.div>
                        <motion.div
                            initial={{y: 100, opacity: 0}}
                            animate={{y: 0, opacity: 1}}>
                            <Link href={`/quotes/${randomQuote.quoteAuthor}`}
                                className="ml-3 mt-20 hover:bg-[#333333] text-start px-4
                            flex items-center justify-between py-6 group duration-300 ease-in-out">
                                <div className="group-hover:text-gray-50 text-black">
                                    <p className="text-lg
                                    font-bold">
                                        {randomQuote.quoteAuthor}
                                    </p>
                                    <p className="group-hover:text-gray-400
                                    text-xs">
                                        {randomQuote.quoteGenre}
                                    </p>
                                </div>

                                <FaArrowRight className="group-hover:text-gray-50" />
                            </Link>
                        </motion.div>
                    </>
                )}
            </div>
        </div>
    );
};

export default RandomQuote;
