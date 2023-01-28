import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.min.css";

const Home = ({ pageTitle }) => {

    useEffect(() => {

        document.title = pageTitle;

    });

    return (
        // Start Home Page
        <div className="home">
            {/* Start Grid System */}
            <div className="control-box row text-center justify-content-center align-items-center">
                {/* Start Summary Section */}
                <section className="summary">
                    <h1 className="mb-4">Welcome To You In My Portfolio</h1>
                    <h2 className="mb-4">I'am Ebrahim Massrie, Artificial Intelligence Engineer ..</h2>
                    <h6 className="mb-4">If you are a terminal fanatic, you can use my teminal by pressing the following button .</h6>
                    <Link className="btn btn-danger p-3" to="/terminal">Open My Terminal</Link>
                    <h6 className="mt-3 mb-3">Or</h6>
                    <Link className="btn btn-danger p-3" to="/introduction">Go To Introduction Page</Link>
                </section>
                {/* End Summary Section */}
            </div>
            {/* End Grid System */}
        </div>
        // End Home Page
    );
}

export default Home;