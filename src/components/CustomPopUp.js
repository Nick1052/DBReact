import React, {useState} from "react";



function Popup(props) {
    
    return (props.trigger) ? (
        <div className="popup">
            {/* <button className="x" onClick={() => props.setTrigger(false)}>&times;</button> */}
            <div className="pop-up-inner">
              <div className="inputValues">
                {props.children}
                <button type = "button" className="popup-close-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
                
                {/* {props.children} */}
                </div>
            </div>
        </div>
    ) : "";
}

export default Popup;