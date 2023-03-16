import { Link } from "react-router-dom";
import "./index.min.css";
import { MdOutlineDarkMode, MdOutlineWbSunny } from "react-icons/md";
import { useDispatch, useStore } from "react-redux";
import { useState } from "react";
import headerData from "./header_data";
import { HiOutlineBars3 } from "react-icons/hi2";

const Header = () => {
    const dispatch = useDispatch();
    const store = useStore();
    const [iconState, setIconState] = useState(1);
    const handleChangeMode = () => {
        setIconState(iconState == 0 ? 1: 0);
        dispatch(
            {
                type: "setMainColors",
                colors: {
                    mainColorOne: store.getState().mainColorOne == "rgb(110, 87, 224)" ? "#000" : "rgb(110, 87, 224)",
                    mainColorTwo: store.getState().mainColorTwo == "#FFF" ? "#000" : "#FFF",
                    mainBackgroundColor: store.getState().mainBackgroundColor == "#191624" ? "#FFF" : "#191624",
                    mainJobPositionColor: store.getState().mainJobPositionColor == "rgba(255,255,255,.7)" ? "rgba(0,0,0,.7)" : "rgba(255,255,255,.7)",
                    mainBackgroundInputColor: store.getState().mainBackgroundInputColor == "#231f35" ? "#d5d0ef" : "#231f35",
                },
            }
        );
        let rootElement = document.documentElement;
        rootElement.style.setProperty("--main-color-one", store.getState().mainColorOne);
        rootElement.style.setProperty("--main-color-two", store.getState().mainColorTwo);
        rootElement.style.setProperty("--main-background-color", store.getState().mainBackgroundColor);
        rootElement.style.setProperty("--main-job-position-color", store.getState().mainJobPositionColor);
        rootElement.style.setProperty("--main-background-input-color", store.getState().mainBackgroundInputColor);
    }

    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <span className="navbar-brand fw-bold">Ebrahim Massrie</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <HiOutlineBars3 />
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            {headerData.map((data, index) =>
                                <li className="nav-item" key={index}>
                                    {document.location.hash.slice(1) !== data.route && <Link className="nav-link color-black" to={data.route}>{data.pageTitle}</Link>}
                                </li>
                            )}
                            <li className="change-mode-icon" onClick={handleChangeMode}>
                                {iconState == 0 ? <MdOutlineDarkMode /> : <MdOutlineWbSunny />}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;