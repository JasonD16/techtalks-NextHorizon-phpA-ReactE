import "./about.css";
import { FaCircleCheck } from "react-icons/fa6";

function about() {
  return (
    <>
      <div className="header">
        <h1 className="title">Why Choose Next Horizon ?</h1>
        <p className="paragraph">
          Join hundreds of successful students who trust Next Horizon for thier
          academic journeys.
        </p>
      </div>
      <div className="main_div">
        <div className="right_div">
          <ul className="right_list">
            <li className="li">
              <FaCircleCheck className="check" />
              24/7 access to all learning materials
            </li>
            <li className="li">
              {" "}
              <FaCircleCheck className="check" /> Direct support from
              experienced admins
            </li>
            <li className="li">
              <FaCircleCheck className="check" />
              Regular updates with new content{" "}
            </li>
            <li className="li">
              <FaCircleCheck className="check" /> Exam preparation resources{" "}
            </li>
          </ul>
        </div>

        <div className="left_div">
          <ul className="left_list">
            <li className="li">
              <FaCircleCheck className="check" />
              Bilingual content in English and French
            </li>
            <li className="li">
              {" "}
              <FaCircleCheck className="check" /> Community -driven learning
              environment
            </li>
            <li className="li">
              <FaCircleCheck className="check" />
              Flexible study schedule{" "}
            </li>
            <li className="li">
              <FaCircleCheck className="check" /> Expert instructor courses
              available{" "}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default about;