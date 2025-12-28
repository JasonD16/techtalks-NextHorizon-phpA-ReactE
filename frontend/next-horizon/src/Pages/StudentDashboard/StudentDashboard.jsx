import React, { useState } from "react";
import { Layout, Row, Col, Progress, Card, Button } from "antd";
import { Link } from "react-router-dom";
import {
  FaPlayCircle,
  FaLightbulb,
  FaHistory,
  FaFileSignature,
  FaDownload,
  FaList,
  FaWindowRestore,
  FaFileAlt,
  FaClipboardList
} from "react-icons/fa";
import { DASHBOARD_DATA } from "./dashboardData";
import "./StudentDashboard.css";

const { Header } = Layout;

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // --- RENDER FUNCTIONS ---

  const renderOverview = () => (
    <Row gutter={[24, 24]}>
      {/* Progress & Stats */}
      <Col xs={24} md={12} lg={8}>
        <Card className="sidebar-card h-full">
          <h3 className="sidebar-title">Course Progress</h3>
          <div className="progress-container">
            <Progress type="circle" percent={DASHBOARD_DATA.user.progress} strokeColor="#2459B2" size={80} />
            <div className="progress-info">
              <div className="progress-bar-bg">
                <div className="progress-bar-fill" style={{ width: `${DASHBOARD_DATA.user.progress}%` }}></div>
              </div>
              <p>{DASHBOARD_DATA.user.progress}% Completed</p>
              <a href="#learn" className="learn-more"><FaLightbulb /> Learn More!</a>
            </div>
          </div>
        </Card>
      </Col>

      {/* Recent Activity */}
      <Col xs={24} md={12} lg={8}>
        <Card className="sidebar-card h-full">
          <h3 className="sidebar-title"><FaHistory /> Recent Activity</h3>
          <ul className="activity-list">
            {DASHBOARD_DATA.recentActivity.map(act => (
              <li key={act.id}>
                <strong>{act.item}</strong> - {act.action}
              </li>
            ))}
          </ul>
        </Card>
      </Col>

      {/* Exam Tip */}
      <Col xs={24} md={12} lg={8}>
        <Card className="sidebar-card exam-tip-card h-full">
          <span className="tip-icon"><FaLightbulb /></span>
          <div>
            <h3 className="sidebar-title">Top Exam Tip</h3>
            <p>Practice under timed conditions to get used to the exam pressure.</p>
          </div>
        </Card>
      </Col>

      {/* Review Sheets */}
      <Col xs={24} md={12} lg={8}>
        <Card className="sidebar-card h-full">
          <h3 className="sidebar-title"><FaFileSignature /> Quick Review Sheets</h3>
          <p className="card-desc">Download quick review sheets for core formulas and concepts.</p>
          <Button type="primary" block icon={<FaDownload />}>Download</Button>
        </Card>
      </Col>
    </Row>
  );

  const renderLectures = () => (
    <section className="content-section">
      <div className="section-header">
        <h2><FaPlayCircle /> Lectures</h2>
        <span>{DASHBOARD_DATA.lectures.length} video lessons</span>
      </div>
      <Row gutter={[16, 16]} className="dashboard-grid">
        {DASHBOARD_DATA.lectures.map((lecture) => (
          <Col xs={24} sm={12} lg={8} key={lecture.id}>
            <div className="lecture-card">
              <img src={lecture.image} alt={lecture.title} className="lecture-image" />
              <div className="lecture-content">
                <h3 className="lecture-title">{lecture.title}</h3>
                <button className="watch-btn">
                  <FaPlayCircle /> <span>Watch Now</span>
                </button>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );

  const renderPastExams = () => (
    <section className="resource-section">
      <div className="section-header-small">
        <h3 className="text-primary"><FaFileAlt /> Past Exams</h3>
        <span className="badge">{DASHBOARD_DATA.pastExams.length} Exams</span>
      </div>
      <ul className="resource-list">
        {DASHBOARD_DATA.pastExams.map((exam, idx) => (
          <li key={idx}>
            <span>{exam}</span>
            <button className="download-btn-small">Download</button>
          </li>
        ))}
      </ul>
      <Button type="primary" block className="view-all-btn"><FaList /> View All Exams</Button>
    </section>
  );

  const renderSummaries = () => (
    <section className="resource-section">
      <div className="section-header-small">
        <h3 className="text-primary"><FaClipboardList /> Summaries</h3>
      </div>
      <ul className="resource-list">
        {DASHBOARD_DATA.summaries.map((summary, idx) => (
          <li key={idx}>
            <span>{summary}</span>
            <button className="download-btn-small">Download</button>
          </li>
        ))}
      </ul>
      <Button type="primary" block className="view-all-btn"><FaList /> View All Summaries</Button>
    </section>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return renderOverview();
      case 'lectures': return renderLectures();
      case 'past-exams': return renderPastExams();
      case 'summaries': return renderSummaries();
      case 'exercises': return <div style={{ padding: 24, textAlign: 'center', color: '#888' }}><h3>Exercises Coming Soon</h3></div>;
      default: return <div>Content for {activeTab}</div>;
    }
  };

  return (
    <div className="dashboard-container">
      {/* App-like Browser Bar */}
      <div className="browser-bar">
        <div className="browser-mode">
          <FaWindowRestore />
          <span>App Mode</span>
        </div>
      </div>

      {/* Main Header */}
      <Header className="dashboard-header">
        <div className="header-content">
          <div>
            <h1 className="header-title">
              Analysis - <span>2<sup>nd</sup> Year Engineering</span>
            </h1>
            <p className="header-subtitle">
              Welcome back, <strong>{DASHBOARD_DATA.user.name}</strong>! Here are your <span className="underline">Analysis</span> course resources.
            </p>
          </div>
          <Link to="/" className="back-btn">
            Back to Dashboard
          </Link>
        </div>
      </Header>

      {/* Navigation Tabs */}
      <div className="tabs-container">
        {DASHBOARD_DATA.tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="main-layout-wrapper">
        {/* Full Width Content Area because tabs handle switching */}
        {renderContent()}
      </div>
    </div>
  );
};

export default StudentDashboard;
