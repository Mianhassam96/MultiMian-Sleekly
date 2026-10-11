"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Link2, ArrowRight, Zap } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-indigo-500/30">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="text-xl font-bold tracking-tighter flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <Zap size={18} fill="white" />
          </div>
          MultiMian <span className="text-gray-500 font-light">Sleekly</span>
        </div>
        <button className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition">
          Sign In
        </button>
      </nav>

      {/* Hero Content */}
      <main className="max-w-4xl mx-auto pt-20 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="px-3 py-1 rounded-full border border-gray-800 text-xs font-medium text-gray-400 mb-6 inline-block">
            v1.0 is now live 🚀
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
            Shorten links. <br /> Stay Sleek.
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            The minimalist URL shortener for creators and professionals. 
            Clean links, instant QR codes, and powerful analytics.
          </p>
        </motion.div>

        {/* The Main Web Tool Input */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-[#161616] p-2 rounded-2xl border border-gray-800 shadow-2xl flex flex-col md:flex-row gap-2"
        >
          <div className="flex-1 flex items-center px-4 gap-3">
            <Link2 className="text-gray-500" size={20} />
            <input 
              type="text" 
              placeholder="Paste your long link here..." 
              className="bg-transparent w-full py-4 outline-none text-white placeholder:text-gray-600"
            />
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95">
            Shorten <ArrowRight size={18} />
          </button>
        </motion.div>

        <p className="mt-6 text-sm text-gray-600">
          No credit card required. Clean links forever.
        </p>
      </main>
    </div>
  );
}