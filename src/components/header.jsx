// src/components/Header/Header.jsx
import React, { useState, useEffect, memo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiLogOut } from "react-icons/fi";
import './Header.css';

const Header = () => {
  const [user, setUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // التحقق من وجود مستخدم مسجل دخول
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">وكالة المؤشر للسفر و السياحية</Link>
        </div>

        <nav className="nav">
          <Link to="/" className={location.pathname === '/' ? 'nav-active' : ''}>
            الرئيسية
          </Link>
          <Link to="/tours" onClick={() => console.log('تم الضغط')}>
            الرحلات
          </Link>

          <Link to="/destinations" className={location.pathname === '/destinations' ? 'nav-active' : ''}>
            الوجهات
          </Link>
          <Link to="/about" className={location.pathname === '/about' ? 'nav-active' : ''}>
            عن الوكالة
          </Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'nav-active' : ''}>
            اتصل بنا
          </Link>
        </nav>

        <div className="auth-buttons">
          {user ? (
            <div className="user-menu">
              <span className="user-name">مرحباً، {user.name}</span>

              <button onClick={handleLogout} className="logout-btn">
                <FiLogOut style={{ marginLeft: "8px" }} />
                تسجيل الخروج
              </button>
            </div>
          ) : (
            <>
              <Link to="/Auth/Login" className="login-btn">
                تسجيل الدخول
              </Link>
              <Link to="/Auth/Register" className="register-btn">
                إنشاء حساب
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
