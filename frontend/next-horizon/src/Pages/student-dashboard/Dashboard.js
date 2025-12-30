import "./Dashboard.css";
import {
  FaUserCircle,
  FaBook,
  FaClipboardList,
  FaFileAlt,
  FaTasks,
  FaVideo,
  FaChalkboardTeacher,
} from "react-icons/fa";

function Dashboard() {
  return (
    <div className="page">
      {/* NAVBAR */}
      <div className="navbar">
        <div className="logo">
          <img src="/logo.png" alt="logo" />
          <div className="logo_text">
            <h3>Next Horizon</h3>
            <span>Educational Community</span>
          </div>
        </div>

        <ul className="nav_links">
          <li className="active">Dashboard</li>
          <li>My courses</li>
          <li>Paid courses</li>
        </ul>

        <div className="nav_user">
          <FaUserCircle size={26} className="user_icon" />
        </div>
      </div>

      {/* CONTENT */}
      <div className="container">
        {/* WELCOME + FILTER (same line) */}
        <div className="welcome_row">
          <div className="welcome_line">
            <span className="welcome_bold">Welcome, Mohammad!</span>
            <span className="welcome_hint">
              {" "}
              select your branch to view courses below
            </span>
          </div>

          <div className="filter_section">
            <select defaultValue="all">
              <option value="all">Select branch</option>
              <option value="algebra">Algebra 1</option>
              <option value="analysis">Analysis 1</option>
              <option value="web">Website Development</option>
            </select>
          </div>
        </div>

        {/* COURSES */}
        <div className="courses">
          <Course title="Algebra 1" icon="/course.png" />
          <Course title="Analysis 1" icon="/course.png" />
          <Course title="Website development" icon="/course.png" />
        </div>

        {/* BOTTOM SECTIONS */}
        <div className="bottom_sections">
          <BottomCard
            title="Featured Paid courses"
            icon={<FaBook />}
            heading="Algorithm in C"
            desc="Enroll now to get started with C!"
            button="Register Now"
            buttonVariant="yellow"
          />

          <BottomCard
            title="Free live sessions"
            icon={<FaVideo />}
            heading="Solving algebra session"
            desc="Join now to cover all tips about algebra"
            badge="LIVE"
            badgeText="Live Algebra Sessions"
            button="Join session"
            buttonVariant="green"
          />

          <BottomCard
            title="Tutor requirements"
            icon={<FaChalkboardTeacher />}
            heading="Become a tutor"
            desc="Check the requirements to change your role and start tutoring other students."
            button="Apply to be tutor"
            buttonVariant="blueDark"
          />
        </div>
      </div>
    </div>
  );
}

function Course({ title, icon }) {
  return (
    <div className="course_card">
      <img src={icon} alt={title} className="course_icon" />
      <h3 className="course_title">{title}</h3>

      <div className="course_links">
        <button className="course_btn" type="button">
          <FaBook /> <span>Lectures</span>
        </button>
        <button className="course_btn" type="button">
          <FaClipboardList /> <span>Past exams</span>
        </button>
        <button className="course_btn" type="button">
          <FaFileAlt /> <span>Summaries</span>
        </button>
        <button className="course_btn" type="button">
          <FaTasks /> <span>Exercises</span>
        </button>
      </div>
    </div>
  );
}

function BottomCard({
  title,
  icon,
  heading,
  desc,
  badge,
  badgeText,
  button,
  buttonVariant,
}) {
  return (
    <div className="bottom_card">
      <div className="bottom_card_title">{title}</div>

      <div className="bottom_content">
        <div className="bottom_icon">{icon}</div>

        <div className="bottom_text">
          <div className="bottom_heading">{heading}</div>
          <div className="bottom_desc">{desc}</div>

          {badge && (
            <div className="bottom_badge_row">
              <span className="badge">{badge}</span>
              <span className="badge_text">{badgeText}</span>
            </div>
          )}
        </div>

        <div className="bottom_action">
          <button className={`bottom_btn ${buttonVariant}`} type="button">
            {button}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;