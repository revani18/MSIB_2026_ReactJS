import { Link, NavLink } from "react-router";

export default function Header() {
  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div className="col-md-3 mb-2 mb-md-0">
        <a
          href="/"
          className="d-inline-flex align-items-center link-body-emphasis text-decoration-none"
        >
          <i
            className="fa-solid fa-book fa-2xl"
            style={{ color: "#309ff7ff" }}
          ></i>
          <span className="ms-2 fs-4">BookStore</span>
        </a>
      </div>
      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 custom-nav">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-link custom-nav-link ${isActive ? "active" : ""}`
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/books"
            className={({ isActive }) =>
              `nav-link custom-nav-link ${isActive ? "active" : ""}`
            }
          >
            Book
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/team"
            className={({ isActive }) =>
              `nav-link custom-nav-link ${isActive ? "active" : ""}`
            }
          >
            Team
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `nav-link custom-nav-link ${isActive ? "active" : ""}`
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="col-md-3 text-end">
        <Link to="/auth/login">
          <button type="button" className="btn btn-outline-primary me-2">
            Login
          </button>
        </Link>
        <Link to="/auth/register">
          <button type="button" className="btn btn-primary">
            Register
          </button>
        </Link>
      </div>
    </header>
  );
}
