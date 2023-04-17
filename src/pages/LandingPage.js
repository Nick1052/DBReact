import React, { useState } from "react";

function LandingPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [university, setUniversity] = useState("");
    const [role, setRole] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleRoleChange = (event) => {
        setRole(event.target.value);
    };

    const handleUniversityChange = (event) => {
        setUniversity(event.target.value);
    };

    const handleLoginSubmit = async (event) => {
        event.preventDefault();
        try {
        const response = await fetch("http://127.0.0.1:5000/login", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
            email: email,
            password: password,
            }),
        });
        const data = await response.json();
        console.log(data);
        // TODO: Handle response data
        } catch (error) {
        console.error(error);
        }
    };

    const handleRegisterSubmit = async (event) => {
        event.preventDefault();

        const entry = {
            email: email,
            password: password,
            university: university,
            role: role,
                }
        console.log(entry)
        try {
        const response = await fetch("http://127.0.0.1:5000/register", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
            email: email,
            password: password,
            university: university,
            role: role,
            }),
        });
        const data = await response.json();
        console.log(data);
        // TODO: Handle response data
        } catch (error) {
        console.error(error);
        }
  };

  return (
    <div className="landing-page-container">
        <h1 className="page-title">Events Database</h1>
        <div className="landing-page-column">
            <h2>Login</h2>
            <form onSubmit={handleLoginSubmit}>
                <label>
                    Email:
                    <input type="email" name="email" onChange={handleEmailChange} />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        onChange={handlePasswordChange}
                    />
                </label>
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
        <div className="landing-page-column">
            <h2>Register</h2>
            <form onSubmit={handleRegisterSubmit}>
                <label>
                    Email:
                    <input type="email" name="email" onChange={handleEmailChange} />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        onChange={handlePasswordChange}
                    />
                </label>
                <br />
                <label>
                    University:
                    <input
                        type="university"
                        name="university"
                        value={university}
                        onChange={handleUniversityChange}
                    />
                </label>
                <br />
                <label>
                    Role:
                    <select value={role} onChange={handleRoleChange}>
                        <option value =""></option>
                        <option value="student">Student</option>
                        <option value="admin">Admin</option>
                        <option value="superadmin">SuperAdmin</option>
                    </select>
                </label>
                <br />
                <button type="submit">Register</button>
            </form>
        </div>
    </div>
  );
}

export default LandingPage;