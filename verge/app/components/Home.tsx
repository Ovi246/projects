"use client"
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';



const Home: React.FC = () => {
  const imagesRef = useRef<NodeListOf<Element> | null>(null);
  const vergeLogoRef = useRef<HTMLImageElement| null>(null);
  

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  
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
      }, { threshold: 0.2 }); // Adjust the threshold as needed

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
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount
  return (
    <main>
      <section id="hero_area_wrap">
      <div>

        <div className="images">
          <div className="hero_shape_shadow">
            <Image src="/assets/shape.png" alt="" width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"/>
          </div>
          <div className="right_images">
            <Image src="/assets/hero_b.png"  alt="" 
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
                />
          </div>
          <div className="left_images">
            <Image src="/assets/hero_a.png" className="img-fluid w-full h-auto" 
                width={0}
                height={0}
                sizes="100vw" alt="" />
          </div>
        </div>
        <div className="hero_content">
          <h1>where places</h1>
          <h1>become faces</h1>
        </div>
        <div className="apps_CTA_wrap">
          <a href="" className="apple_store_link_&_wrap">
            <div className="apple_store">
              <div className="icon_wrap">
                <svg viewBox="0 0 19 21" fill="#1F1533" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16.6179 18.1193C15.741 19.4034 14.8113 20.6565 13.3956 20.6772C11.9799 20.7083 11.5256 19.8591 9.91971 19.8591C8.30327 19.8591 7.80672 20.6565 6.46497 20.7083C5.08096 20.7601 4.03503 19.3413 3.14758 18.0882C1.34097 15.5302 -0.0430415 10.8182 1.81639 7.64925C2.73554 6.07512 4.38368 5.08094 6.16915 5.04987C7.52147 5.02916 8.81039 5.95085 9.64502 5.95085C10.4691 5.95085 12.0327 4.84275 13.6703 5.00844C14.357 5.03951 16.2798 5.2777 17.5159 7.05895C17.4208 7.12109 15.2233 8.38453 15.2445 11.0046C15.2761 14.1322 18.0442 15.1781 18.0759 15.1885C18.0442 15.261 17.6321 16.6798 16.6179 18.1193ZM10.5853 1.54951C11.3565 0.689952 12.6349 0.0375181 13.6914 -0.00390625C13.8287 1.20776 13.3322 2.42978 12.5926 3.29969C11.8637 4.17996 10.6593 4.86346 9.47598 4.77025C9.31751 3.5793 9.90915 2.33657 10.5853 1.54951Z"
                    fill="#1F1533" />
                </svg>
              </div>
              <div>
                <small>Available on the</small>
                <h6>Apple Store</h6>
              </div>
            </div>
          </a>
          <a href="" className="play_store_link_&_wrap">
            <div className="play_store">
              <div className="icon_wrap">
                <svg width="21" height="23" viewBox="0 0 21 23" fill="#1F1533" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.2572 10.9572L16.1865 8.60156L12.832 11.843L15.9038 14.8017L20.276 12.2764C20.521 12.1445 20.6529 11.8807 20.6529 11.6168C20.6529 11.3342 20.5021 11.0892 20.2572 10.9572Z"
                    fill="#1F1533" />
                  <path d="M15.4788 8.19492L10.9936 5.59424L1.15625 0.5625L12.2751 11.2856L15.4788 8.19492Z"
                    fill="#1F1533" />
                  <path d="M1.32422 22.9278L11.0108 17.5945L15.1945 15.1823L12.2734 12.3555L1.32422 22.9278Z"
                    fill="#1F1533" />
                  <path d="M0.518842 0.988281L0.5 22.6606L11.7131 11.8244L0.518842 0.988281Z" fill="#1F1533" />
                </svg>
              </div>
              <div>
                <small>Available on the</small>
                <h6>Google Play</h6>
              </div>
            </div>
          </a>

        </div>
      </div>
    </section>
      <section id="verge_desc">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-2">
              <div className="desc_logo d-flex justify-content-center">
                <Image src="/assets/logo.png" alt="" id="verge_logo" className="img-fluid" width={500} height={300} ref={vergeLogoRef}/>
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
              <Image src="/assets/feature_one.png" alt="Feature image" className="img-fluid visible-image" width={650}
                height={770}
               />
            </div>
          </div>
        </div>
      </section>
      <section id="features_2">
        <div className="feature_2_container">
          <div className="feature_2_wrap">
          <div className="feature_img">
              <Image src="/assets/feature_two_desktop.png" alt="Feature image" width={500} height={300} className="img-fluid visible-image desktop_view" />
              <Image src="/assets/feature_two_mobile.png" alt="Feature image" width={500} height={300} className="img-fluid visible-image mobile_view"/>
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
      <Image src="/assets/icons/shape_c.svg" alt="Feature image"  className="feature_3_side_shape w-full h-auto" 
                width={0}
                height={0}
                sizes="100vw"
                />
      <div className="feature_3_container">
        <div className="feature_3_wrap">
          <div className="feature_desc visible-image">
            <span>Feature 3</span>
            <h1>See who&apos;s there</h1>
            <p>When you enter one of our partnered venues, you will always know who’s there and open to a chat or
              something more!</p>
          </div>
          <div className="feature_img">
          <Image src="/assets/feature_three.png" alt="Feature image" className="img-fluid visible-image " 
          width={761} 
          height={839} 
           />
          </div>
        </div>

      </div>
    </section>
    <section id="features_4">
      <div className="feature_4_container">
        <div className="feature_4_wrap">
          <div className="feature_img">
          <Image src="/assets/feature_four.png" alt="Feature image" width={500} height={300} className="img-fluid visible-image"  />

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

export default Home;
