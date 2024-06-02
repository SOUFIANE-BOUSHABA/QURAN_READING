'use client'; // This is a client component

import { useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../styles/quran.css';

const QuranSection = () => {
  return (
    <section className="relative bg-white dark:bg-[#0b1727] dark:text-white py-[60px] md:pt-0 md:pb-[100px] z-[1]">
      <svg
        className="text-[#fef2fb] dark:text-[#1E2735] absolute left-0 top-0 hidden sm:block -z-[1]"
        width="370"
        height="534"
        viewBox="0 0 370 534"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="0.5" cy="164.5" r="369.5" fill="gray" fillOpacity="0.1" />
      </svg>
      
    
      <div className="container mx-auto px-16 md:px-8 lg:px-28">
        <div className="grid grid-cols-12 justify-between">
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-center text-center lg:text-start">
            <h2 className="font-bold text-3xl text-[32px] leading-none md:text-[45px] mb-6 mt-0 md:mt-12">كيف يمكنني قراءة القرآن الكريم؟</h2>
            <div className="text-lg opacity-80 mb-12 lg:mb-0">
              <p className="text-lg text-right mb-4">يمكنك قراءة القرآن الكريم بسهولة ويسر عبر موقعنا، حيث يمكنك البدء في قراءة القرآن الكريم من أي مكان وفي أي وقت</p>
              <p className="text-lg text-right mb-4">يمكنك البدء في قراءة القرآن الكريم من الصفحة الرئيسية، أو يمكنك البحث عن سورة معينة أو عن آية معينة</p>
              <p className="text-lg text-right mb-4">يمكنك أيضًا البدء في تفسير القرآن الكريم، حيث يمكنك فهم الآيات والسور بشكل أفضل</p>
              <p className="text-lg text-right mb-8">ابدأ القراءة الآن واستمتع بتلاوة القرآن الكريم</p>
            </div>
            <a href="#" className="bg-[#fac057] place-self-end text-dark btn py-2 px-6 rounded-full inline-block font-semibold uppercase tracking-wide transition duration-300">ابدأ القراءة الآن</a>
          </div>
          <div className="col-span-12 mt-8 lg:col-span-5 lg:col-start-8 text-center">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              loop
            >
              <SwiperSlide>
                <Image
                  src="/OIG4 (3).jpg"
                  alt="Image 1"
                  className="h-auto max-w-full mx-auto"
                  width={500}
                  height={300}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/OIG2.jpg"
                  alt="Image 2"
                  className="h-auto max-w-full mx-auto"
                  width={500}
                  height={300}
                />
              </SwiperSlide>
         
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuranSection;
