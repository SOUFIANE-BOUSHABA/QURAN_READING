// app/page.js
import Layout from './layouts/layout';
import Hero from './components/home/Hero';
import QuranSection from './components/home/QuranSection';
import QuranAbout from './components/home/QuranAbout';
const HomePage = () => {
 

  return (
    <Layout>
      <Hero />
      <QuranSection />
      <QuranAbout />
    
    </Layout>
  );
}

export default HomePage;
