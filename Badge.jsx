import React from 'react';

export const Badge = ({ children }) => (
  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
    {children}
  </span>
);