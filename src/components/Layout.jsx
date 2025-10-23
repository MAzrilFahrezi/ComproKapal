import Navbar from './navbar';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <main>
            <div className="fixed bottom-4 right-4 z-50">
                <a href="https://wa.me/6281367307405" target="_blank" rel="noopener noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-16 h-16" />
                </a>
            </div>
        {children}
        
      </main>
      <Footer />
    </div>
  );
}