import React from "react";
import TextBox from "./TextBox";
import {useState} from 'react';
import axios from 'axios'

//@ts-ignore
import {AwesomeButton} from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";


function Horoscope() {
    const [sun, setSun] = useState("");
    const [moon, setMoon] = useState("");
    const [rise, setRise] = useState("");
    const [horoscope, setHoroscope] = useState([]);


    return (
        <div className="Horoscope">
            <div>
                <TextBox label={"Sun Sign"} change={setSun}/>
                <TextBox label={"Moon Sign"} change={setMoon}/>
                <TextBox label={"Rising Sign"} change={setRise}/>
                <AwesomeButton type="primary"
                               onPress={() => requestHoroscope(setHoroscope, sun, moon, rise)}>Submit</AwesomeButton>
                <p/>
                {horoscope.map(x => <li key={x}> {x} </li>)}
            </div>
        </div>
    );

}

//Fill in the ? with appropriate names/values for a horoscope.
//HINT: Look at the HoroscopeHandler's response in Main.java to choose a default useState value.

type sendType = {
    sun: string
    moon: string
    rising: string
}

const requestHoroscope = (setHoroscope: Function, sun: string, moon: string, rise: string) => {

    const toSend: sendType = {sun: sun, moon: moon, rising: rise};

    let config = {
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*',
        }
    }

    //Install and import axios!
    //Fill in 1) location for request 2) your data 3) configuration
    console.log(toSend);
    axios.post("http://localhost:4567/horoscope", toSend, config)
        .then(response => {
            console.log(response.data);
            //TODO: Go to the Main.java in the server from the stencil, and find what field name you should put here.
            //Note: It is very important that you understand how this is set up and why it works!
            setHoroscope(response.data["horoscope"]);
        })
        .catch(error => {
            console.log(error);
        });
}


export default Horoscope;
