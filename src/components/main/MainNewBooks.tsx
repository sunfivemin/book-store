import type { Book } from '@/models/book.model';
import BookItem from '../books/BookItem';

interface Props {
  books: Book[];
}

function MainNewBooks({ books }: Props) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '16px',
      }}
    >
      {books.map(book => (
        <BookItem key={book.id} book={book} view="grid" />
      ))}
    </div>
  );
}

export default MainNewBooks;
