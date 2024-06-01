// this page is the hero section of the home page

import Image from 'next/image';
import '../../styles/hero.css'; 
import Link from 'next/link';
import hero from '../../../public/herooo.png'; 

const Hero = () => {
  return (
    <section className="text-white py-20 bg-slate-900">
      <div className="container heroContent mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">قراءة القرآن</h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8">
          مرحبًا بكم في موقعنا لقراءة وتفسير القرآن الكريم بسهولة ويسر
        </p>
        <Link href="#" className="bg-[#fac057] text-blue-900 hover:bg-blue-100 py-2 px-6 rounded-full inline-block font-semibold uppercase tracking-wide transition duration-300">
          ابدأ القراءة الآن
        </Link>
      </div>
      <Image
        src={hero}
        className="heroImage mx-auto w-full "
        alt="Quran Image"
        width={600}
        height={400}
        quality={100}
        priority 
      />
    </section>
  );
};

export default Hero;
