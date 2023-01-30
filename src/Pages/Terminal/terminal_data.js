let useStatmentsAsTableData = [
    <td>1. First: If You Use Terminal For First Time, Please Enter Your Name Then Click On Open Terminal</td>,
    <td>2. You Can Running Commands By Write In Terminal Area The Next Command Then Click On Enter . <span className="run-command-statment p-2 bg-secondary m-2 d-block">emt [commandName] --[parameterName] [value] </span></td>,
    <td>3. For Display All Of Commands, Please Write Command: <span className="get-all-commands-statement bg-secondary p-2 m-2 d-block">emt get --all-commands</span></td>,
    <td>4. This Terminal it is not Characters Case Sensitive (example: get is equal GET)</td>,
    <td>5. Last, I Wish For You Fantastic Experince With My Terminal .</td>
];

let useStatmentsAsTerminalCommandResults = [
    "1. If You Use Terminal For First Time, Please Enter Your Name Then Click On Open Terminal",
    "2. You Can Running Commands By Write In Terminal Area The Next Command Then Click On Enter: emt [commandName] --[parameterName] [value]",
    "3. For Display All Of Commands, Please Write Command: emt get --all-commands",
    "4. This Terminal it is not Characters Case Sensitive (example: get is equal GET)",
    "5. Last, I Wish For You Fantastic Experince With My Terminal .",
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

export default {
    useStatmentsAsTableData,
    useStatmentsAsTerminalCommandResults,
    allCommands,
}