import { createStore } from "redux";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaGithub,
    FaInstagram,
} from 'react-icons/fa';

const initState = {
    mainColorOne: "rgb(110, 87, 224)",
    mainColorTwo: "#FFF",
    mainBackgroundColor: "#191624",
    mainJobPositionColor: "rgba(255,255,255,.7)",
    linksIconsComponents: [
        <FaFacebookF />,
        <FaLinkedinIn />,
        <FaGithub />,
        <FaInstagram />
    ],
    smothlyTextWriting: (text, setterFunc, duration = 50) => {
        let charIndex = 0;
        let textInternval = setInterval(() => {
            if (charIndex < text.length) {
                setterFunc(text.slice(0, charIndex + 1));
                charIndex++;
            } else {
                let textTimeout = setTimeout(() => {
                    charIndex = 0;
                    clearTimeout(textTimeout);
                }, 2000);
                clearInterval(textInternval);
            };
        }, duration);
    }
}

const rootReducer = (state = initState, action) => {
    if (action.type == "setMainColors") {
        return {
            ...state,
            mainColorOne: action.colors.mainColorOne,
            mainColorTwo: action.colors.mainColorTwo,
            mainBackgroundColor: action.colors.mainBackgroundColor,
            mainJobPositionColor: action.colors.mainJobPositionColor,
        };
    }
    return state;
}

const store = createStore(rootReducer);

export default store;