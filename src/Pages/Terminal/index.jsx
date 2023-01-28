import { useEffect, useState } from "react";
import "./index.min.css";
import { useNavigate } from "react-router-dom";

const Terminal = ({ pageTitle }) => {

    const navigate = useNavigate();

    const [userName, setUserName] = useState("");

    const [error, setError] = useState("");

    const [isOpenTerminal, setIsOpenTerminal] = useState(false);

    const [isTerminalOpening, setIsTerminalOpening] = useState(false);

    const [command, setCommand] = useState("");

    const [results, setResults] = useState([]);

    const [isTerminalHeaderVisible, setIsTerminalHeaderVisible] = useState(true);

    const [previousCommandsList, setPreviousCommandsList] = useState([]);

    const [commandIndex, setCommandIndex] = useState(0);

    let useStatmentsAsTableData = [
        <td>1. First: If You Use Terminal For First Time, Please Enter Your Name Then Click On Open Terminal</td>,
        <td>2. You Can Running Commands By Write In Terminal Area The Next Command Then Click On Enter . <span className="run-command-statment p-2 bg-secondary m-2 d-block">emt [commandName] --[parameterName] [value] </span></td>,
        <td>3. For Display All Of Commands, Please Write Command: <span className="get-all-commands-statement bg-secondary p-2 m-2 d-block">emt get --all-commands</span></td>,
        <td>4. This Terminal it is not Characters Case Sensitive (example: get is equal GET)</td>,
        <td>5. For Knowledge Details Of Determinated Command Please Write Command: <span className="command-help bg-secondary p-2 m-2 d-block">emt [commandName] --help</span></td>,
        <td>6. Last, I Wish For You Fantastic Experince With My Terminal .</td>
    ];

    let useStatmentsAsTerminalCommandResults = [
        "1. If You Use Terminal For First Time, Please Enter Your Name Then Click On Open Terminal",
        "2. You Can Running Commands By Write In Terminal Area The Next Command Then Click On Enter: emt [commandName] --[parameterName] [value]",
        "3. For Display All Of Commands, Please Write Command: emt get --all-commands",
        "4. This Terminal it is not Characters Case Sensitive (example: get is equal GET)",
        "5. For Knowledge Details Of Determinated Command Please Write Command: emt [commandName] --help",
        "6. Last, I Wish For You Fantastic Experince With My Terminal .",
    ];

    let allCommands = [
        "emt cls",
        "emt who-am-i",
        "emt get --previous-commands",
        "emt clear --previous-commands-list",
        "emt close",
        "emt restart",
        "emt set --user-name [new_user_name] (Without Square Bracktes)",
    ];

    const addCommandToPreviousCommandList = () => {
        if (!previousCommandsList.includes(command)) {
            let previousCommandsListTemp = previousCommandsList.map(previousCommand => previousCommand);
            previousCommandsListTemp.unshift(command);
            setPreviousCommandsList(previousCommandsListTemp);
        }
    }

    const handleChange = (e) => setCommand(e.target.value);

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
        // Clear The Command Text Box
        setCommand("");
        // Handling Command Content Before Processing
        const commandAfterHandling = command.trim().replace(/\s{2,}/g, " ").toLowerCase();
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
            case "emt who-am-i": {
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
            case "emt get --previous-commands": {
                if (previousCommandsList.length === 0) {
                    setResults(["Sorry, Can't Find Commands In Previous Command List !!!"]);
                } else {
                    setResults(previousCommandsList);
                }
                addCommandToPreviousCommandList();
                break;
            }
            case "emt clear --previous-commands-list": {
                if (previousCommandsList.length === 0) {
                    setResults(["Sorry, Can't Find Commands In Previous Command List !!!"]);
                } else {
                    setPreviousCommandsList([]);
                    setResults(["Please Wait While Clear Previous Commands List .."]);
                    setTimeout(() => {
                        setResults(["Ok!!, The Process is Successfuly ."]);
                    }, 2500);
                }
                break;
            }
            case "emt close": {
                setResults(["Please Wait While Closing Ebrahim Messrie Terminal The Back To Home Page ..."]);
                setTimeout(() => {
                    navigate("/");
                }, 3000);
                break;
            }
            case "emt restart": {
                setResults(["Ebrahim Massrie Terminal Restart Now .."]);
                setTimeout(() => {
                    document.location.reload();
                }, 2000);
                break;
            }
            case "emt get --all-commands": {
                setResults(allCommands);
                addCommandToPreviousCommandList();
                break;
            }
            case "emt get --use-statments": {
                setResults(useStatmentsAsTerminalCommandResults);
                addCommandToPreviousCommandList();
                break;
            }
            default: {
                // Convert Command To Array By Empty Space Separator
                let commandPartsArray = commandAfterHandling.split(" ");
                // get Command Parts Array Length
                let commandPartsArrayLength = commandPartsArray.length;
                // check if previous array includes the next strings: emt, set, --user-name
                // and check if array length greater than 4 to change user name
                if (
                    commandPartsArray.includes("emt")
                    && commandPartsArray.includes("set")
                    && commandPartsArray.includes("--user-name")
                    && commandPartsArrayLength >= 4
                ) {
                    // Get new user name In Array By Slicing Elements From The Fourth Element
                    let namePartsArray = commandPartsArray.slice(3);
                    // Execute Loop On Array For Replace Each (') Element With A Empty String 
                    namePartsArray.forEach((namePart, index) => {
                        namePartsArray[index] = namePart.replaceAll("'", "");
                    });
                    // Convert The Array To String Without Comma
                    let newUserName = namePartsArray.join(" ");
                    // Start Handle Change User Name Process
                    setResults(["changing the username of the entered name ..."]);
                    localStorage.setItem("user-name", newUserName);
                    setTimeout(() => {
                        setResults(["The name has been changed successfully, and the terminal is restarting .."]);
                        setTimeout(() => {
                            document.location.reload();
                        }, 1500);
                    }, 2500);

                } else {
                    setResults([
                        "Error, The Command Is Not Found !!",
                        "Please Write Any Command Valid ."
                    ]);
                }
            }
        }
    }

    document.addEventListener("keyup", (e) => {

        handleKeyboardPressing(e.key);

    });

    const handleKeyboardPressing = (key) => {

        if (key === "ArrowUp") {

            if (previousCommandsList.length > 0) {

                setCommand(previousCommandsList[commandIndex]);

            }
            
        }

        if (key === "ArrowDown") {

            console.log("arrow down");

        }

    }

    useEffect(() => {

        document.title = pageTitle;

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
                        {useStatmentsAsTableData.map((statement, index) =>
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
                            className="form-control p-3 command-input"
                            onChange={(e) => setUserName(e.target.value)}
                            value={command}
                        />
                    </div>
                    <div className="col-md-4">
                        <button className="btn btn-success p-3 w-100 open-terminal-btn" onClick={openTerminal}>Open Terminal</button>
                    </div>
                </div>
            }
            {isOpenTerminal && 
                <h6 className="welcome-message mb-4">Hi <span className="user-name fw-bold bg-success p-2 me-2 ms-2">{userName}</span> , The Terminal Is Running .</h6> &&
                <h6 className="use-statments mb-4">If You Can't Remember The Commands, Please Write The Next Command: <span className="get-use-statement bg-secondary p-2 m-2 d-block">emt get --use-statments</span></h6>
            }
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
                            onChange={handleChange}
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