// src/pages/Auth/Login.jsx
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Auth.css'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    
    // مسح الخطأ عند التعديل
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      })
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.email.trim()) {
      newErrors.email = 'البريد الإلكتروني مطلوب'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'البريد الإلكتروني غير صالح'
    }
    
    if (!formData.password) {
      newErrors.password = 'كلمة المرور مطلوبة'
    } else if (formData.password.length < 6) {
      newErrors.password = 'كلمة المرور يجب أن تكون 6 أحرف على الأقل'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setLoading(true)
    
    try {
      // محاكاة عملية تسجيل الدخول
      console.log('Login data:', formData)
      
      // هنا سيتم الاتصال بالـ API الحقيقي
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // تخزين بيانات المستخدم (في التطبيق الحقيقي سيكون token)
      localStorage.setItem('user', JSON.stringify({
        name: 'المستخدم',
        email: formData.email
      }))
      
      // توجيه المستخدم للصفحة الرئيسية
      navigate('/')
      
    } catch (error) {
      console.error('Login error:', error)
      setErrors({ submit: 'حدث خطأ أثناء تسجيل الدخول. يرجى المحاولة مرة أخرى.' })
    } finally {
      setLoading(false)
    }
  }

  const handleDemoLogin = (type) => {
    const demoAccounts = {
     user: { email: 'haroon@demo.com', password: '123456' },
    admin: { email: 'haroonmohammed@demo.com', password: '123456' }
    }
    
    setFormData(demoAccounts[type])
  }

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <h1>تسجيل الدخول</h1>
            <p>مرحباً بعودتك! يرجى إدخال بياناتك</p>
          </div>

          {/* أزرار الديمو السريعة */}
          <div className="demo-buttons">
            <button 
              type="button"
              onClick={() => handleDemoLogin('user')}
              className="demo-btn user-demo"
            >
              تجربة كمستخدم
            </button>
            <button 
              type="button"
              onClick={() => handleDemoLogin('admin')}
              className="demo-btn admin-demo"
            >
              تجربة كمسؤول
            </button>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`form-control ${errors.email ? 'error' : ''}`}
                placeholder="example@email.com"
                disabled={loading}
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                كلمة المرور
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className={`form-control ${errors.password ? 'error' : ''}`}
                placeholder="أدخل كلمة المرور"
                disabled={loading}
              />
              {errors.password && <span className="error-text">{errors.password}</span>}
            </div>

            <div className="form-options">
              <label className="checkbox-label">
                <input type="checkbox" />
                <span className="checkmark"></span>
                تذكرني
              </label>
              <Link to="/forgot-password" className="forgot-password">
                نسيت كلمة المرور؟
              </Link>
            </div>

            {errors.submit && (
              <div className="error-message">
                {errors.submit}
              </div>
            )}

            <button 
              type="submit" 
              className="auth-button"
              disabled={loading}
            >
              {loading ? (
                <>
                  <div className="button-spinner"></div>
                  جاري تسجيل الدخول...
                </>
              ) : (
                'تسجيل الدخول'
              )}
            </button>
          </form>

          <div className="auth-footer">
            <p>
              ليس لديك حساب؟{' '}
              <Link to="/Auth/Register" className="auth-link">
                إنشاء حساب جديد
              </Link>
            </p>
          </div>

          <div className="social-login">
            <div className="divider">
              <span>أو تسجيل الدخول باستخدام</span>
            </div>
            
            <div className="social-buttons">
              <button type="button" className="social-btn google-btn">
                <svg className="social-icon" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Google
              </button>
              
              <button type="button" className="social-btn twitter-btn">
                <svg className="social-icon" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.055 10.055 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.543l-.047-.02z" fill="#1DA1F2"/>
                </svg>
                Twitter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login