import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Learn from "./pages/Learn";
import Practice from "./pages/Practice";
import Assessment from "./pages/Assessment";
import Achievements from "./pages/Achievements";
import Profile from "./pages/Profile";
import SupabaseTest from "./components/SupabaseTest";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./lib/auth";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="/learn/:courseId/:lessonId" element={<Learn />} />
          <Route path="/practice/:courseId" element={<Practice />} />
          <Route path="/assessment/:courseId" element={<Assessment />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/test" element={<SupabaseTest />} />
          <Route 
            path="/protected" 
            element={
              <ProtectedRoute>
                <div className="text-center text-xl p-8">
                  受保护的页面 - 只有登录后才能访问
                </div>
              </ProtectedRoute>
            } 
          />
          <Route path="/other" element={<div className="text-center text-xl">Other Page - Coming Soon</div>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
