import Link from "next/link";
export function Header() {
  return (
    <header id="header" className="navbarScroll w-100 headerNav headerTop">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="">
          <Link className="p-0 d-flex align-items-center" href="/">
            <img className="logo-top" src="/image/Logo.png" />
          </Link>
        </div>
        <button
          className="navbar-toggler mobile-nav-toggle border-0 p-0 d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {" "}
          <i className="fa fa-bars text-dark" aria-hidden="true"></i>{" "}
        </button>

        <div className="main-nav d-none d-lg-flex">
          <button
            className="navbar-toggler mobile-nav-toggle border-0 p-0 d-lg-none mobileMenuClose"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img src="image/close.png" alt="" />
          </button>
          <ul className=" d-lg-flex align-items-lg-center float-lg-left">
            <li className="">
              <Link className="scrollLink active" href="/">
                Home
              </Link>
            </li>
            <li className="">
              <Link className="scrollLink" href="/about">
                About
              </Link>
            </li>

            <li className="">
              <Link className="scrollLink" href="/product">
                Products
              </Link>
            </li>
            <li className="">
              <Link className="scrollLink" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
