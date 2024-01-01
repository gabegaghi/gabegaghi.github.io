import React, { useState, useEffect } from "react";
import './Loading.css';

function Loading({time=500, forever=false, ...props}) {
    const [loaded, setLoaded] = useState(false);

      useEffect(() => {
        if(!forever) {
          Promise.all(props.srcList.map(async (src) => 
            document.head.append(React.createElement("link", {rel: 'preload', href: src}))
          )).then(setTimeout(()=> setLoaded(true), time));
        }
      }, [time, forever, props.srcList])

    return (
      <>
        <div className={loaded? '' : 'invisible'}>
          {props.children}
        </div>
        <div className={loaded? 'invisible' : "loading page"}>
          <div className="ripple"/>
          <div className="ripple second"/>
          <div className="ripple third"/>
          <div className="ripple fourth"/>
          <div className="ripple fifth"/>
        </div>
      </>
    );
}

export default Loading;
