import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Layout from './components/Layout';
import Home from './components/home';
import About from './components/about';
import Services from './components/services';
import Gallery from './components/gallery';
import Contact from './components/contact';
import { Analytics } from '@vercel/analytics/react';
import { LanguageProvider } from './context/LanguageContext';
import LoadingScreen from './components/common/LoadingScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <LanguageProvider>
      {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
        <Analytics />
      </Router>
    </LanguageProvider>
  );
}
