import './App.css';
// import data from '../data';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/home/homePage';
import Task from './components/pages/task/Task';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/task" element={<Task />} />
            </Routes>
        </BrowserRouter>
    );
}
