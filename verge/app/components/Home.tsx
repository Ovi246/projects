"use client"
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';



const Main: React.FC = () => {
  const imagesRef = useRef<NodeListOf<Element> | null>(null);

  useEffect(() => {
      imagesRef.current = document.querySelectorAll(".visible-image");

      const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
              const target = entry.target as HTMLElement;
              if (entry.isIntersecting) {
                  target.style.opacity = "1";
                  target.style.transform = "translateY(0)";
              } else {
                  target.style.opacity = "0";
              }
          });
      }, { threshold: 0.2 }); 

      if (imagesRef.current) {
          imagesRef.current.forEach((image) => {
              observer.observe(image);
          });
      }

      // Cleanup function
      return () => {
          if (imagesRef.current) {
              imagesRef.current.forEach((image) => {
                  observer.unobserve(image);
              });
          }
      };
  }, []); 

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const rotation = "rotate(" + scrollY + "deg)";
      const logo = document.getElementById("verge_logo");
      if (logo) {
        logo.style.transform = rotation;
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 
  
  return (
    <main>
      <section id="verge_desc">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-2">
              <div className="desc_logo d-flex justify-content-center">
                <Image src="/assets/logo.png" alt="" id="verge_logo" className="img-fluid" width={500} height={300} />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="description text-center">
                <p>Verge is the <span>ultimate ice-breaker</span> in your favorite bars, clubs and events, removing the
                  guesswork from <span>who&apos;s available to talk</span> and who shares your <span>interests</span>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="features_1">
        <div className="feature_container">
          <div className="feature_1_wrap">
            <div className="feature_desc visible-image">
              <span>Feature 1</span>
              <h1>Discover venues in your city</h1>
              <p>Picture a world where the nightlife of your city is just a tap away, ready to be explored and experienced
                with the touch of a few buttons.</p>
            </div>
            <div className="feature_img">
              <Image src="/assets/feature_one.png" alt="Feature image" width={500} height={300} className="img-fluid visible-image" />
            </div>
          </div>
        </div>
      </section>
      <section id="features_2">
        <div className="feature_2_container">
          <div className="feature_2_wrap">
          <div className="feature_img">
              <Image src="/assets/feature_two_desktop.png" alt="Feature image" width={500} height={300} className="img-fluid visible-image" />
            </div>
            <div className="feature_desc visible-image" >
              <span>Feature 2</span>
              <h1>Stay in the know</h1>
              <p>Access up-to-date event schedules, operating hours and exclusive promotions of the venues you love to
              attend.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="features_3">
      <Image src="/assets/icons/shape_c.svg" alt="Feature image"  className="feature_3_side_shape" layout="fill" objectFit="cover" />
      <div className="feature_3_container">
        <div className="feature_3_wrap">
          <div className="feature_desc visible-image">
            <span>Feature 3</span>
            <h1>See who&apos;s there</h1>
            <p>When you enter one of our partnered venues, you will always know who’s there and open to a chat or
              something more!</p>
          </div>
          <div className="feature_img">
          <Image src="/assets/feature_three.png" alt="Feature image" width={500} height={300} className="img-fluid visible-image" />
          </div>
        </div>

      </div>
    </section>
    <section id="features_4">
      <div className="feature_4_container">
        <div className="feature_4_wrap">
          <div className="feature_img">
          <Image src="/assets/feature_four.png" alt="Feature image" width={500} height={300} className="img-fluid visible-image" />

          </div>
          <div className="feature_desc visible-image">
            <span>Feature 4</span>
            <h1>Chat & Meet Up</h1>
            <p>We give you all the tools you need to turn your night into an unforgettable experience. Expand your
              social circles in an instant with Verge.</p>
          </div>

        </div>

      </div>
    </section>

    <section id="partners">
      <div className="parthers_container">
        <div className="parthners_wrap">
        <Image src="/assets/icons/shape_d.svg" alt="Feature image" width={500} height={300} className="img-fluid" />

          <h2>
            Verge has <span className="pill_orange"> partnered up</span> with some of the best bars, nightclubs & event
            organizations in <span className="pill_purple">Athens</span>
          </h2>
        </div>
      </div>
      <div className="partnes_company">
        <div className="partnes_company_wrap mySwiper">
          <div className="partner_boxs swiper-wrapper">
            <div className="partner_single swiper-slide ">
              <h3>Clown Dogs</h3>
            </div>
            <div className="partner_single swiper-slide">
              <h3>Athénée </h3>
            </div>
            <div className="partner_single swiper-slide">
              <h3>COZMO</h3>
            </div>
            <div className="partner_single swiper-slide">
              <h3>Lohan </h3>
            </div>
            <div className="partner_single swiper-slide">
              <h3>Blast</h3>
            </div>
            <div className="partner_single swiper-slide">
              <h3>Clown Dogs</h3>
            </div>
            <div className="partner_single swiper-slide">
              <h3>COZMO</h3>
            </div>
            <div className="partner_single swiper-slide">
              <h3>Athénée </h3>
            </div>
          
          
            
          </div>
          <div className="partner_boxs swiper-wrapper">
            <div className="partner_single swiper-slide ">
              <h3>Clown Dogs</h3>
            </div>
            <div className="partner_single swiper-slide">
              <h3>Athénée </h3>
            </div>
            <div className="partner_single swiper-slide">
              <h3>COZMO</h3>
            </div>
            <div className="partner_single swiper-slide">
              <h3>Lohan </h3>
            </div>
            <div className="partner_single swiper-slide">
              <h3>Blast</h3>
            </div>
            <div className="partner_single swiper-slide">
              <h3>Clown Dogs</h3>
            </div>
            <div className="partner_single swiper-slide">
              <h3>COZMO</h3>
            </div>
            <div className="partner_single swiper-slide">
              <h3>Athénée </h3>
            </div>
          
          
            
          </div>
        </div>




      </div>
    </section>
    
      
    </main>
  );
};

export default Main;
