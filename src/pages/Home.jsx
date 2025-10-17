import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* ===== Hero Section ===== */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>مرحباً بكم في وكالة المؤشر</h1>
          <p>أفضل الرحلات والوجهات المميزة حول العالم</p>
          <a href="/tours" className="btn-primary">استعرض الرحلات</a>
        </div>
      </section>

      {/* ===== Features Section ===== */}
      <section className="features" id="features">
        <h2>لماذا تختارنا؟</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>رحلات مميزة</h3>
            <p>نقدم أفضل الرحلات المختارة بعناية لتجربة فريدة.</p>
          </div>
          <div className="feature-card">
            <h3>دعم 24/7</h3>
            <p>خدمة العملاء جاهزة لمساعدتك في أي وقت.</p>
          </div>
          <div className="feature-card">
            <h3>أفضل الأسعار</h3>
            <p>عروض مميزة بأسعار تنافسية لجميع الوجهات.</p>
          </div>
        </div>
      </section>

      {/* ===== Tours Section ===== */}
      <section className="tours" id="tours">
        <h2>أفضل الرحلات</h2>
        <div className="tours-grid">
          <div className="tour-card">
            <img src="/src/images/444.jpg" alt="Beach Tour" />
            <h3>شاطئ البحر الأحمر</h3>
            <p>استمتع بأجمل الأوقات على رمال البحر الأحمر الذهبية.</p>
          </div>
          <div className="tour-card">
            <img src="/src/images/gg.jpg" alt="Mountain Tour" />
            <h3>جبال الأطلس</h3>
            <p>رحلة ممتعة وسط الطبيعة الخلابة والجبال الشاهقة.</p>
          </div>
          <div className="tour-card">
            <img src="/src/images/R.jpg" alt="City Tour" />
            <h3>جولات المدن</h3>
            <p>استكشف أبرز المعالم السياحية والمدن العالمية.</p>
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="footer" id="contact">
        <div className="footer-content">
          <h3>وكالة المؤشر</h3>
          <p>© 2025 جميع الحقوق محفوظة</p>
          <div className="footer-links">
            <a href="/">الرئيسية</a>
            <a href="/tours">الرحلات</a>
            <a href="/destinations">الوجهات</a>
            <a href="/about">عن الوكالة</a>
            <a href="/contact">اتصل بنا</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
