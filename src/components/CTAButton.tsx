import { ReactNode } from 'react';

interface CTAButtonProps {
  href: string;
  variant?: 'primary' | 'secondary';
  children: ReactNode;
}

export function CTAButton({ href, variant = 'primary', children }: CTAButtonProps) {
  const baseClasses = "inline-flex px-8 py-4 rounded-lg font-bold text-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-xl";
  
  const variantClasses = variant === 'primary' 
    ? "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 shadow-red-600/30" 
    : "bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-500";

  return (
    <a href={href} className={`${baseClasses} ${variantClasses}`}>
      {children}
    </a>
  );
}
