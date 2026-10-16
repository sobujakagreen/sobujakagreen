import React from 'react';

const education = [
  {
    title: 'BSS Honours in Economics',
    institution: 'Nilphamari Government College, Nilphamari',
    detail: 'Graduation · 2023',
    result: 'Result: 3.50',
    icon: 'EC',
  },
  {
    title: 'Kamil',
    institution: 'Dakksin Sonakhuli Munshipara Kamil Madrasha',
    detail: 'Completed · 2021',
    icon: 'KA',
  },
  {
    title: 'Fazil, Alim & Dakhil',
    institution: 'Dakksin Sonakhuli Munshipara Kamil Madrasha',
    detail: 'Islamic education',
    icon: 'IS',
  },
];

const services = [
  { icon: '▤', title: 'Online Applications', text: 'Online job applications, form submission, and digital assistance.' },
  { icon: '▧', title: 'Document Services', text: 'Document formatting, photocopying, lamination, and printing support.' },
  { icon: '▣', title: 'Photo & Design', text: 'Passport-size photos and basic image editing using Adobe Photoshop.' },
  { icon: '✎', title: 'Question Paper Preparation', text: 'Preparing question papers and educational materials for organizations.' },
];

const skills = [
  'Teaching & student guidance',
  'Microsoft Word',
  'Microsoft PowerPoint',
  'Adobe Photoshop',
  'Online job applications',
  'Document formatting',
  'Question paper preparation',
  'Customer service',
  'Small-business management',
  'Basic computer operations',
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function App() {
  const handlePrint = () => window.print();

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Go to homepage">
          <span className="brand-mark">AS</span>
          <span>Ariful Islam Sobuj<span className="brand-dot">.</span></span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact" className="nav-contact">Contact <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section-wrap">
          <div className="hero-copy">
            <div className="availability"><span className="availability-dot" /> TEACHER · ECONOMICS GRADUATE</div>
            <p className="hero-kicker">Hello, I’m</p>
            <h1>Md. Ariful<br /><span>Islam Sobuj</span></h1>
            <p className="hero-description">
              An educator and versatile professional passionate about helping students learn, making technology useful, and providing reliable community services.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">Get in touch <span aria-hidden="true">↗</span></a>
              <button className="button button-quiet" onClick={handlePrint} type="button"><span aria-hidden="true">↓</span> Print / Save as PDF</button>
            </div>
            <div className="hero-facts">
              <div><strong>BSS Honours</strong><span>Economics</span></div>
              <div><strong>Teacher</strong><span>School & coaching</span></div>
              <div><strong>Digital Services</strong><span>Small business owner</span></div>
            </div>
          </div>
          <div className="hero-art" aria-label="Abstract profile illustration">
            <div className="art-ring ring-one" />
            <div className="art-ring ring-two" />
            <div className="art-card card-top"><span className="mini-icon">✦</span><div><strong>Learn</strong><small>Every day</small></div></div>
            <div className="profile-placeholder">
              <div className="avatar-head" />
              <div className="avatar-body" />
              <span className="avatar-initials">AS</span>
            </div>
            <div className="art-card card-bottom"><span className="mini-icon">✓</span><div><strong>Reliable</strong><small>Service & support</small></div></div>
            <span className="art-spark spark-one">✳</span>
            <span className="art-spark spark-two">✦</span>
          </div>
        </section>

        <section id="about" className="about-section section-wrap section-pad">
          <SectionHeading eyebrow="A LITTLE ABOUT ME" title="Education with purpose. Service with care." />
          <div className="about-grid">
            <div className="about-text">
              <p className="lead-text">I’m a teacher, an Economics graduate, and a community-focused entrepreneur based in Saidpur, Nilphamari.</p>
              <p>My background brings together Islamic education, university-level studies in Economics, classroom and private coaching, and hands-on computer-based services. I enjoy making complex lessons easier to understand and helping people complete everyday digital and document-related tasks.</p>
              <p>I value honesty, patience, organization, and continuous learning in both my work and personal development.</p>
            </div>
            <div className="personal-card">
              <div className="personal-card-header"><span className="personal-icon">⌂</span><div><h3>Personal details</h3><p>Based in Bangladesh</p></div></div>
              <dl>
                <div><dt>Full name</dt><dd>Md. Ariful Islam Sobuj</dd></div>
                <div><dt>Date of birth</dt><dd>1998</dd></div>
                <div><dt>Father</dt><dd>Jamil Hossain</dd></div>
                <div><dt>Mother</dt><dd>Rubi Begum</dd></div>
                <div><dt>Address</dt><dd>Poschim Belpukur Bashtolipara, Saidpur, Nilphamari, Bangladesh</dd></div>
              </dl>
            </div>
          </div>
        </section>

        <section id="education" className="section-wrap section-pad soft-section">
          <SectionHeading eyebrow="ACADEMIC BACKGROUND" title="Education & qualifications" description="A foundation built through Islamic education and studies in Economics." />
          <div className="education-grid">
            {education.map((item) => (
              <article className="education-card" key={item.title}>
                <div className="education-icon">{item.icon}</div>
                <div className="education-content">
                  <span className="card-overline">QUALIFICATION</span>
                  <h3>{item.title}</h3>
                  <p>{item.institution}</p>
                  <div className="education-meta"><span>{item.detail}</span>{item.result && <strong>{item.result}</strong>}</div>
                </div>
              </article>
            ))}
          </div>
          <div className="training-strip">
            <div className="training-symbol">✧</div>
            <div><span className="card-overline">ADDITIONAL TRAINING</span><h3>Basic Computer Course · 2024</h3><p>Also completed a paramedical course. Specific course and institution details were not provided.</p></div>
          </div>
        </section>

        <section id="experience" className="section-wrap section-pad">
          <SectionHeading eyebrow="WHAT I DO" title="Experience & services" description="A mix of education, digital skills, and day-to-day business experience." />
          <div className="experience-layout">
            <div className="timeline">
              <article className="timeline-item">
                <span className="timeline-point" />
                <div className="timeline-head"><div><h3>Teacher</h3><p className="timeline-company">Dakksin Sonakhuli Munshipara Kamil Madrasha</p></div><span className="timeline-tag">10 years’ experience</span></div>
                <p>With 10 years of teaching experience, teach and guide students, support academic development, prepare learning materials, and help with examination questions and a positive learning environment.</p>
              </article>
              <article className="timeline-item">
                <span className="timeline-point" />
                <div className="timeline-head"><div><h3>Private Tutor & Coaching Instructor</h3><p className="timeline-company">Private tuition · Classes 1–10</p></div><span className="timeline-tag">Teaching</span></div>
                <p>Provide lesson support, homework guidance, revision, practice questions, and exam preparation based on students’ learning needs.</p>
              </article>
              <article className="timeline-item">
                <span className="timeline-point" />
                <div className="timeline-head"><div><h3>Shop Owner & Computer Service Operator</h3><p className="timeline-company">Self-employed · Market-based business</p></div><span className="timeline-tag">Business</span></div>
                <p>Manage daily shop operations, help customers with online applications and digital forms, prepare documents and question papers, and provide photo and copy services.</p>
              </article>
            </div>
            <aside className="service-panel">
              <span className="eyebrow">PRACTICAL SERVICES</span>
              <h3>Helping people get things done.</h3>
              <div className="service-list">
                {services.map((service) => <div className="service-item" key={service.title}><span className="service-icon">{service.icon}</span><div><h4>{service.title}</h4><p>{service.text}</p></div></div>)}
              </div>
            </aside>
          </div>
        </section>

        <section id="skills" className="skills-section section-wrap section-pad">
          <SectionHeading eyebrow="TOOLS & STRENGTHS" title="Skills that I bring" description="Practical skills developed through teaching, training, and running a service business." />
          <div className="skills-grid">
            {skills.map((skill, index) => <div className="skill-pill" key={skill}><span>{String(index + 1).padStart(2, '0')}</span>{skill}</div>)}
          </div>
          <div className="language-row"><div><span className="language-icon">文</span><div><strong>Language</strong><span>Bengali — Native</span></div></div><div className="language-level"><strong>English</strong><span>Intermediate proficiency</span></div></div>
        </section>

        <section id="contact" className="contact-section section-wrap section-pad">
          <div className="contact-card">
            <div className="contact-copy"><span className="eyebrow">LET’S CONNECT</span><h2>Have an opportunity<br />or a question?</h2><p>Feel free to contact me about teaching, computer services, or professional opportunities.</p></div>
            <div className="contact-details">
              <a href="tel:01804267428" className="contact-method"><span className="contact-method-icon">☎</span><span><small>Phone</small><strong>01804267428</strong></span><b>↗</b></a>
              <a href="mailto:sobujarifulislammd@gmail.com" className="contact-method"><span className="contact-method-icon">✉</span><span><small>Email</small><strong>sobujarifulislammd@gmail.com</strong></span><b>↗</b></a>
              <div className="contact-method location-method"><span className="contact-method-icon">⌖</span><span><small>Location</small><strong>Saidpur, Nilphamari, Bangladesh</strong></span></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap"><a className="brand footer-brand" href="#home"><span className="brand-mark">AS</span><span>Ariful Islam Sobuj<span className="brand-dot">.</span></span></a><span>Designed as a personal portfolio · © {new Date().getFullYear()} Md. Ariful Islam Sobuj</span><a href="#home" className="back-top">Back to top ↑</a></footer>
    </div>
  );
}

export default App;
