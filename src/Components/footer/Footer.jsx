import "./footer.css";

export const Footer = () => {
  return (
      <div className="footer-container">
        <h2 className="footer-text headHover">
          Made with <i className="fa fa-code "></i> by Nikhil Malviya
        </h2>
        <div className="contact-logo">
          <a className="fa fa-github headHover logo" href="https://github.com/nikk422"></a>
          <a
            className="fa fa-linkedin headHover logo"
            href="https://in.linkedin.com/in/nikhil-malviya-942607195"
          ></a>
          <a
            className="fa fa-twitter headHover logo"
            href="https://twitter.com/NikhilM21013002"
          ></a>
        </div> 
                 
      </div>
  )
};
