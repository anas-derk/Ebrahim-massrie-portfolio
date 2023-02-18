import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.min.css";

const Home = ({ pageTitle }) => {

    const [timerValue, setTimerValue] = useState(0);

    const [isLoading, setIsLoading] = useState(false);

    const [isShowSummary, setIsShowSummary] = useState(false);

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
                {timerValue < 4 && <div className="timer fw-bold">{ timerValue }</div>}
                {isLoading && <div className="loader"> Loading.. </div>}
                {/* Start Summary Section */}
                {isShowSummary && <section className="summary p-5">
                    <h1 className="mb-4">Welcome To You In My Portfolio</h1>
                    <h2 className="mb-4">I'am Ebrahim Massrie, Artificial Intelligence Engineer ..</h2>
                    <h6 className="mb-4">If you are a terminal fanatic, you can use my teminal by pressing the following button .</h6>
                    <Link className="btn btn-danger p-3" to="/terminal">Open My Terminal</Link>
                    <h6 className="mt-3 mb-3">Or</h6>
                    <Link className="btn btn-danger p-3" to="/introduction">Go To Introduction Page</Link>
                </section>}
                {/* End Summary Section */}
            </div>
            {/* End Grid System */}
        </div>
        // End Home Page
    );
}

export default Home;