import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { render } from 'react-dom';
import axios from 'axios';
import Navbar from './components/navbar/Navbar';
import Lesson from './views/lessons/Lesson';
import Activities from './views/activities/Activities';
import Home from './views/home/Home';
import Login from './views/login/Login';
import { ProtectedRoutes } from './ProtectedRoutes';
import TaskDetail from './views/activities/TaskDetail';

function App() {
  axios.interceptors.request.use(
    config => {
      config.headers['Content-Type'] = 'application/json';
      return config;
    },
    error => {
      Promise.reject(error);
    }
  );
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="activities" element={<Activities />} />
          <Route path="activities/:id" element={<TaskDetail />} />
          <Route path="lesson" element={<Lesson />} />
        </Route>
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
