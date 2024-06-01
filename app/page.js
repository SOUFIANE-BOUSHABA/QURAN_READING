// app/page.js
import Layout from './layouts/layout';
import Hero from './components/home/Hero';
import QuranSection from './components/home/QuranSection';
const HomePage = () => {
 

  return (
    <Layout>
      <Hero />
      <QuranSection />
    
    </Layout>
  );
}

export default HomePage;
