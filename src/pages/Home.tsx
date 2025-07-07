import Banners from '@/components/common/Banners/Banners';
import Title from '@/components/common/Title';
import MainBest from '@/components/main/MainBest';
import MainNewBooks from '@/components/main/MainNewBooks';
import MainReview from '@/components/main/MainReview';
import { useMain } from '@/hooks/useMain';
// import { useMediaQuery } from '@/hooks/useMediaQuery';

export default function Home() {
  const { reviews, newBooks, bestBooks, banners } = useMain();
  // const { isMobile } = useMediaQuery();

  // console.log('isMobile', isMobile);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '46px',
      }}
    >
      {/* banner */}
      <Banners banners={banners} />

      {/* bestseller */}
      <section>
        <Title size="lg" color="primary" weight="bold">
          베스트셀러
        </Title>
        <MainBest books={bestBooks} />
      </section>

      {/* 신간 */}
      <section>
        <Title size="lg" color="primary" weight="bold">
          신간 안내
        </Title>
        <MainNewBooks books={newBooks} />
      </section>

      {/* review */}
      <section>
        <Title size="lg" color="primary" weight="bold">
          리뷰
        </Title>
        <MainReview reviews={reviews}></MainReview>
      </section>
    </div>
  );
}
