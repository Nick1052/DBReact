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
                <div  className="eventsControls">
                    <button class="logOut" className="controlsB" onClick= {() => console.log('FIX HERE')}>Logout</button>
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
                            <label class="labelColor">
                                RSO name:
                                <input class="popupInput" type="rsoName" name="rsoName"  />
                            </label>
                            <br />
                            <label class="labelColor">
                                Description:
                                <input class="popupInput" type="description" name="description"  />
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
                            <label class="labelColor">
                                PlaceHolder
                            </label>
                            <br />
                        </form>
                    </div>
                }
                {popupType === "joinRSO" && 
                    <div>
                        <form>
                            <label class="labelColor">
                                RSO name:
                                <input class="popupInput" type="rsoName" name="rsoName"  />
                            </label>
                            <br />
                            <label className="eventId">
                                userId : {location.state.userId}
                            </label>
                            <br />
                            <label class="labelColor" className="eventId">
                                rsoId : 
                            </label>
                        </form>
                    </div>
                }
                {popupType === "addUniversity" && 
                    <div>
                        <form>
                            <label class="labelColor">
                                University Name:
                                <input class="popupInput" type="universityName" name="universityName"  />
                            </label>
                        </form>
                    </div>
                }
                {popupType === "deleteUniversity" && 
                    <div>
                        <form>
                            <label class="labelColor">
                                University Name:
                                <input class="popupInput" type="universityName" name="universityName"  />
                            </label>
                        </form>
                    </div>
                }
                {popupType === "addComment" && 
                    <div>
                        <form>
                            <label class="labelColor">
                                Placeholder
                            </label>
                            <br />
                        </form>
                    </div>
                }
                {popupType === "deleteComment" && 
                    <div>
                        <form>
                            <label class="labelColor">
                                Placeholder
                            </label>
                            <br />
                        </form>
                    </div>
                }
                {popupType === "addComment" && 
                    <div>
                        <form>
                            <label class="labelColor">
                                PlaceHolder
                            </label>
                            <br />
                        </form>
                    </div>
                }
                {popupType === "addEvent" && 
                    <div>
                        <form>
                            <label class="labelColor">
                                Event Name:
                                <input class="popupInput" type ="name" name ="name" />
                            </label>
                            <br />
                            <label class="labelColor">
                                Event URL:
                                <input class="popupInput" type ="url" name ="url" />
                            </label>
                            <br />
                            <label class="labelColor">
                                Event Description:
                                <input class="popupInput" type ="description" name ="description" />
                            </label>
                            <br />
                            <label class="labelColor">
                                Event Date:
                                <input class="popupInput" type ="date" name ="date" />
                            </label>
                            <br />
                            <label class="labelColor">
                                Event Location:
                                <input class="popupInput" type ="location" name ="location" />
                            </label>
                            <br />
                            <label class="labelColor">
                                Start time:
                                <input class="popupInput" type ="location" name ="location" />
                            </label>
                            <br />
                            <label class="labelColor">
                                End time:
                                <input class="popupInput" type ="location" name ="location" />
                            </label>
                            <br />
                            <label class="labelColor">
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