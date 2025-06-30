import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from '../ui/Button/Button';
import { FaList, FaTh } from 'react-icons/fa';
import { QUERYSTRING } from '@/constants/querystring';

export type ViewMode = 'grid' | 'list';

const viewOptions: { value: ViewMode; icon: React.ReactNode }[] = [
  { value: 'list', icon: <FaList /> },
  { value: 'grid', icon: <FaTh /> },
];

function BooksViewSwitcher() {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentView = searchParams.get(QUERYSTRING.VIEW) as ViewMode | null;

  // 쿼리스트링(view)이 없으면 기본값 'grid'로 설정
  useEffect(() => {
    if (!currentView) {
      handleSwitch('grid');
    }
  });

  // 뷰 전환 버튼 클릭 시 쿼리스트링(view) 변경
  const handleSwitch = (value: ViewMode) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set(QUERYSTRING.VIEW, value);
    setSearchParams(newSearchParams);
  };

  return (
    <div className="flex gap-2">
      {viewOptions.map(option => (
        <Button
          key={option.value}
          size="md"
          intent={currentView === option.value ? 'primary' : 'elevated'}
          onClick={() => handleSwitch(option.value)}
        >
          {option.icon}
        </Button>
      ))}
    </div>
  );
}

export default BooksViewSwitcher;
