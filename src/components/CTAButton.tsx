import { ReactNode } from 'react';

interface CTAButtonProps {
  href: string;
  variant?: 'primary' | 'secondary';
  children: ReactNode;
}

export function CTAButton({ href, variant = 'primary', children }: CTAButtonProps) {
  const baseClasses = "inline-flex px-8 py-4 rounded-lg font-bold text-lg transition-all";
  
  const variantClasses = variant === 'primary' 
    ? "bg-red-600 text-white hover:bg-red-700" 
    : "bg-gray-900 text-white hover:bg-gray-800";

  return (
    <a href={href} className={`${baseClasses} ${variantClasses}`}>
      {children}
    </a>
  );
}
