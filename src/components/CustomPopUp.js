import React, {useState} from "react";
import CloseButton from 'react-bootstrap/CloseButton';


function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            {/* <button class="x" onClick={() => props.setTrigger(false)}>&times;</button> */}
            <div className="pop-up-inner">
                <button className="popup-close-btn" onClick={() => props.setTrigger(false)}>Submit</button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup;