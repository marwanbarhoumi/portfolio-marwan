function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        <p className="mb-2">© {new Date().getFullYear()} Marwan Barhoumi. Tous droits réservés.</p>
        <div>
          <a href="https://github.com/marwen77" className="text-light me-3" target="_blank" rel="noreferrer">
            <i className="bi bi-github fs-4"></i>
          </a>
          <a href="https://www.linkedin.com/in/marwan-barhoumi-385a151a1/" className="text-light me-3" target="_blank" rel="noreferrer">
            <i className="bi bi-linkedin fs-4"></i>
          </a>
          <a href="marwanbarhou77@gmail.com" className="text-light">
            <i className="bi bi-envelope fs-4"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
