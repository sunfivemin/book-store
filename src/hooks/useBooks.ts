import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import type { Book } from '@/models/book.model';
import type { Pagination } from '@/models/pagination.model';
import { fetchBooks } from '@/api/books.api';
import { QUERYSTRING } from '@/constants/querystring';

// 한 페이지에 보여줄 도서 수 (실무에서는 상수로 분리)
const LIMIT = 20;

/**
 * useBooks 훅
 * - 쿼리스트링(category_id, news, page)에 따라 도서 목록과 페이지네이션 정보를 관리
 * - 관심사 분리: 데이터 패칭/상태 관리(훅) vs UI(컴포넌트)
 * - 강의/실전 스타일 모두에서 추천하는 구조
 */
export const useBooks = () => {
  // 도서 목록 상태
  const [books, setBooks] = useState<Book[]>([]);
  // 페이지네이션 상태
  const [pagination, setPagination] = useState<Pagination>({
    totalCount: 0,
    currentPage: 1,
  });

  // 쿼리스트링이 변경될 때마다 도서 목록/페이지네이션 갱신
  const location = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const rawCategoryId = params.get(QUERYSTRING.CATEGORY_ID);
    const categoryIdNum = Number(rawCategoryId);

    // fetchBooks: API에서 도서 목록/페이지네이션 정보 받아오기
    fetchBooks({
      category_id:
        !rawCategoryId || categoryIdNum < 1 || isNaN(categoryIdNum)
          ? undefined
          : categoryIdNum,
      news: params.get(QUERYSTRING.NEWS) === 'true' ? true : undefined,
      currentPage: params.get(QUERYSTRING.PAGE)
        ? Number(params.get(QUERYSTRING.PAGE))
        : 1,
      limit: LIMIT,
    }).then(res => {
      setBooks(res.books);
      setPagination(res.pagination);
    });
  }, [location.search]);

  // 반환값: 도서 목록과 페이지네이션 정보
  return { books, pagination };
};

/*
  [실전/강의 팁]
  - 쿼리스트링 상수화로 오타/유지보수 리스크 최소화
  - 훅에서 모든 데이터/상태 관리 → 컴포넌트는 UI만 map
  - API 연동 실패 시 에러 처리, 로딩 처리 등도 훅에서 일괄 관리 가능
  - 확장: 정렬, 검색, 필터 등 쿼리스트링만 추가하면 구조 변경 없이 확장 가능
*/
