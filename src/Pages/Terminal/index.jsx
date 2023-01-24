import { useEffect, useState } from "react";
import "./index.min.css";

const Terminal = ({ pageTitle }) => {

    useEffect(() => {

        document.title = pageTitle;

    });

    const [userName, setUserName] = useState("");

    const [error, setError] = useState("");

    const openTerminal = () => {
        if (!userName) {
            setError("Error, Please Enter Your Name !!!");
            let errorTimeout = setTimeout(() => {
                setError("");
                clearInterval(errorTimeout);
            }, 3000);
        }
        else {
            localStorage.setItem("user-name", userName);
        }
    }

    return (
        // Start Terminal
        <div className="terminal pt-5">
            <h2 className="mb-5 text-center bg-success p-3">Welcome To You In Eng. Ebrahim Massrie Terminal .</h2>
            <h6 className="mb-3">Please Enter Your Name Then Click Open Terminal :</h6>
            <div className="row mb-4">
                <div className="col-md-8">
                    <input
                        type="text"
                        placeholder="Enter Your Name Here"
                        className="form-control p-3"
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
                <div className="col-md-4">
                    <button className="btn btn-success p-3 w-100" onClick={openTerminal}>Open Terminal</button>
                </div>
            </div>
            {error && <p className="alert alert-danger">{ error }</p>}
            <div className="terminal-control-box p-4">
                aa
            </div>
        </div>
        // End Terminal
    );
}

export default Terminal;