function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Smriddhi Gupta. All rights reserved.</p>
      <p className="footer-links">
        <a href="mailto:smriddhigupta28@gmail.com">smriddhigupta28@gmail.com</a>
        {' · '}
        <a href="tel:+4917663139220">+49 176 63139220</a>
      </p>
    </footer>
  );
}

export default Footer;