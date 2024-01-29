"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/legacy/image";
import Link from "next/link";

const Header: React.FC = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const vergeLogoRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const rotation = "rotate(" + scrollY + "deg)";
      if (vergeLogoRef.current) vergeLogoRef.current.style.transform = rotation;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const hideMenu = () => {
    setMenuVisible(false);
  };

  return (
    <>
      <header id="header_wrap">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link className="navbar-brand" href="/">
              <div className="img_lg">

                <Image
                  src="/assets/icons/verge.svg"
                  alt=""
                  className="img-fluid "
                  width={224}
                  height={48}
                />
              </div>
        
              <div className="img_sm">

                <Image 
                  src="/assets/logo.png" 
                  alt="" 
                  className="img-fluid" 
                  width={37}
                  height={37}
                />
              </div>
              
            </Link>
            {/* <!-- responsive bars icon  --> */}
            <button
              className="navbar-toggler navbar_toggle_line"
              type="button"
              onClick={toggleMenu}
            >
              <span className="">
                <svg
                  width="31"
                  height="13"
                  viewBox="0 0 31 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Group 10467">
                    <line
                      id="Line 425"
                      x1="0.4375"
                      y1="1.07422"
                      x2="30.4375"
                      y2="1.07422"
                      stroke="white"
                      strokeWidth="2"
                    />
                    <line
                      id="Line 426"
                      x1="0.4375"
                      y1="11.0781"
                      x2="30.4375"
                      y2="11.0781"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </g>
                </svg>
              </span>
            </button>
            {/* <!-- large screen menu start --> */}
            {!isMenuVisible && (
              <div
                className="collapse navbar-collapse large_screen_menu"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link" href="/" onClick={hideMenu}>
                      Download
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      href="#features_1"
                      onClick={hideMenu}
                    >
                      Features
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      href="#partners"
                      onClick={hideMenu}
                    >
                      Our Partners
                    </Link>
                  </li>
                </ul>
              </div>
            )}

            {/* <!-- large screen CTA start --> */}
            <div className="nav_CTA">
              <button
                className="btn btn-custom"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                style={{ backgroundColor: "#FFAB6F" }}
              >
                Contact
              </button>
              <button className="btn btn-custom-radial">For Venues</button>
            </div>
            {/* <!-- mobile screen CTA end --> */}
            {/* <!-- mobile screen CTA start --> */}
            <div className="nav_CTA mobile_M_CTA">
              <Link href="" className="btn btn-custom" onClick={hideMenu}>
                Venues
              </Link>
              <Link
                href=""
                className="btn btn-custom-radial"
                onClick={hideMenu}
              >
                Download
              </Link>
            </div>
            {/* <!-- mobile screen CTA end --> */}
            {/* <!-- large screen menu end --> */}

            {/* <!-- mobile screen menu start --> */}
            <div className={`mobile_menu ${isMenuVisible ? "show" : " "}`}>
              {/* <!-- mobile mene cross icon  --> */}
              <div className="cross_icon">
                <button
                  className="bg-transparent navbar_toggle_cross"
                  onClick={hideMenu}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="87"
                    height="86"
                    viewBox="0 0 87 86"
                    fill="#1E1432;"
                  >
                    <line
                      x1="65.2364"
                      y1="22.181"
                      x2="22.458"
                      y2="64.9593"
                      stroke="white"
                    />
                    <line
                      x1="64.5361"
                      y1="64.9627"
                      x2="21.7578"
                      y2="22.1844"
                      stroke="white"
                    />
                  </svg>
                </button>
              </div>

              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" href="#" onClick={hideMenu}>
                    Download
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    href="#features_1"
                    onClick={hideMenu}
                  >
                    Features
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    href="#partners"
                    onClick={hideMenu}
                  >
                    Our Partners
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link cursor-pointer"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    onClick={hideMenu}
                    role="button" 
                  >
                    Contact US
                  </a>
                </li>
              </ul>
              <div className="apps_CTA_wrap" onClick={hideMenu}>
                <Link href="" className="apple_store_link_&_wrap">
                  <div className="apple_store">
                    <div className="icon_wrap">
                      <svg
                        viewBox="0 0 19 21"
                        fill="#1F1533"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.6179 18.1193C15.741 19.4034 14.8113 20.6565 13.3956 20.6772C11.9799 20.7083 11.5256 19.8591 9.91971 19.8591C8.30327 19.8591 7.80672 20.6565 6.46497 20.7083C5.08096 20.7601 4.03503 19.3413 3.14758 18.0882C1.34097 15.5302 -0.0430415 10.8182 1.81639 7.64925C2.73554 6.07512 4.38368 5.08094 6.16915 5.04987C7.52147 5.02916 8.81039 5.95085 9.64502 5.95085C10.4691 5.95085 12.0327 4.84275 13.6703 5.00844C14.357 5.03951 16.2798 5.2777 17.5159 7.05895C17.4208 7.12109 15.2233 8.38453 15.2445 11.0046C15.2761 14.1322 18.0442 15.1781 18.0759 15.1885C18.0442 15.261 17.6321 16.6798 16.6179 18.1193ZM10.5853 1.54951C11.3565 0.689952 12.6349 0.0375181 13.6914 -0.00390625C13.8287 1.20776 13.3322 2.42978 12.5926 3.29969C11.8637 4.17996 10.6593 4.86346 9.47598 4.77025C9.31751 3.5793 9.90915 2.33657 10.5853 1.54951Z"
                          fill="#1F1533"
                        />
                      </svg>
                    </div>
                    <div>
                      <small>Available on the</small>
                      <h6>Apple Store</h6>
                    </div>
                  </div>
                </Link>
                <Link href="" className="play_store_link_&_wrap">
                  <div className="play_store">
                    <div className="icon_wrap">
                      <svg
                        width="21"
                        height="23"
                        viewBox="0 0 21 23"
                        fill="#1F1533"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.2572 10.9572L16.1865 8.60156L12.832 11.843L15.9038 14.8017L20.276 12.2764C20.521 12.1445 20.6529 11.8807 20.6529 11.6168C20.6529 11.3342 20.5021 11.0892 20.2572 10.9572Z"
                          fill="#1F1533"
                        />
                        <path
                          d="M15.4788 8.19492L10.9936 5.59424L1.15625 0.5625L12.2751 11.2856L15.4788 8.19492Z"
                          fill="#1F1533"
                        />
                        <path
                          d="M1.32422 22.9278L11.0108 17.5945L15.1945 15.1823L12.2734 12.3555L1.32422 22.9278Z"
                          fill="#1F1533"
                        />
                        <path
                          d="M0.518842 0.988281L0.5 22.6606L11.7131 11.8244L0.518842 0.988281Z"
                          fill="#1F1533"
                        />
                      </svg>
                    </div>
                    <div>
                      <small>Available on the</small>
                      <h6>Google Play</h6>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="f_btm_left">
                <ul className="soical_links">
                  <li className="instagram">
                    <Link href="#">
                      <svg
                        width="28"
                        height="27"
                        viewBox="0 0 28 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.4458 0.130559C16.4262 0.126797 17.4066 0.136651 18.3868 0.160117L18.6474 0.169522C18.9484 0.18027 19.2453 0.193705 19.604 0.209827C21.0335 0.277004 22.0089 0.502716 22.8647 0.834568C23.7514 1.17582 24.4984 1.638 25.2454 2.385C25.9284 3.05623 26.457 3.86818 26.7944 4.76438C27.1263 5.62021 27.352 6.59695 27.4191 8.02647C27.4353 8.38384 27.4487 8.68211 27.4594 8.98306L27.4675 9.2437C27.4914 10.2234 27.5017 11.2034 27.4984 12.1833L27.4998 13.1856V14.9456C27.5031 15.9261 27.4928 16.9065 27.4689 17.8866L27.4608 18.1473C27.45 18.4482 27.4366 18.7451 27.4205 19.1038C27.3533 20.5334 27.1249 21.5088 26.7944 22.3646C26.4581 23.2617 25.9293 24.0744 25.2454 24.7453C24.5736 25.4283 23.7612 25.9568 22.8647 26.2944C22.0089 26.6263 21.0335 26.852 19.604 26.9191C19.2453 26.9353 18.9484 26.9487 18.6474 26.9594L18.3868 26.9675C17.4066 26.9914 16.4262 27.0017 15.4458 26.9984L14.4436 26.9998H12.6849C11.7045 27.0031 10.7241 26.9928 9.74401 26.9688L9.48337 26.9608C9.16444 26.9492 8.84557 26.9358 8.52679 26.9205C7.09731 26.8533 6.12192 26.6249 5.26477 26.2944C4.36823 25.9576 3.55615 25.4289 2.88542 24.7453C2.20164 24.0739 1.67254 23.2615 1.33502 22.3646C1.00318 21.5088 0.777467 20.5334 0.710292 19.1038C0.695329 18.785 0.681894 18.4662 0.669987 18.1473L0.663269 17.8866C0.6385 16.9065 0.627303 15.9261 0.629681 14.9456V12.1833C0.625932 11.2034 0.635785 10.2234 0.659239 9.2437L0.668643 8.98306C0.679391 8.68211 0.692826 8.38384 0.708948 8.02647C0.776123 6.59561 1.00183 5.62155 1.33368 4.76438C1.6714 3.86774 2.20153 3.05602 2.88677 2.38634C3.55703 1.70215 4.3686 1.17256 5.26477 0.834568C6.12192 0.502716 7.09596 0.277004 8.52679 0.209827L9.48337 0.169522L9.74401 0.162804C10.7237 0.138047 11.7036 0.12685 12.6836 0.129216L15.4458 0.130559ZM14.0647 6.84819C13.1747 6.8356 12.291 7.00004 11.465 7.33195C10.639 7.66386 9.88729 8.15662 9.25342 8.7816C8.61956 9.40658 8.11622 10.1513 7.77267 10.9725C7.42912 11.7937 7.2522 12.675 7.2522 13.5652C7.2522 14.4553 7.42912 15.3366 7.77267 16.1578C8.11622 16.979 8.61956 17.7237 9.25342 18.3487C9.88729 18.9737 10.639 19.4664 11.465 19.7984C12.291 20.1303 13.1747 20.2947 14.0647 20.2821C15.8463 20.2821 17.5549 19.5744 18.8147 18.3146C20.0745 17.0548 20.7822 15.3461 20.7822 13.5645C20.7822 11.7829 20.0745 10.0742 18.8147 8.8144C17.5549 7.5546 15.8463 6.84819 14.0647 6.84819ZM14.0647 9.53525C14.6001 9.52538 15.1321 9.6223 15.6296 9.82035C16.1271 10.0184 16.5802 10.3136 16.9624 10.6887C17.3445 11.0638 17.6481 11.5113 17.8553 12.0051C18.0626 12.4989 18.1694 13.029 18.1695 13.5645C18.1696 14.1 18.063 14.6301 17.8559 15.1239C17.6488 15.6178 17.3453 16.0654 16.9633 16.4406C16.5813 16.8159 16.1283 17.1112 15.6309 17.3094C15.1334 17.5077 14.6015 17.6047 14.0661 17.5951C12.9971 17.5951 11.9719 17.1704 11.2161 16.4145C10.4602 15.6587 10.0356 14.6335 10.0356 13.5645C10.0356 12.4955 10.4602 11.4703 11.2161 10.7144C11.9719 9.95855 12.9971 9.5339 14.0661 9.5339L14.0647 9.53525ZM21.1181 4.8329C20.6847 4.85025 20.2748 5.03463 19.9743 5.34743C19.6737 5.66024 19.5059 6.07719 19.5059 6.51097C19.5059 6.94475 19.6737 7.3617 19.9743 7.6745C20.2748 7.9873 20.6847 8.17169 21.1181 8.18903C21.5635 8.18903 21.9907 8.0121 22.3056 7.69715C22.6206 7.38219 22.7975 6.95503 22.7975 6.50962C22.7975 6.06422 22.6206 5.63705 22.3056 5.3221C21.9907 5.00715 21.5635 4.83022 21.1181 4.83022V4.8329Z"
                          fill="#FFF"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li className="facebook">
                    <Link href="#">
                      <svg
                        width="28"
                        height="27"
                        viewBox="0 0 28 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.9357 0.128906C6.54607 0.128906 0.5 6.18577 0.5 13.6456C0.5 20.3904 5.41747 25.9886 11.8397 27.0004V17.5576H8.42707V13.6456H11.8397V10.6643C11.8397 7.27844 13.8417 5.41686 16.9184 5.41686C18.3829 5.41686 19.9146 5.67317 19.9146 5.67317V9.00512H18.2217C16.5557 9.00512 16.0317 10.0438 16.0317 11.1095V13.6456H19.7668L19.1622 17.5576H16.0317V27.0004C19.1977 26.4983 22.0807 24.8764 24.1602 22.4274C26.2397 19.9784 27.3786 16.8637 27.3714 13.6456C27.3714 6.18577 21.3253 0.128906 13.9357 0.128906Z"
                          fill="#FFF"
                        />
                      </svg>
                    </Link>
                  </li>
                </ul>
                <p className="menu_copyright">
                  ©2023 Verge, All rights reserved
                </p>
              </div>
              <div className="sm_menu_logo">
                <Image
                  src="/assets/icons/verge.svg"
                  alt=""
                  className="img-fluid"
                  width={200}
                  height={60}
                />
              </div>
            </div>
            {/* <!-- mobile screen menu end --> */}
          </div>

        </nav>
          <div className="contact_popUp">
            {/* <!-- Modal --> */}
            <div
              className="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex={-1}
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 86 86"
                        fill="transparent"
                      >
                        <line
                          x1="64.5162"
                          y1="21.7376"
                          x2="21.7378"
                          y2="64.516"
                          stroke="#1E1432"
                        />
                        <line
                          x1="63.8154"
                          y1="64.5193"
                          x2="21.0371"
                          y2="21.741"
                          stroke="#1E1432"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form action="" className="contact_popup_wrap">
                      <h2>Contact US</h2>
                      <p>Become part of our family!</p>
                      <div className="firstName">
                        <input type="text" placeholder="First Name" defaultValue="" />
                      </div>
                      <div className="lastname">
                        <input type="text" placeholder="Last Name" defaultValue="" />
                      </div>
                      <div className="email">
                        <input type="email" placeholder="E-mail" defaultValue="" />
                      </div>
                      <div className="text_box">
                        <textarea
                          name=""
                          placeholder="Type here..."
                          id=""
                          cols={20}
                          rows={10}
                          className="text-area"
                        ></textarea>
                      </div>

                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault1"
                        >
                          I agree with the <a href="#">Privacy Policy</a>.
                        </label>
                      </div>
                      <div className="submit_btn">
                        <input
                          type="submit"
                          className="btn btn-custom-radial"
                          value="Submit"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </header>
    </>
  );
};

export default Header;
