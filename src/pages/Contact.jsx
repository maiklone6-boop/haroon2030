import React from "react";
import "./public.css"; // يمكن استخدام نفس CSS للصفحات المتشابهة
const Contact = () => {
  return (
    <div className="page">
      <section className="hero-page">
        <h1>اتصل بنا</h1>
        <p>تواصل معنا لأي استفسارات أو حجوزات</p>
      </section>

      <section className="contact-form">
        <form>
          <input type="text" placeholder="الاسم" required />
          <input type="email" placeholder="البريد الإلكتروني" required />
          <textarea placeholder="رسالتك" rows="5" required></textarea>
          <button type="submit">إرسال</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
