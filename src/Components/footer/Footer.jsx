import "./footer.css";

export const Footer = () => {
  return (
    <div className="footer-container">
      <h2 className="footer-text headHover">
        Made with <i className="fa fa-code "></i> by Nikhil Malviya
      </h2>
      <div className="contact-logo">
        <a className="headHover logo" href="https://github.com/nikk422">
          <i className="fa fa-github"></i>
        </a>
        <a
          className="headHover logo"
          href="https://in.linkedin.com/in/nikhil-malviya-942607195"
        >
          <i className="fa fa-linkedin"></i>
        </a>
        <a
          className="headHover logo"
          href="https://twitter.com/NikhilM21013002"
        >
          <i className="fa fa-twitter"></i>
        </a>
      </div>
    </div>
  );
};
