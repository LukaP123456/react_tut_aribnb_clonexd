import React from "react";

export default function Card(props){
    let badgeText;
    if (props.openSpots === 0){
        badgeText = "SOLD OUT"
    }else if (props.location === "Online") {
        badgeText = "ONLINE"
    }else{
        badgeText = ""
    }

    return(
        <div className={'card'} >
            {badgeText && <div className={'card--badge'}>{badgeText}</div>}
            <img src={require('../img/'+props.coverImg)} alt="" className={'card--img'}/>
            {/*<img src={require(`../img/${props.img}`)} alt="" className={'card--img'}/>*/}
            <div className={'card--stats'}>
                <img className={'card--star'} src={require('../img/Star 1.png')} alt=""/>
                <span>{props.stats.rating}</span>
                <span className={'gray'}>({props.stats.reviewCount}) *</span>
                <span className={'gray'}>{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><strong>From ${props.price} </strong>/ person</p>
        </div>
    )
}