export default function Footer() {
    const fullYear = new Date().getFullYear();
  return (
    <footer className="content-footer footer bg-footer-theme">
      <div className="container-fluid d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
        <div className="mb-2 mb-md-0">
          ©{fullYear}, made with
          ❤️ by
          <a
            href="https://themeselection.com"
            target="_blank"
            className="footer-link fw-bolder"
          >
            ThemeSelection
          </a>
        </div>
      </div>
    </footer>
  );
}
