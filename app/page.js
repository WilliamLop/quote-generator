"use client";

import Header from "@/components/header";
import RandomQuote from "@/components/randomQuote";
import { useState } from "react";

export default function Home() {

    const [refreshKey, setRefreshKey] = useState(0);

    const handleRandomButtonClick = () => {
        setRefreshKey((prevKey) => prevKey + 1);
    };


    return (
      <>
        <Header handleRandomButtonClick={handleRandomButtonClick} />

        <main className="w-[90%] mx-auto justify-center h-full
        py-4 grid items-center">

          <div className="h-1/2 grid place-content-center">
            <RandomQuote refreshKey={refreshKey}/>
          </div>
        </main>
      </>
    );
}
