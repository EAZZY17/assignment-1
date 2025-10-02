function About() {
  return (
    <div className="about">
      <h1>About Me</h1>

      {/* Profile picture — put your real image as client/public/profile.jpg */}
      <img
        src="/profile.jpg"
        alt="Your Name"
        style={{ width: "160px", borderRadius: "8px", marginBottom: "1rem" }}
      />

      {/* Legal name */}
      <p><strong>Hello My Name Is Edwin Makolo</strong></p>

      {/* Short bio */}
      <p>I am in my second year of College at Centennial College. I'm currently studying Software Engineering Technology - AI.SI enjoy building websites and apps.</p>
      <p>In my free time, I like to play video games, watch movies, and learn new programming languages.</p>
      {/* Resume link — place your PDF as client/public/resume.pdf */}
      <p>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          Download My Resume (PDF)
        </a>
      </p>
    </div>
  );
}
export default About;