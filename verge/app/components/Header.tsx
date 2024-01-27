"use client"
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState(true);
  const vergeLogoRef = useRef<HTMLAnchorElement| null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const rotation = "rotate(" + scrollY + "deg)";
      if(vergeLogoRef.current)
      vergeLogoRef.current.style.transform = rotation;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <header id="header_wrap">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link href="/"
             className="navbar-brand">
              <Image src="/assets/icons/verge.svg" alt="" width={500} height={300} className="img-fluid img_lg" />
              <Image src="/assets/logo.png" alt="" width={500} height={300} className="img-fluid img_sm" />
          </Link>
          <div className="collapse navbar-collapse large_screen_menu" id="navbarSupportedContent">
          <div className="navbar-nav">
            <Link href=""
              className="nav-link">Download
            </Link>
            <Link href="#features_1"
               className="nav-link">Features
            </Link>
            <Link href="#partners"
              className="nav-link">Our Partners
            </Link>
            <Link href="#"
             className="btn btn-custom">Contact
            </Link>
            <Link href="#"
            className="btn btn-custom-radial">For Venues
            </Link>
          </div>
        </div>
          
        </div>
      </nav>
      <section id="hero_area_wrap">
        <div>
          <div className="images">
           
            <div className="right_images">
              <Image src="/assets/hero_b.png" alt="" className="img-fluid" layout="fill" objectFit='cover'/>
            </div>
            <div className="left_images">
              <Image src="/assets/hero_a.png" alt="" className="img-fluid" layout="fill" objectFit='cover'/>
            </div>
          </div>
          <div className="hero_content">
            <h1>where places</h1>
            <h1>become faces</h1>
          </div>
          <div className="apps_CTA_wrap">
            <Link href="" className="apple_store_link_&_wrap">
              <div className="apple_store">
                <div className="icon_wrap">
                  {/* SVG content */}
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
                  {/* SVG content */}
                </div>
                <div>
                  <small>Available on the</small>
                  <h6>Google Play</h6>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
