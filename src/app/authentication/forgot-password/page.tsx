import Image from "next/image";
import Link from "next/link";

export default function WithoutNavbar() {
  return (
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
            {/* <span className="app-brand-text demo text-body fw-bolder">Sneat</span> */}
          </a>
        </div>
        {/* <!-- /Logo --> */}
        <h4 className="mb-2">Forgot Password? 🔒</h4>
        <p className="mb-4">
          Enter your email and we'll send you instructions to reset your
          password
        </p>
        <form
          id="formAuthentication"
          className="mb-3"
          action=""
          method="POST"
        >
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <button className="btn btn-primary d-grid w-100">
            Send Reset Link
          </button>
        </form>
        <div className="text-center">
          <Link
            href="/authentication/login"
            className="d-flex align-items-center justify-content-center"
          >
            <i className="bx bx-chevron-left scaleX-n1-rtl bx-sm"></i>
            Back to login
          </Link>
        </div>
      </div>
    </div>
  );
}
