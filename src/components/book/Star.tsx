// src/components/book/Star.tsx
import { FaStar } from 'react-icons/fa';
import * as styles from './BookReview.css';

interface Props {
  score: number;
}

function Star({ score }: Props) {
  return (
    <div className={styles.starWrapper}>
      {Array.from({ length: score }).map((_, index) => (
        <FaStar key={index} className={styles.star} />
      ))}
    </div>
  );
}

export default Star;
