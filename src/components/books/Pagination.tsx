import type { Pagination as IPagination } from '../../models/pagination.model';
import { LIMIT } from '../../constants/pagination';
import { QUERYSTRING } from '../../constants/querystring';
import { Button } from '../ui/Button/Button';
import { useSearchParams } from 'react-router-dom';

interface Props {
  pagination: IPagination;
}

/**
 * Pagination 컴포넌트
 * - 전체 도서 수(totalCount)와 한 페이지당 도서 수(LIMIT)로 전체 페이지 수 계산
 * - 쿼리스트링(page) 기반으로 페이지 이동
 * - 강의/실전 스타일 모두에서 추천하는 구조
 */
function Pagination({ pagination }: Props) {
  const { totalCount, currentPage } = pagination;
  const [searchParams, setSearchParams] = useSearchParams();
  const pages: number = Math.ceil(totalCount / LIMIT);

  // 페이지 버튼 클릭 시 쿼리스트링(page) 변경
  const handleClickPage = (page: number) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set(QUERYSTRING.PAGE, page.toString());
    setSearchParams(newSearchParams);
  };

  // 페이지가 1개 이하면 렌더링하지 않음
  if (pages <= 1) return null;

  const PaginationStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 24,
  };

  return (
    <nav style={PaginationStyle}>
      <ol style={{ display: 'flex', gap: 8, listStyle: 'none', padding: 0 }}>
        {Array(pages)
          .fill(0)
          .map((_, index) => (
            <li key={index}>
              <Button
                size="sm"
                intent={currentPage === index + 1 ? 'primary' : 'elevated'}
                onClick={() => handleClickPage(index + 1)}
              >
                {index + 1}
              </Button>
            </li>
          ))}
      </ol>
    </nav>
  );
}

export default Pagination;

/*
  [실전/강의 팁]
  - 쿼리스트링 기반 페이지 이동으로 새로고침/공유/뒤로가기 UX가 우수함
  - LIMIT, QUERYSTRING 등 상수 분리로 유지보수성 향상
  - 페이지가 1개 이하일 때는 렌더링하지 않아 UX 개선
  - Button 등 공통 컴포넌트 활용으로 디자인 일관성 유지
*/ 