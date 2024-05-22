import React from "react";
import Ping from "../images/ping.png"

export default function Card(props) {
    let data = props;
    return (
        <div className="card">
            <img className="pic" src={data.img} alt="Dsiplaying destination img"/>
            <div className="info">
                <img src={Ping} alt="google ping"/>
                <span>{data.country}</span>
                <h1>{data.location}</h1>
                <br></br>
                <h3>{data.timespan}</h3>
                <p>{data.desc}</p>
            </div>
        </div>
    )
}