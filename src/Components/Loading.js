import React, { useState, useEffect } from "react";
import './Loading.css';

function Loading({time=500, forever=false, ...props}) {
    const [loaded, setLoaded] = useState(false);

      useEffect(() => {
        if(!forever) {
          Promise.all(props.srcList.map((src) => 
            document.head.append(React.createElement("link", {rel: 'preload', href: src}))
          )).then(setTimeout(()=> setLoaded(true), time));
        }
      }, [time, forever, props.srcList])

    return (
      <>
        {loaded? props.children : 
        <div className={forever? "small" : "page"}>
          <div className="ripple"/>
          <div className="ripple second"/>
          <div className="ripple third"/>
          <div className="ripple fourth"/>
        </div>}
      </>
    );
}

export default Loading;
