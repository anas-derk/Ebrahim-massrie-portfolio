import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./index.min.css";

const Home = ({ pageTitle }) => {

    const smothlyTextWriting = useSelector(state => state.smothlyTextWriting);

    const [timerValue, setTimerValue] = useState(0);

    const [isLoading, setIsLoading] = useState(false);

    const [isShowSummary, setIsShowSummary] = useState(false);

    const [welcomeMessage, setWelcomeMessage] = useState("");

    const [whoAmI, setHowAmI] = useState("");

    const [portfolioUseStatement, setPortfolioUseStatement] = useState("");

    useEffect(() => {

        document.title = pageTitle;

        let counter = 0;

        let timerInterval = setInterval(() => {

            if (counter < 4) setTimerValue(++counter);

            else {

                setIsLoading(true);

                setTimeout(() => {

                    setIsLoading(false);

                    setIsShowSummary(true);

                    smothlyTextWriting("Welcome To You In My Portfolio", setWelcomeMessage);

                    smothlyTextWriting("I am Ebrahim Massrie, Artificial Intelligence Engineer ..", setHowAmI);

                    smothlyTextWriting("If you are a terminal fanatic, you can use my teminal by pressing the following button .", setPortfolioUseStatement);

                }, 2000);

                clearInterval(timerInterval);

            };

        }, 1000);

    }, []);

    return (
        // Start Home Page
        <div className="home">
            {/* Start Grid System */}
            <div className="control-box row text-center justify-content-center align-items-center">
                {timerValue < 4 && <div className="timer fw-bold">{timerValue}</div>}
                {isLoading && <div className="loader"> Loading.. </div>}
                {/* Start Summary Section */}
                {isShowSummary && <section className="summary p-5">
                    <h1 className="mb-4">{welcomeMessage}</h1>
                    <h2 className="mb-4">{whoAmI}</h2>
                    <h6 className="mb-4">{portfolioUseStatement}</h6>
                    <Link className="btn btn-danger p-3 open-terminal-btn" to="/terminal">Open My Terminal</Link>
                    <h6 className="mt-3 mb-3">Or</h6>
                    <Link className="btn btn-danger p-3 open-introduction-page-btn" to="/introduction">Go To Introduction Page</Link>
                </section>}
                {/* End Summary Section */}
            </div>
            {/* End Grid System */}
        </div>
        // End Home Page
    );
}

export default Home;