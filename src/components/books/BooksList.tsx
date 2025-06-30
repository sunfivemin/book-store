import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import type { Book } from '@/models/book.model';
import BookItem from './BookItem';
import { QUERYSTRING } from '@/constants/querystring';
import type { ViewMode } from './BooksViewSwitcher';

interface BooksListProps {
  books: Book[];
}

function BooksList({ books }: BooksListProps) {
  const [view, setView] = useState<ViewMode>('grid');
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const value = params.get(QUERYSTRING.VIEW);
    if (value === 'grid' || value === 'list') {
      setView(value as ViewMode);
    }
  }, [location.search]);

  return (
    <div
      className={
        view === 'grid'
          ? 'grid w-full grid-cols-2 md:grid-cols-4 gap-6 items-stretch'
          : 'flex flex-col gap-4 w-full'
      }
    >
      {books.map(book => (
        <BookItem key={book.id} book={book} view={view} />
      ))}
    </div>
  );
}

export default BooksList;
