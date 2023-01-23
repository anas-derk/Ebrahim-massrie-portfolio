import { createStore } from "redux";

const initState = {
    mainColorOne: "rgb(110, 87, 224)",
    mainColorTwo: "#FFF",
    mainBackgroundColor: "#191624",
    mainJobPositionColor: "rgba(255,255,255,.7)",
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