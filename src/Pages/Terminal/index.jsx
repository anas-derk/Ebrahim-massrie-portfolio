import { useEffect, useState } from "react";
import "./index.min.css";

const Terminal = ({ pageTitle }) => {

    useEffect(() => {

        document.title = pageTitle;

    });

    const [userName, setUserName] = useState("");

    const [error, setError] = useState("");

    const [isOpenTerminal, setIsOpenTerminal] = useState(false);

    const [isTerminalOpening, setIsTerminalOpening] = useState(false);

    const [command, setCommand] = useState("");

    const [results, setResults] = useState([]);

    const [isTerminalHeaderVisible, setIsTerminalHeaderVisible] = useState(true);

    const [previousCommandsList, setPreviousCommandsList] = useState([]);

    const addCommandToPreviousCommandList = () => {
        if (!previousCommandsList.includes(command)) {
            let previousCommandsListTemp = previousCommandsList.map(previousCommand => previousCommand);
            previousCommandsListTemp.unshift(command);
            setPreviousCommandsList(previousCommandsListTemp);
        }
    }

    let useStatments = [
        <td>1. First: If You Use Terminal For First Time, Please Enter Your Name Then Click On Open Terminal</td>,
        <td>2. You Can Running Commands By Write In Terminal Area The Next Command Then Click On Enter . <span className="run-command-statment p-2 bg-secondary m-2 d-block">emt [commandName]</span></td>,
        <td>3. For Display All Of Commands, Please Write Command: <span className="get-all-commands-statement bg-secondary p-2 m-2 d-block">emt get all-commands</span></td>,
        <td>4. This Terminal Characters Case Sensitive (example: get is not GET)</td>,
        <td>5. For Knowledge Details Of Determinated Command Please Write Command: <span className="command-help bg-secondary p-2 m-2 d-block">emt [commandName] --help</span></td>,
        <td>6. Last, I Wish For You Fantastic Experince With My Terminal .</td>
    ];

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
            setIsTerminalOpening(true);
            let openTerminalTimeout = setTimeout(() => {
                setIsTerminalOpening(false);
                setIsOpenTerminal(true);
                clearTimeout(openTerminalTimeout);
            }, 3000);
        }
    }

    const executeCommand = (e) => {
        e.preventDefault();
        setCommand("");
        const commandAfterHandling = command.trim().replace(/\s{2,}/g, " ");
        switch (commandAfterHandling) {
            case "": {
                setResults([
                    "Error, Please Write Any Valid Command !!",
                ]);
                break;
            }
            case "emt cls": {
                setIsTerminalHeaderVisible(false);
                setResults([]);
                addCommandToPreviousCommandList();
                break;
            }
            case "emt whoiam": {
                setResults([
                    "Hi, I'am Ebrahim Massrie |",
                    "Junior Artificial Intelligence Engineer",
                    "I am interested in the fields of data science,",
                    "machine learning and deep learning,",
                    "and I seek to build more modern applications in this field."
                ]);
                addCommandToPreviousCommandList();
                break;
            }
            case "emt get previous-commands": {
                setResults(previousCommandsList);
                addCommandToPreviousCommandList();
                break;
            }
            // case "emt set previous-commands": {
            //     setResults(previousCommandsList);
            //     addCommandToPreviousCommandList();
            //     break;
            // }
            case "emt reload": {
                setResults(["Ebrahim Massrie Terminal Reloading Now .."]);
                setTimeout(() => {
                    document.location.reload();
                }, 2000);
                break;
            }
            default: {
                setResults([
                    "Error, The Command Is Not Found !!",
                    "Please Write Any Command Valid ."
                ]);
            }
        }
    }

    useEffect(() => {

        const user_name = localStorage.getItem("user-name");

        if (user_name) {

            setIsTerminalOpening(true);

            setUserName(user_name);

            let terminalOpeningTimeout = setTimeout(() => {

                setIsTerminalOpening(false);

                setIsOpenTerminal(true);

                clearTimeout(terminalOpeningTimeout);

            }, 2000);

        }

    }, []);

    return (
        // Start Terminal
        <div className="terminal pt-5 pb-5">
            <h2 className="mb-4 text-center bg-success p-3">Welcome To You In Eng. Ebrahim Massrie Terminal .</h2>
            {!isOpenTerminal && !isTerminalOpening &&
                <table className="how-to-use-terminal-table w-100 mb-4">
                    <thead>
                        <tr>
                            <th className="bg-secondary p-2 use-statments ps-3">use statments:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {useStatments.map((statement, index) =>
                            <tr key={index}>
                                {statement}
                            </tr>
                        )}
                    </tbody>
                </table>
            }
            {!isOpenTerminal && !isTerminalOpening && <h6 className="mb-3">Please Enter Your Name Then Click Open Terminal :</h6>
                && <div className="row mb-4">
                    <div className="col-md-8">
                        <input
                            type="text"
                            placeholder="Enter Your Name Here"
                            className="form-control p-3"
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </div>
                    <div className="col-md-4">
                        <button className="btn btn-success p-3 w-100 open-terminal-btn" onClick={openTerminal}>Open Terminal</button>
                    </div>
                </div>
            }
            {isOpenTerminal && <h6 className="welcome-message mb-4">Hi <span className="user-name fw-bold bg-success p-2 me-2 ms-2">{userName}</span> , The Terminal Is Running .</h6>}
            {error && <p className="alert alert-danger">{error}</p>}
            {isTerminalOpening && <div className="d-flex align-items-center bg-secondary p-3 loading-box">
                <strong>Loading...</strong>
                <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
            </div>}
            {isOpenTerminal && <div className="terminal-control-box p-4">
                {isTerminalHeaderVisible && <header className="header-terminal mb-4">
                    <h6 className="terminal-name">Ebrahim Massrie Terminal</h6>
                    <h6 className="copyright">Copyright &copy; Ebrahim Massrie. All rights reserved.</h6>
                </header>}
                {/* Start Grid System */}
                {/* Start Terminal Body */}
                <div className="terminal-body">
                    {/* Start Terminal Control Form */}
                    <form className="terminal-control-form mb-3" onSubmit={executeCommand}>
                        <span className="bg-success p-2">{userName}@EbrahimMessrie-terminal: </span>
                        <input
                            type="text"
                            className="command-input ps-2"
                            autoFocus
                            onChange={(e) => setCommand(e.target.value)}
                            value={command}
                        />
                    </form>
                    {/* End Terminal Control Form */}
                </div>
                {/* End Terminal Body */}
                {/* Start Result Box */}
                {results && <div className="result-box">
                    <ul className="result-list">
                        {results.map((result, index) =>
                            <li className="result mb-3" key={index}>{result}</li>
                        )}
                    </ul>
                </div>}
                {/* End Result Box */}
            </div>}
        </div>
        // End Terminal
    );
}

export default Terminal;