import Image from "next/image";

export default function Login() {
  return (
    <>
      {/* <!-- Register --> */}
      <div className="card">
        <div className="card-body">
          {/* <!-- Logo --> */}
          <div className="app-brand justify-content-center">
            <a href="index.html" className="app-brand-link gap-2">
              <span className="app-brand-logo demo">
                <Image
                  src="https://cdn.shriramfinance.in/sfl-fe/assets/images/sw-logo.svg"
                  width={165}
                  height={52}
                  alt="Brand Logo"
                  priority={true}
                />
              </span>
              {/* <span className="app-brand-text demo text-body fw-bolder">
                Sneat
              </span> */}
            </a>
          </div>
          {/* <!-- /Logo --> */}
          <h4 className="mb-2">Welcome to Sanchith! 👋</h4>
          <p className="mb-4">Please sign-in to your account</p>

          <form
            id="formAuthentication"
            className="mb-3"
            action=""
            method="POST"
          >
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email or Username
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email-username"
                placeholder="Enter your email or username"
              />
            </div>
            <div className="mb-3 form-password-toggle">
              <div className="d-flex justify-content-between">
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <a href="auth-forgot-password-basic.html">
                  <small>Forgot Password?</small>
                </a>
              </div>
              <div className="input-group input-group-merge">
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  name="password"
                  placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                  aria-describedby="password"
                />
                <span className="input-group-text cursor-pointer">
                  <i className="bx bx-hide"></i>
                </span>
              </div>
            </div>
            <div className="mb-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="remember-me"
                />
                <label className="form-check-label" htmlFor="remember-me">
                  {" "}
                  Remember Me{" "}
                </label>
              </div>
            </div>
            <div className="mb-3">
              <button className="btn btn-primary d-grid w-100" type="submit">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <!-- /Register --> */}
    </>
  );
}
