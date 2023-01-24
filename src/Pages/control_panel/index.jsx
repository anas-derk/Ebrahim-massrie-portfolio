import { useEffect } from "react";
import "./index.min.css";

const ControlPanel = ({pageTitle}) => {

    useEffect(() => {

        document.title = pageTitle;

    });

    return (
        // Start Controll Panel Page
        <div className="controll-panel">
            <h1>Hello Controll Panel</h1>
        </div>
        // End Controll Panel Page
    );
}

export default ControlPanel;