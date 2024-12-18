import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Navigation = () => {
    return (
        <nav className="nav">
            <Link to="/" className="nav-link">首页</Link>
            <Link to="/about" className="nav-link">关于</Link>
            <Link to="/users" className="nav-link">用户</Link>
        </nav>
    );
};

export default Navigation; 