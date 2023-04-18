import React, {useState} from "react"
import {useNavigate} from 'react-router-dom'
import {useLocation} from 'react-router-dom'
import Popup from "../components/CustomPopUp"

function MainPage() {
    
    const [buttonPopup, setButtonPopup] = useState(false)
    const [popupType, setPopupType] = useState("")
    const location = useLocation();
    
    
    const handleButtonClick = (type) => {
        setPopupType(type)
        setButtonPopup(true)
    }


   // console.log(location.state.userId)
  
    return (
        <div className="page">
            <div className="controls">
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
                                <button class="modify">Edit</button>
                                <button class="modify">Delete</button>
                                <button class="modify">View Comments</button>
                            </td>
                            <td className="eventId">eventId</td>

                        </tr>
                    </tbody>
                </table>
            </div>
            <Popup trigger= {buttonPopup} setTrigger = {setButtonPopup} popupType = {popupType}>
                {popupType === "createRSO" && 
                    <div>
                        <form>
                            <label>
                                RSO name:
                                <input type="rsoName" name="rsoName"  />
                            </label>
                            <br />
                            <label>
                                Description:
                                <input type="description" name="description"  />
                            </label>
                            <br />
                            <label className="eventId">
                                userId : {location.state.userId}
                            </label>
                            <br />
                        </form>
                    </div>
                }
                {popupType === "deleteRSO" && 
                    <div>
                        <form>
                            <label>
                                PlaceHolder
                            </label>
                            <br />
                        </form>
                    </div>
                }
                {popupType === "joinRSO" && 
                    <div>
                        <form>
                            <label>
                                RSO name:
                                <input type="rsoName" name="rsoName"  />
                            </label>
                            <br />
                            <label className="eventId">
                                userId : {location.state.userId}
                            </label>
                            <br />
                            <label className="eventId">
                                rsoId : 
                            </label>
                        </form>
                    </div>
                }
                {popupType === "addUniversity" && 
                    <div>
                        <form>
                            <label>
                                University Name:
                                <input type="universityName" name="universityName"  />
                            </label>
                        </form>
                    </div>
                }
                {popupType === "deleteUniversity" && 
                    <div>
                        <form>
                            <label>
                                University Name:
                                <input type="universityName" name="universityName"  />
                            </label>
                        </form>
                    </div>
                }
                {popupType === "addComment" && 
                    <div>
                        <form>
                            <label>
                                Placeholder
                            </label>
                            <br />
                        </form>
                    </div>
                }
                {popupType === "deleteComment" && 
                    <div>
                        <form>
                            <label>
                                Placeholder
                            </label>
                            <br />
                        </form>n
                    </div>
                }
                {popupType === "addEvent" && 
                    <div>
                        <form>
                            <label>
                                Event Name:
                                <input type ="name" name ="name" />
                            </label>
                            <br />
                            <label>
                                Event URL:
                                <input type ="url" name ="url" />
                            </label>
                            <br />
                            <label>
                                Event Description:
                                <input type ="description" name ="description" />
                            </label>
                            <br />
                            <label>
                                Event Date:
                                <input type ="date" name ="date" />
                            </label>
                            <br />
                            <label>
                                Event Location:
                                <input type ="location" name ="location" />
                            </label>
                            <br />
                            <label>
                                Start time:
                                <input type ="location" name ="location" />
                            </label>
                            <br />
                            <label>
                                End time:
                                <input type ="location" name ="location" />
                            </label>
                            <br />
                            <label>
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
                                userId : {location.state.userId}
                            </label>
                        </form>
                    </div> 
                }
            </Popup>
        </div>
    );
  }


export default MainPage;