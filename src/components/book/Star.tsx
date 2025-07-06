import { FaStar } from 'react-icons/fa6';
import * as styles from './BookReview.css';

interface Props {
  score: number;
}

function Star({ score }: Props) {
  return (
    <div className={styles.starWrapper}>
      {Array.from({ length: score }).map((_, i) => (
        <FaStar key={i} className={styles.star} />
      ))}
    </div>
  );
}

export default Star;
