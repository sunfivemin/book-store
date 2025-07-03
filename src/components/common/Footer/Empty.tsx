import type { ReactNode } from 'react';
import * as styles from './Empty.css';
import Title from '../Title';

interface Props {
  icon?: ReactNode;
  title: string;
  description?: ReactNode;
}

function Empty({ icon, title, description }: Props) {
  return (
    <div className={styles.emptyContainer}>
      {icon && <div className={styles.iconBox}>{icon}</div>}
      <Title size="lg" color="secondary">
        {title}
      </Title>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}

export default Empty;
