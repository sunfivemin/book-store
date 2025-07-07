import type { Book } from '@/models/book.model';
import BookItem from '../books/BookItem';

interface Props {
  books: Book[];
}

function MainNewBooks({ books }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {books.map(book => (
        <BookItem key={book.id} book={book} view="grid" />
      ))}
    </div>
  );
}

export default MainNewBooks;
