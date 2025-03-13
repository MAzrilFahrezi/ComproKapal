import Navbar from './navbar';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}