import React, { useState } from "react";

function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Web Development",
      img: "https://via.placeholder.com/400x250?text=Web+Development",
      desc: "Building responsive, accessible web apps with React.",
      fullDesc: "I specialize in creating modern, responsive web applications using cutting-edge technologies like React, JavaScript, and CSS. My development process includes user experience design, performance optimization, cross-browser compatibility testing, and mobile-first responsive design. I ensure your website looks great and functions perfectly on all devices, from smartphones to desktop computers. Additionally, I implement SEO best practices and accessibility standards to make your site reach the widest possible audience."
    },
    {
      id: 2,
      title: "Responsive Design",
      img: "https://via.placeholder.com/400x250?text=Responsive+Design",
      desc: "Designing layouts that work on all devices.",
      fullDesc: "Creating beautiful, functional designs that adapt seamlessly to any screen size is my specialty. I use advanced CSS techniques including Flexbox, CSS Grid, and media queries to ensure your website provides an optimal viewing experience across all devices. My responsive designs prioritize user experience, fast loading times, and intuitive navigation. I also focus on touch-friendly interfaces for mobile users and ensure that all interactive elements are easily accessible regardless of the device being used."
    },
    {
      id: 3,
      title: "JavaScript Tutoring",
      img: "https://via.placeholder.com/400x250?text=JavaScript+Tutoring",
      desc: "Helping beginners learn JS fundamentals.",
      fullDesc: "I offer personalized JavaScript tutoring sessions for beginners and intermediate developers looking to strengthen their programming skills. My teaching approach covers fundamental concepts like variables, functions, arrays, objects, and DOM manipulation, as well as modern ES6+ features, asynchronous programming, and popular frameworks like React. I provide hands-on coding exercises, real-world project examples, and personalized feedback to help you build confidence and proficiency in JavaScript programming."
    }
  ];

  const openModal = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="services-container">
      <div className="section-header">
        <h1>My Services</h1>
        <p className="section-subtitle">What I can offer to help you succeed</p>
      </div>
      <div className="project-grid">
        {services.map(s => (
          <article className="project-card" key={s.id}>
            <div className="project-image-container">
              <img src={s.img} alt={s.title} />
            </div>
            <div className="project-content">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <button className="project-btn" onClick={() => openModal(s)}>
                Learn More
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{selectedService.title}</h2>
              <button className="modal-close" onClick={closeModal}>×</button>
            </div>
            <div className="modal-body">
              <img src={selectedService.img} alt={selectedService.title} className="modal-image" />
              <p>{selectedService.fullDesc}</p>
            </div>
            <div className="modal-footer">
              <button className="modal-btn primary" onClick={closeModal}>Get Started</button>
              <button className="modal-btn secondary" onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Services;