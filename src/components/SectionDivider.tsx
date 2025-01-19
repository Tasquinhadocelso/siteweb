import React from 'react';

export default function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-12 bg-white">
      <div className="flex items-center space-x-4">
        <div className="h-0.5 w-12 bg-primary/30"></div>
        <div className="w-2 h-2 rounded-full bg-primary"></div>
        <div className="h-0.5 w-12 bg-primary/30"></div>
      </div>
    </div>
  );
}