import { FaHeart } from 'react-icons/fa';
import type { BookDetail } from '@/models/book.model';

import * as styles from './LikeButton.css';

interface Props {
  book: BookDetail;
  onClick: () => void;
}

function LikeButton({ book, onClick }: Props) {
  return (
    <button className={styles.button} onClick={onClick}>
      <FaHeart
        className={book.liked ? styles.heartActive : styles.heart}
        size={14}
      />
      <span>{book.likes}명</span>
    </button>
  );
}

export default LikeButton;
