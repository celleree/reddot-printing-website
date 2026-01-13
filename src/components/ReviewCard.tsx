import { Star } from 'lucide-react';

interface ReviewCardProps {
  rating: number;
  quote: string;
  author: string;
  source: 'Google' | 'Yelp';
}

export function ReviewCard({ rating, quote, author, source }: ReviewCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 border-2 border-gray-100 hover:shadow-xl hover:border-red-100 transition-all">
      {/* Stars */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-gray-700 mb-5 leading-relaxed">
        "{quote}"
      </p>

      {/* Author and Source */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white font-bold text-sm">
            {author.charAt(0)}
          </div>
          <div>
            <p className="font-semibold text-gray-900">{author}</p>
            <p className="text-xs text-gray-500">Verified Customer</p>
          </div>
        </div>
        <div className="flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full">
          <span className="text-xs font-semibold text-gray-700">{source}</span>
        </div>
      </div>
    </div>
  );
}
