import React from "react";
import "./public.css"; // يمكن استخدام نفس CSS للصفحات المتشابهة
const About = () => {
  return (
    <div className="page">
      <section className="hero-page">
        <h1>عن الوكالة</h1>
        <p>تعرف على وكالة المؤشر ورؤيتنا وخبراتنا</p>
      </section>

      <section className="about-content">
        <p>
          وكالة المؤشر هي وكالة سفر رائدة تقدم أفضل الرحلات والوجهات حول العالم. 
          فريقنا المحترف يضمن لك تجربة سياحية مميزة وآمنة مع أفضل الأسعار.
        </p>
        <p>
          رؤيتنا هي جعل السفر متعة للجميع من خلال تقديم خدمات متميزة ومخصصة لكل مسافر.
        </p>
      </section>
    </div>
  );
};

export default About;
