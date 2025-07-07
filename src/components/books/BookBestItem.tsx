import type { Book } from '@/models/book.model';
import BookItem from './BookItem';

interface BookBestItemProps {
  book: Book;
  itemIndex: number;
}

function BookBestItem({ book, itemIndex }: BookBestItemProps) {
  return (
    <div className="relative">
      <BookItem
        book={book}
        view="grid"
        showSummary={false}
        showPrice={false}
        showLikes={false}
      />
      <div className="absolute top-2 left-2 bg-yellow-400 text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center shadow">
        {itemIndex + 1}
      </div>
    </div>
  );
}

export default BookBestItem;
