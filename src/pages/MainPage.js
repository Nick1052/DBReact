import React, {useState} from "react"
import {Navigate, useNavigate} from 'react-router-dom'
import {useLocation} from 'react-router-dom'
import Popup from "../components/CustomPopUp"
import {FacebookShareCount, FacebookShareButton, FacebookIcon} from "react-share";

function MainPage() {
    // API UseStates
    //const [userId, setUserId] = useState("");
    const [location, setLocation] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [url, setUrl] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [date, setDate] = useState("");
    const [eventType, setEventType] = useState("");
    const [rsoId, setRsoId] = useState("");

    // Holds userRole and userId
    const locationState = useLocation();

    // Buttons for Forms
    const [buttonPopup, setButtonPopup] = useState(false)
    const [popupType, setPopupType] = useState("")

    // Handleers


    const handleLocationChange = (event) => {
        setLocation(event.target.value);
      };
      
      const handleNameChange = (event) => {
        setName(event.target.value);
      };
      
      const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
      };
      
      const handleUrlChange = (event) => {
        setUrl(event.target.value);
      };
      
      const handleStartTimeChange = (event) => {
        setStartTime(event.target.value);
      };
      
      const handleEndTimeChange = (event) => {
        setEndTime(event.target.value);
      };
      
      const handleDateChange = (event) => {
        setDate(event.target.value);
      };
      
      const handleEventTypeChange = (event) => {
        setEventType(event.target.value);
      };
      
      const handleRsoIdChange = (event) => {
        setRsoId(event.target.value);
      };
    const handleButtonClick = (type) => {
        setPopupType(type)
        setButtonPopup(true)
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(popupType)
        switch(popupType) {
                // case "createRSO": handleCreateRSO(); break;
                // case "deleteRSO": handleDeleteRSO(); break;
                // case "joinRSO": handleJoinRSO(); break;
                // case "addUniversity": handleAddUniversity(); break;
                // case "deleteUniversity": handleDeleteUniversity(); break;
                // case "addComment": handleAddComment(); break;
                // case "deleteComment": handleDeleteComment(); break;
                case "addEvent": 
                    handleAddEvent(); 
                    break;
        }
        setButtonPopup(false)
        
    }

    const handleAddEvent = async (event) => {
        event.preventDefault();
        try {

        

        
        const response = await fetch("http://127.0.0.1:5000/createEvent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
                {
                    "userId" : locationState.userId,
                    "location" : location,
                    "name" : name,
                    "description" : description,
                    "url" : url,
                    "start_time" : startTime,
                    "end_time" : endTime,
                    "date" : date,
                    "eventType" : eventType,
                    "rsoId" : 0
                  }
            ),
        });

        const data = await response.json();
        console.log(data);
        // TODO: Handle response data
        } catch (error) {
        console.error(error);
        }
    };


   // console.log(locationState.state.userId)
    const shareUrl = "www.google.com"; //feed url from backend
 
    return (
        <div className="page">
            <div className="controls">
                <div  className="eventsControls">
                    <button className="logOut" onClick= {() => Navigate('/')}>Logout</button>
                </div>
                <div className="rsoControls">
                    <button className="controlsB" onClick= {() => handleButtonClick("createRSO")}>Create RSO</button>
                    <button className="controlsB" onClick= {() => handleButtonClick("deleteRSO")}>Delete RSO</button>
                    <button className="controlsB" onClick= {() => handleButtonClick("joinRSO")}>Join RSO</button>
                </div>
                <div className="universityControls">
                    <button className="controlsB" onClick= {() => handleButtonClick("addUniversity")}>Add University</button>
                    <button className="controlsB" onClick= {() => handleButtonClick("deleteUniversity")}>Delete University</button>
                </div>
                <div className="commentControls">
                    <button className="controlsB" onClick= {() => handleButtonClick("addComment")}>Add Comment</button>
                    <button className="controlsB" onClick= {() => handleButtonClick("deleteComment")}>Delete Comment</button>
                </div>
                <div className="eventsControls">
                    <button className="controlsB" onClick= {() => handleButtonClick("addEvent")}>Add Events</button>
                </div>
                <FacebookShareButton className="FacebookButton" url={shareUrl}>
                    <FacebookIcon size={50} round /> Facebook Share
                </FacebookShareButton>
            </div>
            <div className="table-container">
                <table className="db-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>URL</th>
                            <th>Description</th>
                            <th>Date</th>
                            <th>Location</th>
                            <th>Start time</th>
                            <th>End time</th>
                            <th>Type of Event</th>
                            <th>Edit/Delete</th>
                            <th className="eventId">eventId</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                            <td>Name</td>
                            <td>URL</td>
                            <td>Description</td>
                            <td>Date</td>
                            <td>Location</td>
                            <td>Start time</td>
                            <td>End time</td>
                            <td>Type of event</td>
                            <td>
                                <button className="modify" onClick={() => handleButtonClick("editEvent")}>Edit</button>
                                <button className="modify" onClick={() => handleButtonClick("deleteEvent")}>Delete</button>
                                <button className="modify" onClick={() => handleButtonClick("viewComments")}>View Comments</button>
                            </td>
                            <td className="eventId">eventId</td>

                        </tr>
                    </tbody>
                </table>
            </div>
            <Popup trigger= {buttonPopup} setTrigger = {setButtonPopup}>
                {popupType === "createRSO" && 
                    <div>
                        <form>
                            <label className="labelColor">
                                RSO name:
                                <input className="popupInput" type="rsoName" name="rsoName"  />
                            </label>
                            <br />
                            <label className="labelColor">
                                Description:
                                <input className="popupInput" type="description" name="description"  />
                            </label>
                            <br />
                            {/* <label className="eventId">
                                userId : {locationState.state.userId}
                            </label> */}
                            <br />
                            <button type ='submit' className="popup-close-btn">Submit</button>
                        </form>
                    </div>
                }
                {popupType === "deleteRSO" && 
                    <div>
                        <form>
                            <label className="labelColor">
                                PlaceHolder
                            </label>
                            <br />
                            <button type ='submit' className="popup-close-btn">Submit</button>
                        </form>
                    </div>
                }
                {popupType === "joinRSO" && 
                    <div>
                        <form>
                            <label className="labelColor">
                                RSO name:
                                <input className="popupInput" type="rsoName" name="rsoName"  />
                            </label>
                            <br />
                            {/* <label className="eventId">
                                userId : {locationState.state.userId}
                            </label> */}
                            <br />
                            <label className="eventId">
                                rsoId : 
                            </label>
                            <button type ='submit' className="popup-close-btn">Submit</button>
                        </form>
                    </div>
                }
                {popupType === "addUniversity" && 
                    <div>
                        <form>
                            <label className="labelColor">
                                University Name:
                                <input className="popupInput" type="universityName" name="universityName"  />
                            </label>
                            <button type ='submit' className="popup-close-btn">Submit</button>
                        </form>
                    </div>
                }
                {popupType === "deleteUniversity" && 
                    <div>
                        <form>
                            <label className="labelColor">
                                University Name:
                                <input className="popupInput" type="universityName" name="universityName"  />
                            </label>
                            <button type ='submit' className="popup-close-btn">Submit</button>
                        </form>
                    </div>
                }
                {popupType === "addComment" && 
                    <div>
                        <form>
                            <label className="labelColor">
                                Placeholder
                            </label>
                            <br />
                            <button type ='submit' className="popup-close-btn">Submit</button>
                        </form>
                    </div>
                }
                {popupType === "deleteComment" && 
                    <div>
                        <form>
                            <label className="labelColor">
                                Placeholder
                            </label>
                            <br />
                            <button type ='submit' className="popup-close-btn">Submit</button>
                        </form>
                    </div>
                }
                {popupType === "addComment" && 
                    <div>
                        <form>
                            <label className="labelColor">
                                PlaceHolder
                            </label>
                            <br />
                            <button type ='submit' className="popup-close-btn">Submit</button>
                        </form>
                    </div>
                }
                {popupType === "addEvent" && 
                    <div>
                        <form onSubmit={handleFormSubmit}>
                            <label className="labelColor">
                                Event Name:
                                <input className="popupInput" type ="name"  />
                            </label>
                            <br />
                            <label className="labelColor">
                                Event URL:
                                <input className="popupInput" type ="text" name ="url" />
                            </label>
                            <br />
                            <label className="labelColor">
                                Event Description:
                                <input className="popupInput" type ="description" name ="description" />
                            </label>
                            <br />
                            <label className="labelColor">
                                Event Date:
                                <input className="popupInput" type ="date" name ="date" />
                            </label>
                            <br />
                            <label className="labelColor">
                                Event Location:
                                <input className="popupInput" type ="locationState" name ="locationState" />
                            </label>
                            <br />
                            <label className="labelColor">
                                Start time:
                                <input className="popupInput" type ="locationState" name ="locationState" />
                            </label>
                            <br />
                            <label className="labelColor">
                                End time:
                                <input className="popupInput" type ="locationState" name ="locationState" />
                            </label>
                            <br />
                            <label className="labelColor">
                                Type of Event:
                                <select>
                                    <option value =""></option>
                                    <option value="public">Public</option>
                                    <option value="private">Private</option>
                                    <option value="rso">RSO</option>
                                </select>
                            </label>
                            <br />
                            <label className="eventId">
                                userId : {locationState.state.userId}
                            </label>
                            <button type ='submit' className="popup-close-btn">Submit</button>
                        </form>
                    </div> 
                }
                {popupType === "viewComments" && 
                    <div>
                        <table>
                        <thead>
                        <tr>
                            <th>Comment</th>
                            <th>Email</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                            <td>Hello Students</td>
                            <td>vu@ucf.edu</td>
                        </tr>
                    </tbody>
                        </table>
                    </div>
                }
                {popupType === "editEvent" && 
                    <div>
                        <label>PlaceHolder</label>
                    </div>
                }
                {popupType === "deleteEvent" && 
                    <div>
                       <button>Are you sure you want to delete?</button>
                       <button type ='button' className="popup-close-btn">Submit</button>
                    </div>
                }
            </Popup>
        </div>
    );
  }


export default MainPage;