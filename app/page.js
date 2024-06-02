// app/page.js
import Layout from './layouts/layout';
import Hero from './components/home/Hero';
import QuranSection from './components/home/QuranSection';
import QuranAbout from './components/home/QuranAbout';
import ScrollSection from './components/home/ScrollSection';

const HomePage = () => {
 

  return (
    <Layout>
      <Hero />
      <QuranSection />
      <QuranAbout />
      <ScrollSection />
      
    
    </Layout>
  );
}

export default HomePage;
