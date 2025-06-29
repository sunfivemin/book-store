import type { Book } from '@/models/book.model';
import { getImgSrc } from '@/utils/image';
import { formatNumber } from '@/utils/format';
import { Heart } from 'lucide-react';

interface BookItemProps {
  book: Book;
}

function BookItem({ book }: BookItemProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col h-full">
      <div className="aspect-[3/4] bg-gray-100 rounded mb-3 flex items-center justify-center overflow-hidden min-h-[200px]">
        <img
          src={getImgSrc(book.id)}
          alt={book.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col gap-1">
        <div className="font-bold text-base truncate">{book.title}</div>
        <div className="text-xs text-gray-500">{book.author}</div>
        <div className="text-xs text-gray-400 truncate">{book.summary}</div>
      </div>
      <div className="flex items-center justify-between mt-3">
        <span className="font-semibold text-sm">{formatNumber(book.price)}원</span>
        <span className="text-xs flex items-center gap-1">
          <Heart className="text-red-400 fill-red-400" size={16} />
          {book.likes}
        </span>
      </div>
    </div>
  );
}

export default BookItem; 