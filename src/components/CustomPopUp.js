import React, {useState} from "react";
import CloseButton from 'react-bootstrap/CloseButton';


function Popup(props) {
    const [name, setName] = useState("")
    const [url, setUrl] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState()
    const [location, setLocation] = useState("")
    const [start_time, setStart_time] = useState("")
    const [end_time, setEnd_time] = useState("")
    const [eventType, setEventType] = useState("")
    const [userId, setUserId] = useState("")
    const [rsoId, setRsoId] = useState("")

    const handleUrlChange = (event) => {
        setUrl(event.target.value);
      };
      
      const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
      };
      
      const handleDateChange = (event) => {
        setDate(event.target.value);
      };
      
      const handleLocationChange = (event) => {
        setLocation(event.target.value);
      };
      
      const handleStartTimeChange = (event) => {
        setStart_time(event.target.value);
      };
      
      const handleEndTimeChange = (event) => {
        setEnd_time(event.target.value);
      };
      
      const handleEventTypeChange = (event) => {
        setEventType(event.target.value);
      };
      
      const handleUserIdChange = (event) => {
        setUserId(event.target.value);
      };
      
      const handleRsoIdChange = (event) => {
        setRsoId(event.target.value);
      };

    
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

    const handleAddEvent = async (event) => {
        event.preventDefault();
        try {
        const response = await fetch("http://127.0.0.1:5000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                userId: userId,

            }),
        });

        const data = await response.json();
        console.log(data);
        // TODO: Handle response data
        } catch (error) {
        console.error(error);
        }
    };

    const handleSubmitButton = () => {
        switch(props.popupType){
        //     case "createRSO": handleCreateRSO(); break;
        //     case "deleteRSO": handleDeleteRSO(); break;
        //     case "joinRSO": handleJoinRSO(); break;
        //     case "addUniversity": handleAddUniversity(); break;
        //     case "deleteUniversity": handleDeleteUniversity(); break;
        //     case "addComment": handleAddComment(); break;
        //     case "deleteComment": handleDeleteComment(); break;
            case "addEvent": handleAddEvent(); break;
        }
        props.setTrigger(false)
    }
    return (props.trigger) ? (
        <div className="popup">
            {/* <button class="x" onClick={() => props.setTrigger(false)}>&times;</button> */}
            <div className="pop-up-inner">
              <div class="inputValues">
                {props.children}
                <button type = "button" className="popup-close-btn" onClick={handleSubmitButton}>Submit</button>
                {/* {props.children} */}
                </div>
            </div>
        </div>
    ) : "";
}

export default Popup;