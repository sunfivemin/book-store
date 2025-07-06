import { useForm } from 'react-hook-form';
import type { BookReviewItemWrite } from '@/models/book.model';
import { Button } from '@/components/ui/Button/Button';
import * as styles from './BookReview.css';
import { toast } from 'react-hot-toast';

interface Props {
  onAdd: (data: BookReviewItemWrite) => void | Promise<void>;
}

function BookReviewAdd({ onAdd }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookReviewItemWrite>();

  const onSubmit = async (data: BookReviewItemWrite) => {
    try {
      await onAdd(data);
      toast.success('리뷰가 등록되었습니다.');
      reset();
    } catch {
      toast.error('리뷰 등록에 실패했습니다.');
    }
  };

  const onError = () => {
    if (errors.content) toast.error('리뷰 내용을 입력해주세요.');
    if (errors.score) toast.error('평점을 선택해주세요.');
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className={styles.reviewForm}
    >
      <fieldset>
        <textarea
          {...register('content', { required: true })}
          placeholder="리뷰를 입력하세요"
          className={styles.textarea}
          rows={4}
        />
      </fieldset>

      <fieldset className={styles.formFooter}>
        <select
          {...register('score', { required: true, valueAsNumber: true })}
          className={styles.select}
        >
          <option value="">점수 선택</option>
          <option value={5}>5점 - 최고예요</option>
          <option value={4}>4점 - 좋아요</option>
          <option value={3}>3점 - 괜찮아요</option>
          <option value={2}>2점 - 별로예요</option>
          <option value={1}>1점 - 최악이에요</option>
        </select>

        <Button size="md" intent="primary">
          작성하기
        </Button>
      </fieldset>
    </form>
  );
}

export default BookReviewAdd;
