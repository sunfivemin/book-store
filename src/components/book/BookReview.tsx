import type {
  BookReviewItem as BookReviewItemType,
  BookReviewItemWrite,
} from '@/models/book.model';
import BookReviewItem from './BookReviewItem';
import BookReviewAdd from './BookReviewAdd';
import * as styles from './BookReview.css';

interface Props {
  reviews: BookReviewItemType[];
  onAdd: (data: BookReviewItemWrite) => void;
}

function BookReview({ reviews, onAdd }: Props) {
  return (
    <div className={styles.reviewList}>
      <BookReviewAdd onAdd={onAdd} />
      {reviews.length === 0 ? (
        <p className={styles.empty}>등록된 리뷰가 없습니다.</p>
      ) : (
        reviews.map(review => (
          <BookReviewItem key={review.id} review={review} />
        ))
      )}
    </div>
  );
}

export default BookReview;
