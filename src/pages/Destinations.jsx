import React from "react";
import "./public.css"; // يمكن استخدام نفس CSS للصفحات المتشابهة
const Destinations = () => {
  return (
    <div className="page">
      <section className="hero-page">
        <h1>الوجهات</h1>
        <p>اكتشف أفضل الوجهات السياحية حول العالم</p>
      </section>

      <section className="tours-grid-page">
        <div className="tour-card">
          <img src="/src/images/11.jpg" alt="Paris" />
          <h3>باريس</h3>
          <p>مدينة الحب والفن، تجربة لا تُنسى.</p>
        </div>
        <div className="tour-card">
          <img src="/src/images/22.jpg" alt="Tokyo" />
          <h3>طوكيو</h3>
          <p>تجربة حضرية مميزة مع مزيج من التقاليد والحداثة.</p>
        </div>
        <div className="tour-card">
          <img src="/src/images/33.jpg" alt="Dubai" />
          <h3>دبي</h3>
          <p>مدينة المستقبل والتجارب الفاخرة.</p>
        </div>
      </section>
    </div>
  );
};

export default Destinations;
