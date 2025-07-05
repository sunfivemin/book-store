// src/components/book/BookReview.tsx
import type { BookReviewItem as BookReviewItemType } from '@/models/book.model';
import BookReviewItem from './BookReviewItem';
import * as styles from './BookReview.css';

interface Props {
  reviews: BookReviewItemType[];
}

function BookReview({ reviews }: Props) {
  return (
    <div className={styles.reviewList}>
      {reviews.length === 0 ? (
        <p className={styles.empty}>등록된 리뷰가 없습니다.</p>
      ) : (
        reviews.map(review => (
          <div key={review.id}>
            <BookReviewItem review={review} />
          </div>
        ))
      )}
    </div>
  );
}

export default BookReview;
