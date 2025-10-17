import React from "react";
import "./public.css"; // يمكن استخدام نفس CSS للصفحات المتشابهة

const Tours = () => {
  return (
    <div className="page">
      <section className="hero-page">
        <h1>الرحلات</h1>
        <p>استكشف أفضل الرحلات التي نقدمها لك</p>
      </section>

      <section className="tours-grid-page">
        <div className="tour-card">
          <img src="/src/images/mo.jpg" alt="Beach Tour" />
          <h3>شاطئ البحر الأحمر</h3>
          <p>أفضل تجربة على الرمال الذهبية والمياه الصافية.</p>
        </div>
        <div className="tour-card">
          <img src="/src/images/tor.jpg" alt="Mountain Tour" />
          <h3>جبال الأطلس</h3>
          <p>رحلة ممتعة وسط الطبيعة الخلابة والجبال الشاهقة.</p>
        </div>
        <div className="tour-card">
          <img src="/src/images/R.jpg" alt="City Tour" />
          <h3>جولات المدن</h3>
          <p>استكشف أبرز المعالم السياحية والمدن العالمية.</p>
        </div>
      </section>
    </div>
  );
};

export default Tours;
