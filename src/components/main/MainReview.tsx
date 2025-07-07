// src/components/main/MainReview.tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import BookReviewItem from '../book/BookReviewItem';
import type { BookReviewItem as IBookReviewItem } from '@/models/book.model';

interface Props {
  reviews: IBookReviewItem[];
}

function MainReview({ reviews }: Props) {
  return (
    <div className="relative w-full px-8 py-10">
      {/* overflow-hidden 제거 */}
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-next-btn',
          prevEl: '.swiper-prev-btn',
        }}
        pagination={{
          clickable: true,
          el: '.swiper-custom-pagination',
        }}
        autoplay={{ delay: 3000 }}
        loop
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        // className="!overflow-visible"
      >
        {reviews.map(review => (
          <SwiperSlide key={review.id} className="pb-4">
            <BookReviewItem review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* 커스텀 내비게이션 버튼 */}
      <button className="swiper-prev-btn absolute left-[-30px] top-[40%] z-10 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow flex items-center justify-center">
        ←
      </button>
      <button className="swiper-next-btn absolute right-[-30px] top-[40%] z-10 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow flex items-center justify-center">
        →
      </button>
      {/* 커스텀 pagination */}
      <div className="swiper-custom-pagination mt-4 flex justify-center gap-2" />
    </div>
  );
}

export default MainReview;
