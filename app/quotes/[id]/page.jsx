"use client";

import Loading from '@/components/loading';
import { useFetch } from '@/utils/useFetch';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Quotes = ({ params }) => {

    const [author, setAuthor] = useState('');
    const [authorQuotes, setAuthorQuotes] = useState([]);

    const id = params.id;

    const { quotes, loading } = useFetch(`https://quote-garden.onrender.com/api/v3/quotes?author=${id}`);

    useEffect(() => {

        if (quotes.length > 0) {
            const uniqueAuthor = quotes[0].quoteAuthor;
            setAuthor(uniqueAuthor);
            setAuthorQuotes(quotes);
        }
    }, [quotes]);


    console.log(quotes)

    return (

        <section className="relative h-screen">

            <article className="py-16 grid gap-10">
            {loading &&
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black/10 bg-opacity-20
                        duration-300 ease-in">
                    <Loading />
                </div>
            }
            <motion.div className="w-[90%] max-w-[800px] mx-auto"
            initial={{x: -100, opacity: 0}}
            animate={{x: 0, opacity: 1}}>
                <Link href={`/`} className="w-[100px] py-2 px-4 rounded-lg
                border border-black/10 font-semibold hover:bg-black hover:text-white
                duration-300 ease-in">
                    Back
                </Link>
            </motion.div>
                {author && (
                    <motion.div className="mb-12"
                    initial={{y: -100, opacity: 0}}
                    animate={{y: 0, opacity: 1}}>
                        <p className="font-bold text-2xl text-center">
                            {author}
                        </p>
                    </motion.div>
                )}

                <div className="grid gap-12">
                    {
                        authorQuotes.map((item, index) => (
                            <motion.div key={index}
                                className="flex items-center max-w-[700px] mx-auto w-[90%]"
                                initial={{y: 100, opacity: 0}}
                                animate={{y: 0, opacity: 1}}>

                                <div className="w-[6px] h-full bg-yellow-500"></div>

                                <p className="text-2xl pl-4 font-medium">
                                    {item.quoteText}
                                </p>

                                <div className="absoluteleft-0 right-0
                                text-center">
                                    {loading &&
                                        <Loading />
                                    }
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
            </article>

        </section>
    )
}

export default Quotes