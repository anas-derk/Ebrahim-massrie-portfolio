import { useEffect, useState } from "react";
import { Fragment } from "react";
import Header from "../../Components/Header";
import "./index.min.css";
import { MdDoubleArrow } from "react-icons/md";
import { useSelector } from "react-redux";
import my_data from "../../Assets/myData/my_data.json";
import image4 from "../../Assets/images/photo_6039736428323258924_x.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactMe = ({ pageTitle }) => {

    const linksIconsComponents = useSelector(state => state.linksIconsComponents);

    const contact_links_arr = Object.values(my_data.contact_me_links);

    const [isAppearedLoader, setIsAppearedLoader] = useState(true);

    const sendMessage = (e) => {

        e.preventDefault();

        console.log("yes");
    }

    useEffect(() => {

        document.title = pageTitle;

        AOS.init();

        document.querySelector(".contact-me").style.minHeight = `calc(100vh - ${document.querySelector("header").offsetHeight}px)`;

        let loaderTimeout = setTimeout(() => {

            setIsAppearedLoader(false);

            clearTimeout(loaderTimeout);

        }, 2000);

    }, []);

    return (
        <Fragment>
            <Header />
            {/* Start Contact Me Page */}
            <div className={`contact-me d-flex align-items-center ${isAppearedLoader ? 'loader-state' : 'pb-5 pt-5'}`}>
                {isAppearedLoader && <div className="loader"> Loading ... </div>}
                {/* Start Container */}
                {!isAppearedLoader && <div className="container">
                    <h1 className="page-name text-center mb-5">Contact Me</h1>
                    {/* Start Grid System */}
                    <div className="row align-items-center">
                        {/* Start Column */}
                        <div className="col-lg-5 img-box" data-aos="fade-right">
                            <img src={image4} alt="Image Exist !!" className="my-image" />
                        </div>
                        {/* End Column */}
                        {/* Start Column */}
                        <div className="col-lg-7">
                            {/* Start Contact Me Form */}
                            <form className="contact-me-form" onSubmit={sendMessage}>
                                {/* Start Grid System */}
                                <div className="row mb-4">
                                    <div className="col-lg" data-aos="flip-left">
                                        <input type="text" placeholder="Name" className="form-control p-4 name-input" required />
                                    </div>
                                    <div className="col-lg" data-aos="flip-left">
                                        <input type="email" placeholder="Email" className="form-control p-4" required />
                                    </div>
                                </div>
                                {/* End Grid System */}
                                <input type="text" placeholder="Project" className="form-control mb-4 p-4" required data-aos="flip-left" />
                                <textarea placeholder="Message" className="form-control mb-4 p-4" required data-aos="flip-left" />
                                {/* Start Grid System */}
                                <div className="row" data-aos="fade-right">
                                    <div className="col-md-4">
                                        <button
                                            type="submit"
                                            className="btn send-message-btn p-3 w-100"
                                        >
                                            Send Message &nbsp;
                                            <MdDoubleArrow />
                                        </button>
                                    </div>
                                    <div className="col-md-8">
                                        <ul className="contact-links text-center d-flex h-100 align-items-center flex-wrap">
                                            {linksIconsComponents.map((icon, index) =>
                                                <li className="link p-2 pe-3 ps-3" key={index}>
                                                    <a href={contact_links_arr[index]} className="icon" target="_blank">{icon}</a>
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                                {/* End Grid System */}
                            </form>
                            {/* End Contact Me Form */}
                        </div>
                        {/* End Column */}
                    </div>
                    {/* End Grid System */}
                </div>}
                {/* Start Container */}
            </div>
            {/* End Contact Me Page */}
        </Fragment>
    );
}

export default ContactMe;