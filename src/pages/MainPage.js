import React, {useState} from "react"
import {useNavigate} from 'react-router-dom'
import {useLocation} from 'react-router-dom'

function MainPage() {
    const[events, setEvents] = useState("")
    const[rsos, setRsos] = useState("")
    const location = useLocation();
    
    console.log(location.state.userId)

    // const handleAddEvent = async (event) => {
    //     event.preventDefault();
    //     try {
    //     const response = await fetch("http://127.0.0.1:5000/login", {
    //         method: "POST",
    //         headers: {
    //         "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //         email: email,
    //         password: password,
    //         }),
    //     });
    //     const data = await response.json();
    //     console.log(data);
    //     // TODO: Handle response data
    //     } catch (error) {
    //     console.error(error);
    //     }
    // };

    // const handleDeleteEvent = async (event) => {
    //     event.preventDefault();
    //     try {
    //     const response = await fetch("http://127.0.0.1:5000/login", {
    //         method: "POST",
    //         headers: {
    //         "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //         email: email,
    //         password: password,
    //         }),
    //     });
    //     const data = await response.json();
    //     console.log(data);
    //     // TODO: Handle response data
    //     } catch (error) {
    //     console.error(error);
    //     }
    // };

    // const handleEditEvent = async (event) => {
    //     event.preventDefault();
    //     try {
    //     const response = await fetch("http://127.0.0.1:5000/login", {
    //         method: "POST",
    //         headers: {
    //         "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //         email: email,
    //         password: password,
    //         }),
    //     });
    //     const data = await response.json();
    //     console.log(data);
    //     // TODO: Handle response data
    //     } catch (error) {
    //     console.error(error);
    //     }
    // };

    // const handleAddRso = async (event) => {
    //     event.preventDefault();
    //     try {
    //     const response = await fetch("http://127.0.0.1:5000/login", {
    //         method: "POST",
    //         headers: {
    //         "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //         email: email,
    //         password: password,
    //         }),
    //     });
    //     const data = await response.json();
    //     console.log(data);
    //     // TODO: Handle response data
    //     } catch (error) {
    //     console.error(error);
    //     }
    // };

    // const handleJoinRso = async (event) => {
    //     event.preventDefault();
    //     try {
    //     const response = await fetch("http://127.0.0.1:5000/login", {
    //         method: "POST",
    //         headers: {
    //         "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //         email: email,
    //         password: password,
    //         }),
    //     });
    //     const data = await response.json();
    //     console.log(data);
    //     // TODO: Handle response data
    //     } catch (error) {
    //     console.error(error);
    //     }
    // };

    // const handleDeleteRso = async (event) => {
    //     event.preventDefault();
    //     try {
    //     const response = await fetch("http://127.0.0.1:5000/login", {
    //         method: "POST",
    //         headers: {
    //         "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //         email: email,
    //         password: password,
    //         }),
    //     });
    //     const data = await response.json();
    //     console.log(data);
    //     // TODO: Handle response data
    //     } catch (error) {
    //     console.error(error);
    //     }
    // };

    // const handleAddUniversity = async (event) => {
    //     event.preventDefault();
    //     try {
    //     const response = await fetch("http://127.0.0.1:5000/login", {
    //         method: "POST",
    //         headers: {
    //         "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //         email: email,
    //         password: password,
    //         }),
    //     });
    //     const data = await response.json();
    //     console.log(data);
    //     // TODO: Handle response data
    //     } catch (error) {
    //     console.error(error);
    //     }
    // };

    // const handleDeleteUniversity = async (event) => {
    //     event.preventDefault();
    //     try {
    //     const response = await fetch("http://127.0.0.1:5000/login", {
    //         method: "POST",
    //         headers: {
    //         "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //         email: email,
    //         password: password,
    //         }),
    //     });
    //     const data = await response.json();
    //     console.log(data);
    //     // TODO: Handle response data
    //     } catch (error) {
    //     console.error(error);
    //     }
    // };

    // const handleAddComment = async (event) => {
    //     event.preventDefault();
    //     try {
    //     const response = await fetch("http://127.0.0.1:5000/login", {
    //         method: "POST",
    //         headers: {
    //         "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //         email: email,
    //         password: password,
    //         }),
    //     });
    //     const data = await response.json();
    //     console.log(data);
    //     // TODO: Handle response data
    //     } catch (error) {
    //     console.error(error);
    //     }
    // };

    // const handleDeleteComment = async (event) => {
    //     event.preventDefault();
    //     try {
    //     const response = await fetch("http://127.0.0.1:5000/login", {
    //         method: "POST",
    //         headers: {
    //         "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //         email: email,
    //         password: password,
    //         }),
    //     });
    //     const data = await response.json();
    //     console.log(data);
    //     // TODO: Handle response data
    //     } catch (error) {
    //     console.error(error);
    //     }
    // };

    // const handleViewEvents = async (event) => {
    //     event.preventDefault();
    //     try {
    //     const response = await fetch("http://127.0.0.1:5000/login", {
    //         method: "POST",
    //         headers: {
    //         "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //         email: email,
    //         password: password,
    //         }),
    //     });
    //     const data = await response.json();
    //     console.log(data);
    //     // TODO: Handle response data
    //     } catch (error) {
    //     console.error(error);
    //     }
    // };

    // const handleViewRsoEvents = async (event) => {
    //     event.preventDefault();
    //     try {
    //     const response = await fetch("http://127.0.0.1:5000/login", {
    //         method: "POST",
    //         headers: {
    //         "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //         email: email,
    //         password: password,
    //         }),
    //     });
    //     const data = await response.json();
    //     console.log(data);
    //     // TODO: Handle response data
    //     } catch (error) {
    //     console.error(error);
    //     }
    // };

    // const handleViewUniversityEvents = async (event) => {
    //     event.preventDefault();
    //     try {
    //     const response = await fetch("http://127.0.0.1:5000/login", {
    //         method: "POST",
    //         headers: {
    //         "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //         email: email,
    //         password: password,
    //         }),
    //     });
    //     const data = await response.json();
    //     console.log(data);
    //     // TODO: Handle response data
    //     } catch (error) {
    //     console.error(error);
    //     }
    // };

    // const handleViewComment = async (event) => {
    //     event.preventDefault();
    //     try {
    //     const response = await fetch("http://127.0.0.1:5000/login", {
    //         method: "POST",
    //         headers: {
    //         "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //         email: email,
    //         password: password,
    //         }),
    //     });
    //     const data = await response.json();
    //     console.log(data);
    //     // TODO: Handle response data
    //     } catch (error) {
    //     console.error(error);
    //     }
    // };
  
    return (
        <div className="page">
            <div className="controls">
                <div className="rsoControls">
                    <button className="controlsB">Create RSO</button>
                    <button className="controlsB">Delete RSO</button>
                    <button className="controlsB">Join RSO</button>
                </div>
                <div className="universityControls">
                    <button className="controlsB">Add University</button>
                    <button className="controlsB">Delete University</button>
                </div>
                <div className="eventsControls">
                    <button className="controlsB">Add Events</button>
        
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
                            <td className="eventId">eventId</td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
  }


export default MainPage;