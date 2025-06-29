import { useCategory } from '@/hooks/useCategory';
import { useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/Button/Button';

function BooksFilter() {
  const { categories } = useCategory();
  const [searchParams, setSearchParams] = useSearchParams();

  // 현재 선택된 카테고리 id
  const currentCategoryId = searchParams.get('category_id');
  const currentIdNum = currentCategoryId !== null ? Number(currentCategoryId) : -1;

  // 카테고리 변경
  const handleCategory = (id: number | null) => {
    const newSearchParams = new URLSearchParams(searchParams);
    if (id === -1 || id === null) {
      newSearchParams.delete('category_id');
    } else {
      newSearchParams.set('category_id', id.toString());
    }
    setSearchParams(newSearchParams);
  };

  // 신간 필터 토글
  const handleNews = () => {
    const newSearchParams = new URLSearchParams(searchParams);
    const current = newSearchParams.get('news') === 'true';
    newSearchParams.set('news', (!current).toString());
    setSearchParams(newSearchParams);
  };

  const newsActive = searchParams.get('news') === 'true';

  return (
    <div className="flex gap-4 items-center flex-wrap">
      <div className="category flex gap-2">
        {categories.map(item => (
          <Button
            size="md"
            intent={currentIdNum === item.category_id ? 'primary' : 'elevated'}
            key={item.category_id}
            onClick={() => handleCategory(item.category_id)}
          >
            {item.category_name}
          </Button>
        ))}
      </div>
      <div className="new">
        <Button
          size="md"
          intent={newsActive ? 'primary' : 'elevated'}
          onClick={handleNews}
        >
          신간
        </Button>
      </div>
    </div>
  );
}

export default BooksFilter; 