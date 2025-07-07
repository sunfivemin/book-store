import type { Book } from '@/models/book.model';
import BookBestItem from '../books/BookBestItem';

interface Props {
  books: Book[];
}

function MainBest({ books }: Props) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '16px',
      }}
    >
      {books.map((item, index) => (
        <BookBestItem key={item.id} book={item} itemIndex={index} />
      ))}
    </div>
  );
}

export default MainBest;
