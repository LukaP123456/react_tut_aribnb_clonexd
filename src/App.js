import React from "react";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import data from "./data"

export default function App(){
    const cardData = data.map(function (person){
        return (<Card
                    key={person.id}
                    {...person}

                    // item = {person}

                    // img={person.coverImg}
                    // rating={person.stats.rating}
                    // reviewCount={person.stats.reviewCount}
                    // location={person.location}
                    // title={person.title}
                    // price={person.price}
                    // openSpots = {person.openSpots}
                />)
    })

    return(
        <div>
            <Navbar/>
            <Hero/>
            <section className={'cards-list'}>
                {cardData}
            </section>
        </div>
    )
}
