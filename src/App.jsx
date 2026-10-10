import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import BookDemo from './pages/BookDemo';
import SampleAudit from './pages/SampleAudit';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-violet-600 selection:text-white">
      <ScrollToTop />
      
      {/* Sticky Glassmorphism Header */}
      <Navbar />

      {/* Main Multi-Page Content */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/book-demo" element={<BookDemo />} />
          <Route path="/sample-audit" element={<SampleAudit />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Consistent Enterprise Footer */}
      <Footer />
    </div>
  );
}
