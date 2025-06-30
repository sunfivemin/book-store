import Title from '@/components/common/Title';
import { mainContainer } from '@/components/layout/layout.css';
import { useBook } from '@/hooks/useBook';
import { useParams } from 'react-router-dom';

function BookDetail() {
  const { bookId } = useParams();
  const { book } = useBook(bookId);
  console.log(book);
  if (!book) return null;

  return (
    <section className={mainContainer}>
      <div className="flex justify-between items-center w-full">
        <Title size="lg" color="primary">
          {book.title}
        </Title>
      </div>
    </section>
  );
}

export default BookDetail;
