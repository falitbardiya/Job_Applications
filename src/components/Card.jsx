import React, { useState } from "react";
import { Bookmark } from "lucide-react";

const Card = (props) => {

    const [saved, setSaved] = useState(false);
  return (
        <div className="card">
        <div>
          <div className="top">
          <img src={props.brandLogo} alt="" />
          <button>Save <Bookmark
                onClick={() => setSaved(!saved)}
                size={13}
                color={saved ? "black" : "#bdbdbd"}
                fill={saved ? "black" : "none"}
                style={{
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                }}
            /></button>
        </div>
        <div className="center">
          <h3>{props.company} <span>{props.dateposted}</span></h3>
          <h2>{props.post}</h2>
          <div className='tag'>
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>
        </div>
        <div className="bottom">
          <div>
            <h3>{props.pay}</h3>
            <p>Mumbai, India</p>
          </div>
          <button
            onClick={() => window.open(props.applyLink, "_blank")}
            >
            Apply Now
          </button>
        </div>
      </div>
  )
}

export default Card