'use client'
import React, { useEffect, useRef, useState } from "react";

// import "./Accordion.css";

export default function Accordion(props) {
  const [active, setActive] = useState(false);
  const content = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    console.log("Height for ", props.title, ": ", height);
  }, [height]);

  function toggleAccordion() {
    setActive(!active);
    setHeight(active ? "0px" : `${content.current.scrollHeight}px`);
  }

  return (
      <div className="accordion__section">
        <div
            className={`accordion ${active ? "active" : ""}`}
            onClick={toggleAccordion}
        >
          <p className="accordion__title">{props.title}</p>
          <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: "20px" }}>{active ?
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.08004 15.05L10.6 8.53005C11.37 7.76005 12.63 7.76005 13.4 8.53005L19.92 15.05"
                      stroke="#292D32" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"
                      strokeLinejoin="round"/>
              </svg> :
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.92 8.94995L13.4 15.47C12.63 16.24 11.37 16.24 10.6 15.47L4.07996 8.94995" stroke="#292D32"
                      strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>}</span>
        </div>
        <div
            ref={content}
            style={{maxHeight: `${height}`}}
            className="accordion__content"
        >
          <div
              className="accordion__text"
              dangerouslySetInnerHTML={{__html: props.content}}
          />
        </div>
      </div>
  );
}
