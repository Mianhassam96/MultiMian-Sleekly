"use client"
import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MousePointer2, Globe, Clock, BarChart3 } from 'lucide-react';

const data = [
  { name: 'Mon', clicks: 40 },
  { name: 'Tue', clicks: 30 },
  { name: 'Wed', clicks: 65 },
  { name: 'Thu', clicks: 45 },
  { name: 'Fri', clicks: 90 },
  { name: 'Sat', clicks: 75 },
  { name: 'Sun', clicks: 120 },
];

export const AnalyticsDashboard = () => {
  // FIX: This prevents the "Hydration Error" in Next.js
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-[400px] w-full bg-[#111] animate-pulse rounded-2xl" />;

  return (
    <div className="w-full max-w-6xl mx-auto p-6 mt-20 border-t border-white/5">
      <div className="flex items-center gap-2 mb-8">
        <BarChart3 className="text-indigo-500" />
        <h2 className="text-2xl font-bold">Real-time Analytics</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <StatCard icon={<MousePointer2 size={20}/>} label="Total Clicks" value="1,284" change="+12%" />
        <StatCard icon={<Globe size={20}/>} label="Top Region" value="United States" change="Direct" />
        <StatCard icon={<Clock size={20}/>} label="Avg. Redirection" value="142ms" change="Optimal" />
      </div>

      <div className="bg-[#111] p-6 rounded-2xl border border-white/10 h-[400px] w-full">
        <h3 className="text-sm font-medium text-gray-500 mb-6 uppercase tracking-widest text-left">Click Activity</h3>
        
        {/* ResponsiveContainer needs a parent with defined height (the 400px div above) */}
        <div className="w-full h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorClicks" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366F1" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#6366F1" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
              <XAxis dataKey="name" stroke="#555" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#555" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#111', border: '1px solid #333', borderRadius: '8px' }}
                itemStyle={{ color: '#fff' }}
              />
              <Area 
                type="monotone" 
                dataKey="clicks" 
                stroke="#6366F1" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorClicks)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ icon, label, value, change }: any) => (
  <div className="bg-[#111] p-6 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-all group text-left">
    <div className="flex justify-between items-start mb-4">
      <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
        {icon}
      </div>
      <span className="text-xs font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded-md">{change}</span>
    </div>
    <p className="text-gray-500 text-sm font-medium">{label}</p>
    <p className="text-2xl font-bold mt-1 text-white">{value}</p>
  </div>
);