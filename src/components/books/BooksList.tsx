import type { Book } from '@/models/book.model';
import BookItem from './BookItem';

interface BooksListProps {
  books: Book[];
}

function BooksList({ books }: BooksListProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {books.map(book => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
}

export default BooksList; 