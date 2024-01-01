import React, { useState, useEffect } from "react";
import './Loading.css';

function Loading({time=750, ...props}) {
    const [loaded, setLoaded] = useState(false);

      useEffect(() => {
        setTimeout(()=> setLoaded(true), time);
      }, [loaded, time])

    return (
        <>
        {loaded? props.children :
        <div className="loading page">
            <div className="ripple"/>
            <div className="ripple second"/>
            <div className="ripple third"/>
            <div className="ripple fourth"/>
            <div className="ripple fifth"/>
        </div>}
        </>
    );
}

export default Loading;