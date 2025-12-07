import "./about.css";
import { FaCircleCheck } from "react-icons/fa6";

function about() {
    return (
        <>
            <div className="about-header">
                <h1 className="about-title">Why Choose Next Horizon ?</h1>
                <p className="about-paragraph">
                    Join hundreds of successful students who trust Next Horizon for thier
                    academic journeys.
                </p>
            </div>
            <div className="about-main">
                <div className="about-column">
                    <ul className="about-list">
                        <li className="about-list-item">
                            <FaCircleCheck className="about-check-icon" />
                            24/7 access to all learning materials
                        </li>
                        <li className="about-list-item">
                            {" "}
                            <FaCircleCheck className="about-check-icon" /> Direct support from
                            experienced admins
                        </li>
                        <li className="about-list-item">
                            <FaCircleCheck className="about-check-icon" />
                            Regular updates with new content{" "}
                        </li>
                        <li className="about-list-item">
                            <FaCircleCheck className="about-check-icon" /> Exam preparation resources{" "}
                        </li>
                    </ul>
                </div>

                <div className="about-column">
                    <ul className="about-list">
                        <li className="about-list-item">
                            <FaCircleCheck className="about-check-icon" />
                            Bilingual content in English and French
                        </li>
                        <li className="about-list-item">
                            {" "}
                            <FaCircleCheck className="about-check-icon" /> Community -driven learning
                            environment
                        </li>
                        <li className="about-list-item">
                            <FaCircleCheck className="about-check-icon" />
                            Flexible study schedule{" "}
                        </li>
                        <li className="about-list-item">
                            <FaCircleCheck className="about-check-icon" /> Expert instructor courses
                            available{" "}
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
export default about;