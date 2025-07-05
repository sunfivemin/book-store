// src/components/book/BookReviewItem.tsx
import type { BookReviewItem as BookReviewItemType } from '@/models/book.model';
import { formatDate } from '@/utils/format';
import * as styles from './BookReview.css';
import Star from './Star';

interface Props {
  review: BookReviewItemType;
}

function BookReviewItem({ review }: Props) {
  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <p className={styles.user}>{review.userName}</p>
          <Star score={review.score} />
        </div>
        <time className={styles.date}>{formatDate(review.createdAt)}</time>
      </header>
      <p className={styles.content}>{review.content}</p>
    </article>
  );
}

export default BookReviewItem;
