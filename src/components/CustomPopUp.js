import React, {useState} from "react";


function Popup(props) {
    const[events, setEvents] = useState("")
    const[rsos, setRsos] = useState("")

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

    return (props.trigger) ? (
        <div className="popup">
            <div className="pop-up-inner">
                {props.children}
                <button className="popup-close-btn" onClick={() => props.setTrigger(false)}>Submit</button>
                {/* {props.children} */}
            </div>
        </div>
    ) : "";
}

export default Popup;