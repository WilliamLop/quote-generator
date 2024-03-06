
import React from "react";
import { TbArrowsRandom } from "react-icons/tb";
import { motion } from 'framer-motion';

const Header = ({ handleRandomButtonClick }) => {

    return (
        <header className="grid place-content-end w-[90%] mx-auto mt-10
        max-w-[1200px]">
            <motion.button
                className="flex items-center bg-gray-100 gap-2
                rounded-full text-sm px-4 py-2 border border-black/0.1
                hover:bg-black/80 group hover:text-white duration-300"
                onClick={handleRandomButtonClick}
                initial={{y: -100, opacity: 0}}
                animate={{y: 0, opacity: 1}}
            >
                <p>random</p>
                <TbArrowsRandom className="" />
            </motion.button>
        </header>
    );
};

export default Header;
