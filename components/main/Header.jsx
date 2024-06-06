"use client";
import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../../styles/header.css';
import logo from '../../public/logo.png';

const Header = () => {

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('header');
      const menuIconBars = document.querySelectorAll('.menu-icon div');

      if (typeof window !== 'undefined' && window.innerWidth <= 800) {
        if (window.scrollY > 100) {
          header.classList.add('scrolled');
          menuIconBars.forEach(bar => {
            bar.style.backgroundColor = 'black';
          });
        } else {
          header.classList.remove('scrolled');
          menuIconBars.forEach(bar => {
            bar.style.backgroundColor = 'white';
          });
        }
      } else {
        if (window.scrollY > 100) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    };

    const closeNav = () => {
      document.getElementById("mySidepanel").style.width = "0";
      document.querySelector('.menu-icon').classList.remove('change');
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', closeNav);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', closeNav);
      }
    };
  }, []);

  const toggleMenu = (x) => {
    x.classList.toggle("change");
    openNav();
  }

  const openNav = () => {
    document.getElementById("mySidepanel").style.width = "250px";
  }

  const closeNav = () => {
    document.getElementById("mySidepanel").style.width = "0";
    document.querySelector('.menu-icon').classList.remove('change');
  }

  return (
    <>
      <header id="header" className="text-white py-4 sticky-header">
        <div className="container mx-auto flex justify-between items-center px-4">
          <Link href="/" className="logo">
            <div className="flex items-center cursor-pointer">
              <Image src={logo} className="w-12 h-12" alt="logo" />
              <h1 className="text-xl font-semibold ml-2">قراءة القرآن</h1>
            </div>
          </Link>
          <nav className="desktop-menu">
            <ul className="flex space-x-6">
              <li><Link href="/read" className="hover:text-gray-300">قراءة القرآن</Link></li>
              <li><Link href="/listen" className="hover:text-gray-300">استمع إلى القرآن</Link></li>
              <li><Link href="/about" className="hover:text-gray-300">حول</Link></li>
              <li><Link href="/contact" className="hover:text-gray-300">اتصل بنا</Link></li>
              <li><Link href="/" className="hover:text-gray-300">الصفحة الرئيسية</Link></li>
            </ul>
          </nav>
          <div className="menu-icon" onClick={(e) => toggleMenu(e.currentTarget)}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </div>
      </header>

      <div id="mySidepanel" className="sidepanel grid">
        <button className="closebtn" onClick={closeNav}>×</button>
        <Link href="/" className="pr-4">الصفحة الرئيسية</Link>
        <Link href="/about" className="pr-4">حول</Link>
        <Link href="/contact" className="pr-4">اتصل بنا</Link>
        <Link href="/read" className="pr-4">قراءة القرآن</Link>
        <Link href="/listen" className="pr-4">استمع إلى القرآن</Link>
      </div>
    </>
  );
};

export default Header;
