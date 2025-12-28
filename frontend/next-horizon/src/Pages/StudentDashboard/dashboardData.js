import { FaFilm, FaFileAlt, FaClipboardList, FaTasks } from "react-icons/fa";

export const DASHBOARD_DATA = {
  user: {
    name: "Alex",
    courseName: "Analysis - 2nd Year Engineering",
    progress: 37,
  },
  tabs: [
    { id: "lectures", label: "Lectures", icon: <FaFilm /> },
    { id: "past-exams", label: "Past Exams", icon: <FaFileAlt /> },
    { id: "summaries", label: "Summaries", icon: <FaClipboardList /> },
    { id: "exercises", label: "Exercises", icon: <FaTasks /> },
  ],
  lectures: [
    {
      id: 1,
      title: "Introduction to Analysis",
      image: "https://images.pexels.com/photos/256369/pexels-photo-256369.jpeg?auto=compress&w=300&h=150&fit=crop",
    },
    {
      id: 2,
      title: "Limits and Continuity",
      image: "https://images.pexels.com/photos/256401/pexels-photo-256401.jpeg?auto=compress&w=300&h=150&fit=crop",
    },
    {
      id: 3,
      title: "Differentiation Techniques",
      image: "https://images.pexels.com/photos/207569/pexels-photo-207569.jpeg?auto=compress&w=300&h=150&fit=crop",
    },
    {
      id: 4,
      title: "Applications of Derivatives",
      image: "https://images.pexels.com/photos/256431/pexels-photo-256431.jpeg?auto=compress&w=300&h=150&fit=crop",
    },
    {
      id: 5,
      title: "Integration Basics",
      image: "https://images.pexels.com/photos/3778611/pexels-photo-3778611.jpeg?auto=compress&w=300&h=150&fit=crop",
    },
    {
      id: 6,
      title: "Definite Integrals",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&w=300&h=150&fit=crop",
    },
    {
        id: 7,
        title: "Applications of Integrals",
        image: "https://images.pexels.com/photos/256369/pexels-photo-256369.jpeg?auto=compress&w=300&h=150&fit=crop",
    },
    {
        id: 8,
        title: "Improper Integrals",
        image: "https://images.pexels.com/photos/256401/pexels-photo-256401.jpeg?auto=compress&w=300&h=150&fit=crop",
    },
  ],
  recentActivity: [
    { id: 1, item: "Improper Integrals", action: "Watched today" },
    { id: 2, item: "Midterm Exam 2", action: "Watched 2 days ago" },
    { id: 3, item: "Midterm Exam 3", action: "Watched last week" },
  ],
  pastExams: [
    "Practice Exam",
    "Midterm Exam 1",
    "Midterm Exam 2",
  ],
  summaries: [
    "Limits and Continuity",
    "Derivatives and Differentiation",
    "Integration and Applications",
  ]
};
