import React, {useState} from "react";


function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="pop-up-inner">
                <button className="popup-close-btn" onClick={() => props.setTrigger(false)}>Submit</button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup;