'use client'; 

import { useEffect } from 'react';
import Image from 'next/image';
import '../../styles/quran.css';
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel';

const QuranSection = () => {
  useEffect(() => {
    const loadSlick = () => {
      if ($('#carousel').length) {
        $('#carousel').slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          prevArrow: '<div class="slick-prev bg-gray-900">prev</div>',
          nextArrow: '<div class="slick-next">next</div>',
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        });
      }
    };

    if (typeof window !== 'undefined') {
      $(document).ready(loadSlick);
    }
  }, []);

  return (
    <section className="py-20 overflow-hidden z-[20]">
      <div className="container mx-auto">
        <article className="text-center p-4">
          <h2 className="text-3xl font-bold mb-8">ما هو القرآن الكريم؟</h2>
          <p className="text-lg mb-4">
            القرآن الكريم هو الكتاب المقدس لدى المسلمين، وهو الكتاب الوحيد الذي لم يتغير منذ أن نزل على النبي محمد صلى الله عليه وسلم
          </p>
          <p className="text-lg mb-8">
            يتكون القرآن الكريم من 114 سورة، وكل سورة تتكون من آيات تحتوي على العديد من الأحكام والقصص والعبر
          </p>
        </article>

        <div id="carousel" className="slick-carousel">
          <div className="carousel-item">
            <Image src="/OIG3.jpg" alt="Image 1" width={300} height={300} />
          </div>
          <div className="carousel-item">
            <Image src="/OIG3.Ovs3IKtkcn26.jpg" alt="Image 2" width={300} height={300} />
          </div>
          <div className="carousel-item">
            <Image src="/OIG1 (3).jpg" alt="Image 3" width={300} height={300} />
          </div>
          <div className="carousel-item">
            <Image src="/OIG1 (4).jpg" alt="Image 4" width={300} height={300} />
          </div>
          <div className="carousel-item">
            <Image src="/OIG1.2zNm.uv_Z9TpwT42GS.jpg" alt="Image 5" width={300} height={300} />
          </div>
          <div className="carousel-item">
            <Image src="/OIG3 (1).jpg" alt="Image 6" width={300} height={300} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuranSection;