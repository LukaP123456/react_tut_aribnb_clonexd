import React from "react";

export default function Hero(){
    return(
        <section className={'hero'}>
            <img className={'hero--photo'} src={require('../img/Group77.png')} alt=""/>
            <h1 className={'hero--header'}>Online Experiences</h1>
            <p className={'hero--text'}>Join unique interactive activities led by on
                e-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}