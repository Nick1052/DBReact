import React, {useEffect, useState} from "react"
import {useNavigate} from 'react-router-dom'
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
    const [data, setData] = useState([]);
    const [rsoData, setRsoData] = useState([]);
    const [myRso, setMyRso] = useState([])
    const navigate = useNavigate();

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
    
        switch(popupType) {
                case "createRSO": 
                    handleCreateRSO(event); 
                    break;
                // case "deleteRSO": handleDeleteRSO(); break;
                case "joinRSO":
                    handleJoinRSO(event); 
                    break;
                // case "addUniversity": handleAddUniversity(); break;
                // case "deleteUniversity": handleDeleteUniversity(); break;
                // case "addComment": handleAddComment(); break;
                // case "deleteComment": handleDeleteComment(); break;
                case "addEvent": 
                    handleAddEvent(event); 
                    break;
        }
        setButtonPopup(false)
        
    }
    
    // FUNCTIONAL
    const handleCreateRSO = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch("http://127.0.0.1:5000/createRSO", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(
                    {
                        "userId" : locationState.state.userId,
                        "name" : name,
                        "description" : description,
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
    // ALL EVENTS WORK FUNCTIONAL
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
                        "userId" : locationState.state.userId,
                        "location" : location,
                        "name" : name,
                        "description" : description,
                        "url" : url,
                        "start_time" : startTime,
                        "end_time" : endTime,
                        "date" : date,
                        "eventType" : eventType,
                        "rsoId" : rsoId
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

    // FUNCTIONAL
    const handleJoinRSO = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch("http://127.0.0.1:5000/joinRSO", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(
                    {
                        "userId" : locationState.state.userId,
                        "rsoId" : rsoId,
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

    // Fetches Events
    useEffect(() => {
        const fetchData = () => {
            fetch("http://127.0.0.1:5000/viewEvents")
            .then((response) => response.json())
            .then((data) => {
                console.log(data.events)
                if(Array.isArray(data.events)) 
                    setData(data.events)
                else
                    console.log('Not array')
            })
            .catch((error) => {
                console.log(error);
            });
        };

        const intervalId = setInterval(fetchData, 10000); // Fetch data every 10 seconds
        return () => clearInterval(intervalId); // Cleanup function to clear the interval when the component is unmounted
    }, []);
    
    // Fetches RSOs
    useEffect(() => {
        const fetchData = () => {
            fetch("http://127.0.0.1:5000/viewRSOs")
            .then((response) => response.json())
            .then((data) => {
                if(Array.isArray(data.RSOs)) 
                    setRsoData(data.RSOs)
                else
                    console.log('Not array')
            })
            .catch((error) => {
                console.log(error);
            });
        };

        const intervalId = setInterval(fetchData, 10000); // Fetch data every 10 seconds
        return () => clearInterval(intervalId); // Cleanup function to clear the interval when the component is unmounted
    }, []);

    // Fetches My RSOs
    useEffect(() => {
        const fetchData = () => {
            fetch("http://127.0.0.1:5000/viewMyRSOs", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(
                    {
                        "userId" : locationState.state.userId,
                    }
                ),
            })
            .then((response) => response.json())
            .then((data) => {
                if(Array.isArray(data.RSOs)){
                    console.log(data.RSOs)
                    setMyRso(data.RSOs)
                }
                else
                    console.log('Not array')
            })
            .catch((error) => {
                console.log(error);
            });
        };

        const intervalId = setInterval(fetchData, 10000); // Fetch data every 10 seconds
        return () => clearInterval(intervalId); // Cleanup function to clear the interval when the component is unmounted
    }, []);
    
  

   // console.log(locationState.state.userId)
    const shareUrl = "www.google.com"; //feed url from backend
 
    return (
        <div className="page">
            <div className="controls">
                <div  className="eventsControls">
                    <button className="logOut" onClick= {() => navigate('/pages/LandingPage.js')}>Logout</button>
                </div>
                {(locationState.state.userRole === 'admin' || locationState.state.userRole ==='superadmin') && (
                <div className="rsoControls">
                    <button className="controlsB" onClick= {() => handleButtonClick("createRSO")}>Create RSO</button>
                    <button className="controlsB" onClick= {() => handleButtonClick("deleteRSO")}>Delete RSO</button> 
                </div>
                )}
                <div className="rsoControls">
                    <button className="controlsB" onClick= {() => handleButtonClick("joinRSO")}>Join RSO</button>
                    <button className="controlsB" onClick= {() => handleButtonClick("viewMyRSOs")}>View my RSOs</button>
                    <button className="controlsB" onClick= {() => handleButtonClick("leaveRSOs")}>Leave RSO</button>
                </div>
                {(locationState.state.userRole === 'superadmin') && (
                    <div className="universityControls">
                        <button className="controlsB" onClick= {() => handleButtonClick("addUniversity")}>Add University</button>
                        <button className="controlsB" onClick= {() => handleButtonClick("deleteUniversity")}>Delete University</button>
                    </div>
                )}
                <div className="commentControls">
                    <button className="controlsB" onClick= {() => handleButtonClick("addComment")}>Add Comment</button>
                    <button className="controlsB" onClick= {() => handleButtonClick("deleteComment")}>Delete Comment</button>
                </div>
                {(locationState.state.userRole === 'admin' || locationState.state.userRole ==='superadmin') && (
                    <div className="eventsControls">
                        <button className="controlsB" onClick= {() => handleButtonClick("addEvent")}>Add Events</button>
                    </div>
                )}
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
                            <th>location</th>
                            <th>Start time</th>
                            <th>End time</th>
                            <th>Type of Event</th>
                            <th>Edit/Delete</th>
                            <th className="eventId">eventId</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row) => (
                            <tr key = {row.eventId}>
                                <td>{row.name}</td>
                                <td>{row.URL}</td>
                                <td>{row.description}</td>
                                <td>{row.date}</td>
                                <td>{row.Location}</td>
                                <td>{row.start_time}</td>
                                <td>{row.end_time}</td>
                                <td>{row.eventType}</td>
                                <td>
                                    <button className="modify" onClick={() => handleButtonClick("editEvent")}>Edit</button>
                                    <button className="modify" onClick={() => handleButtonClick("deleteEvent")}>Delete</button>
                                    <button className="modify" onClick={() => handleButtonClick("viewComments")}>View Comments</button>
                                </td>
                                <td className="eventId">{row.eventId}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Popup trigger= {buttonPopup} setTrigger = {setButtonPopup}>
                {popupType === "createRSO" && 
                    <div>
                        <form onSubmit={handleFormSubmit}>
                            <label className="labelColor">
                                RSO name:
                                <input className="popupInput" type="name" name="name" onChange={handleNameChange} />
                            </label>
                            <br />
                            <label className="labelColor">
                                Description:
                                <input className="popupInput" type="description" name="description"onChange={handleDescriptionChange} />
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
                {popupType === "viewMyRSOs" && 
                    <div>
                        <form>
                        <label className="labelColor">
                                My RSOs
                                <select>
                                        <option value =""></option>
                                        {myRso.map(rso=>(
                                        <option key = {rso.rsoId} value = {rso.rsoId}>{rso.name}</option>
                                    ))}
                                </select>
                            </label>
                            <br />
                        </form>
                    </div>
                }
                {popupType === "joinRSO" && 
                    <div>
                        <form onSubmit={handleFormSubmit}>
                            <label className="labelColor">
                                Choose an RSO
                                <select onChange={handleRsoIdChange}>
                                        <option value =""></option>
                                        {rsoData.map(rso=>(
                                        <option key = {rso.rsoId} value = {rso.rsoId}>{rso.name}</option>
                                    ))}
                                </select>
                            </label>
                            <br />
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
                                <input className="popupInput" type ="name" onChange={handleNameChange}/>
                            </label>
                            <br />
                            <label className="labelColor">
                                Event URL:
                                <input className="popupInput" type ="text" name ="url" onChange={handleUrlChange}/>
                            </label>
                            <br />
                            <label className="labelColor">
                                Event Description:
                                <input className="popupInput" type ="description" name ="description" onChange={handleDescriptionChange}/>
                            </label>
                            <br />
                            <label className="labelColor">
                                Event Date:
                                <input className="popupInput" type ="date" name ="date" onChange={handleDateChange} />
                            </label>
                            <br />
                            <label className="labelColor">
                                Event location:
                                <input className="popupInput" type ="location" name ="location" onChange={handleLocationChange} />
                            </label>
                            <br />
                            <label className="labelColor">
                                Start time:
                                <input className="popupInput" type ="locationState" name ="locationState" onChange={handleStartTimeChange}/>
                            </label>
                            <br />
                            <label className="labelColor">
                                End time:
                                <input className="popupInput" type ="locationState" name ="locationState" onChange={handleEndTimeChange} />
                            </label>
                            <br />
                            <label className="labelColor">
                                Type of Event:
                                <select onChange={handleEventTypeChange}>
                                    <option value =""></option>
                                    <option value="public">Public</option>
                                    <option value="private">Private</option>
                                    <option value="rso">RSO</option>
                                </select>
                            </label>
                            <br />
                            {eventType === 'rso' && (
                            <label className="labelColor">
                                RSOs:
                                <select onChange={handleRsoIdChange}>
                                    <option value =""></option>
                                    {rsoData.map(rso=>(
                                    <option key = {rso.rsoId} value = {rso.rsoId}>{rso.name}</option>
                                ))}
                                </select>
                            </label>
                            )}
                            <label className="eventId">
                                userId : {locationState.state.userId}
                            </label>
                            <button type ='submit' className="popup-close-btn">Submit</button>
                        </form>
                    </div> 
                }
                {popupType === "viewComments" && 
                    <div className="table-container">
                        <table className="db-table">
                        <thead>
                        <tr >
                            <th>Comment</th>
                            <th>Email</th>
                            
                        </tr>
                    </thead>
                    <tbody className="tbody">
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
                        <label className="labelColor">PlaceHolder</label>
                    </div>
                }
                {popupType === "deleteEvent" && 
                    <div>
                       <label className="DeleteConfirmation">Are you sure you want to delete?</label>
                       <button type ='button' className="popup-close-btn">Delete</button>
                    </div>
                }
            </Popup>
        </div>
    );
  }


export default MainPage;