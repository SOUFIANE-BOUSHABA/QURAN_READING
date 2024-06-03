'use client';
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import '../../styles/scroll.css';
import { SparklesIcon } from "@heroicons/react/24/solid";
const mockData = [
  {
    image: "1 (1).jpg",
    category: "تفسير",
    title: "تفسير سورة الفاتحة",
    description: "تفسير شامل لسورة الفاتحة مع الشرح. يتناول الموضوع بأسلوب سهل ومبسط لجميع المستويات. إضافة إلى ذلك، يحتوي على فصول متعددة تتناول الجوانب المختلفة للسورة.",
    author: "الدكتور محمد",
    authorImage: "https://media.licdn.com/dms/image/D4E03AQGaB0vH8e5vlw/profile-displayphoto-shrink_400_400/0/1715358724178?e=1723075200&v=beta&t=javYzWaDIR13XZ7F5nOXXunn9qTlOr0KoJcd-5UeaKw"
  },
  {
    image: "1 (1).png",
    category: "فقه",
    title: "فقه الصيام",
    description: "أحكام الصيام وشروطه في الإسلام. يشرح هذا الموضوع بالتفصيل كل ما يتعلق بالصيام. كما يتناول القضايا الفقهية المعاصرة المتعلقة بالصيام.",
    author: "الشيخ عبد الله",
    authorImage: "https://media.licdn.com/dms/image/D4E03AQGaB0vH8e5vlw/profile-displayphoto-shrink_400_400/0/1715358724178?e=1723075200&v=beta&t=javYzWaDIR13XZ7F5nOXXunn9qTlOr0KoJcd-5UeaKw"
  },
  {
    image: "1 (2).png",
    category: "حديث",
    title: "شرح الأربعين النووية",
    description: "شرح لأحاديث الأربعين النووية. يقدم هذا الشرح تفصيلات دقيقة للأحاديث النبوية. بالإضافة إلى ذلك، يتضمن توضيحات للمصطلحات والمفاهيم.",
    author: "الأستاذ أحمد",
    authorImage: "https://media.licdn.com/dms/image/D4E03AQGaB0vH8e5vlw/profile-displayphoto-shrink_400_400/0/1715358724178?e=1723075200&v=beta&t=javYzWaDIR13XZ7F5nOXXunn9qTlOr0KoJcd-5UeaKw"
  },
  {
    image: "1 (3).png",
    category: "قرآن",
    title: "تلاوة سورة البقرة",
    description: "تلاوة جميلة لسورة البقرة. تلاوة بصوت عذب ومؤثر تساعد على الخشوع. تتضمن أيضا تفسير مبسط للآيات لتسهيل الفهم.",
    author: "القارئ يوسف",
    authorImage: "https://media.licdn.com/dms/image/D4E03AQGaB0vH8e5vlw/profile-displayphoto-shrink_400_400/0/1715358724178?e=1723075200&v=beta&t=javYzWaDIR13XZ7F5nOXXunn9qTlOr0KoJcd-5UeaKw"
  },
  {
    image: "1 (4).png",
    category: "سيرة",
    title: "سيرة الرسول",
    description: "سيرة النبي محمد صلى الله عليه وسلم. هذا الكتاب يتناول حياة الرسول بالتفصيل. كما يسلط الضوء على الأحداث الهامة والدروس المستفادة منها.",
    author: "الدكتور خالد",
    authorImage: "https://media.licdn.com/dms/image/D4E03AQGaB0vH8e5vlw/profile-displayphoto-shrink_400_400/0/1715358724178?e=1723075200&v=beta&t=javYzWaDIR13XZ7F5nOXXunn9qTlOr0KoJcd-5UeaKw"
  },
  {
    image: "1 (1).jpg",
    category: "أخلاق",
    title: "أخلاق المسلم",
    description: "أهمية الأخلاق في حياة المسلم. يشرح هذا الكتاب القيم الإسلامية وأهمية التحلي بالأخلاق الحميدة. كما يتناول كيفية تطبيق هذه القيم في الحياة اليومية.",
    author: "الشيخ سعيد",
    authorImage: "https://media.licdn.com/dms/image/D4E03AQGaB0vH8e5vlw/profile-displayphoto-shrink_400_400/0/1715358724178?e=1723075200&v=beta&t=javYzWaDIR13XZ7F5nOXXunn9qTlOr0KoJcd-5UeaKw"
  },
  {
    image: "1 (2).png",
    category: "عبادات",
    title: "أهمية الصلاة",
    description: "شرح أهمية الصلاة في الإسلام. هذا الموضوع يتناول فضائل الصلاة وكيفية أدائها بالشكل الصحيح. بالإضافة إلى ذلك، يناقش كيفية المحافظة على الخشوع أثناء الصلاة.",
    author: "الأستاذة ليلى",
    authorImage: "https://media.licdn.com/dms/image/D4E03AQGaB0vH8e5vlw/profile-displayphoto-shrink_400_400/0/1715358724178?e=1723075200&v=beta&t=javYzWaDIR13XZ7F5nOXXunn9qTlOr0KoJcd-5UeaKw"
  }
];

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
          start: "-80 top",
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
    <section className="scroll-section-outer mx-auto container text-center">
         <h1 className="text-3xl font-semibold text-white">مقالاتنا الأخيرة</h1>
      <div ref={triggerRef}>
        <div ref={sectionRef} className=" container mx-auto scroll-section-inner">
           
          {mockData.map((item, index) => (
        
            <div  key={index} className="col-span-6 md:col-span-3 lg:col-span-2 mt-6 md:mt-12">
            <div
                className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]"
            >
                <div className="relative">
                <div
                    className="flex justify-center items-center text-xl w-[60px] h-[60px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white bg-white bg-opacity-50 rounded-full cursor-pointer before:block before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-white before:bg-opacity-20 before:rounded-full before:w-[75px] before:h-[75px]"
                >
                    <i className="fas fa-play ml-1"></i>
                </div>
                <img
                src={item.image}
                className="w-full"
                alt={item.title}
                />
                </div>
                <div className="p-4 pb-4">
             
                <a>
                    <h5
                    className="text-2xl font-semibold text-white"
                    >
                    {item.title}
                    </h5>
                </a>
                <p className="mt-2 text-gray-300">
                    {item.description}
                </p>
                <div className="flex justify-between mb-2 mt-4">
                    <div className="flex items-center">
                    <div className="mr-2">
                        <img
                        src={item.authorImage}
                        alt=""
                        className="max-w-full h-auto rounded-full border border-btnBorder"
                        width="40"
                        />
                    </div>
                    <div>
                        <h4 className="font-medium mt-2 text-gray-300"> {item.author} </h4>
                    </div>
                    </div>
                    <div
                        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
                        >
                        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
                        <h1 className="Welcome-text text-[13px]">
                        اقرأ المزيد
                        </h1>
                        </div>
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