import type { Book } from '@/models/book.model';
import BookBestItem from '../books/BookBestItem';

interface Props {
  books: Book[];
}

function MainBest({ books }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {books.map((item, index) => (
        <BookBestItem key={item.id} book={item} itemIndex={index} />
      ))}
    </div>
  );
}

export default MainBest;
