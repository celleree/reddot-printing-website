import { ReactNode } from 'react';

interface BenefitBlockProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function BenefitBlock({ icon, title, description }: BenefitBlockProps) {
  return (
    <div className="bg-white rounded-xl p-6 sm:p-8 border-2 border-gray-100 hover:border-red-200 hover:shadow-xl transition-all group">
      <div className="w-14 h-14 rounded-xl bg-red-600 text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg shadow-red-600/20">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
