'use client';
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import '../../styles/scroll.css';

function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-200%", // Adjust based on the number of cards
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "3000 top", // Adjust based on the total scroll length
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="col-span-6 md:col-span-3 lg:col-span-2 mt-6 md:mt-12"
            >
              <div className="bg-gray-100 dark:bg-[#1E2735] rounded-lg overflow-hidden">
                <div className="relative">
                  <div className="flex justify-center items-center text-xl w-[60px] h-[60px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white bg-white bg-opacity-50 rounded-full cursor-pointer before:block before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-white before:bg-opacity-20 before:rounded-full before:w-[75px] before:h-[75px]">
                    <i className="fas fa-play ml-1"></i>
                  </div>
                  <img
                    src="https://cdn.easyfrontend.com/pictures/courses/courses_1_1.png"
                    className="w-full"
                    alt="..."
                  />
                </div>
                <div className="p-4 pb-4">
                  <a>
                    <p className="opacity-80 mb-2">Marketing</p>
                  </a>
                  <a>
                    <h5 className="text-[19px] font-medium leading-6 hover:text-blue-600 mb-2">
                      The Complete Digital Marketing Guide Course
                    </h5>
                  </a>
                  <p className="opacity-80 mb-2">
                    Some quick example text to build on the card the bulk content...
                  </p>
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center">
                      <div className="mr-2">
                        <img
                          src="https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg"
                          alt=""
                          className="max-w-full h-auto rounded-full border border-btnBorder"
                          width="40"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium">John Smith</h4>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="bg-transparent hover:bg-blue-600 border border-blue-600 hover:text-white py-2 rounded transition ezy__blog15_eg7k79Dw-card-btn flex items-center px-3"
                    >
                      Add To Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
