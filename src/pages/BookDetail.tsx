import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import toast from 'react-hot-toast';

import { useBook } from '@/hooks/useBook';
import { getImgSrc } from '@/utils/image';
import { formatDate, formatNumber } from '@/utils/format';
import type { BookDetail as IBookDetail } from '@/models/book.model';

import * as styles from './BookDetail.css';
import LikeButton from '@/components/book/LikeButton';
import { Modal } from '@/components/ui/Modal/Modal';
import AddToCart from '@/components/book/AddToCart';

interface BookInfoItem {
  label: string;
  key: keyof IBookDetail;
  filter?: (book: IBookDetail) => React.ReactNode;
}

const bookInfoList: BookInfoItem[] = [
  {
    label: '카테고리',
    key: 'category_name',
    filter: (book: IBookDetail) => (
      <Link
        to={`/books?category_id=${book.category_id}`}
        className={styles.link}
      >
        {book.category_name}
      </Link>
    ),
  },
  { label: '포맷', key: 'form' },
  { label: '페이지', key: 'pages' },
  { label: 'ISBN', key: 'isbn' },
  {
    label: '출간일',
    key: 'pub_date',
    filter: (book: IBookDetail) => formatDate(book.pub_date),
  },
  {
    label: '가격',
    key: 'price',
    filter: (book: IBookDetail) => `${formatNumber(book.price)} 원`,
  },
];

function BookDetail() {
  const { bookId } = useParams<{ bookId: string }>();
  const { book, isLoading, error, likeOrUnlike, isLoggedIn } = useBook(bookId);

  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleLikeClick = () => {
    if (!isLoggedIn) {
      setModalOpen(true); // ✅ 여기서만 모달 제어
      return;
    }
    likeOrUnlike(); // ✅ 좋아요 토글
    toast.success('좋아요를 눌렀습니다!');
  };

  if (isLoading || !book) {
    return (
      <section className={styles.container}>
        <div className={styles.skeleton} />
      </section>
    );
  }

  if (error) {
    return (
      <section className={styles.container}>
        <p className={styles.error}>책 정보를 불러오는 데 실패했습니다.</p>
      </section>
    );
  }

  return (
    <section className={styles.container}>
      <header className={styles.layout}>
        <div className={styles.imageWrapper}>
          <img
            src={getImgSrc(book.img)}
            alt={book.title}
            className={styles.image}
          />
        </div>

        <div className={styles.content}>
          <h1 className={styles.bookTitle}>{book.title}</h1>

          <dl className={styles.dl}>
            {bookInfoList.map(item => (
              <div key={item.key} className={styles.dlRow}>
                <dt className={styles.dlLabel}>{item.label}</dt>
                <dd className={styles.dlValue}>
                  {item.filter
                    ? item.filter(book)
                    : book[item.key as keyof IBookDetail]}
                </dd>
              </div>
            ))}
          </dl>

          <p className={styles.text}>{book.summary}</p>

          <div className={styles.likeRow}>
            <LikeButton book={book} onClick={handleLikeClick} />
          </div>

          <AddToCart book={book} />
        </div>
      </header>

      <section>
        <h2 className={styles.sectionTitle}>상세 설명</h2>
        <pre className={styles.pre}>{book.detail}</pre>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>목차</h2>
        <pre className={styles.pre}>{book.contents}</pre>
      </section>

      {/* ✅ 로그인 필요 모달 */}
      <Modal
        open={isModalOpen}
        backdrop="dark"
        className="w-[300px] text-center"
      >
        <p className="mb-4">로그인이 필요합니다</p>
        <button
          className="text-blue-500 underline text-sm"
          onClick={() => navigate('/login')}
        >
          로그인하러 가기
        </button>
      </Modal>
    </section>
  );
}

export default BookDetail;
