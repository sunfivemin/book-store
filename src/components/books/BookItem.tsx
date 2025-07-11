import type { Book } from '@/models/book.model';
import { getImgSrc } from '@/utils/image';
import { formatNumber } from '@/utils/format';
import { Heart } from 'lucide-react';
import type { ViewMode } from './BooksViewSwitcher';
import clsx from 'clsx';
import { Link } from 'react-router';

interface BookItemProps {
  book: Book;
  view: ViewMode;
  showSummary?: boolean;
  showPrice?: boolean;
  showLikes?: boolean;
}

function BookItem({
  book,
  view,
  showSummary = true,
  showPrice = true,
  showLikes = true,
}: BookItemProps) {
  const isList = view === 'list';

  return (
    <div>
      <Link
        to={`/book/${book.id}`}
        className={clsx(
          'bg-white rounded-lg shadow p-4 h-full',
          isList ? 'flex flex-row gap-4 ' : 'flex flex-col'
        )}
      >
        {/* 이미지 */}
        <div
          className={clsx(
            'relative bg-gray-100 rounded overflow-hidden',
            isList
              ? 'w-[120px] h-[160px] flex-shrink-0'
              : 'w-full pt-[133.333%]' // 3:4 비율 유지
          )}
        >
          {book.img ? (
            <img
              src={getImgSrc(String(book.id))}
              alt={book.title}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-xs text-gray-400">
              이미지 없음
            </div>
          )}
        </div>

        {/* 정보 */}
        <div className="flex flex-col flex-1 justify-between gap-1">
          <div>
            <h2 className="font-bold text-base">{book.title}</h2>
            <p className="text-xs text-gray-500">{book.author}</p>
            {showSummary && (
              <p className="text-xs text-gray-400 line-clamp-1">
                {book.summary}
              </p>
            )}
          </div>

          {(showPrice || showLikes) && (
            <div
              className={clsx(
                'flex items-center justify-between mt-3',
                isList && 'mt-auto'
              )}
            >
              {showPrice && (
                <span className="font-semibold text-sm">
                  {formatNumber(book.price)}원
                </span>
              )}
              {showLikes && (
                <span className="text-xs flex items-center gap-1">
                  <Heart className="text-red-400 fill-red-400" size={16} />
                  {book.likes}
                </span>
              )}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}

export default BookItem;
