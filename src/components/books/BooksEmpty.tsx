import { Smile } from 'lucide-react';
import Title from '@/components/common/Title';

function BooksEmpty() {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <Smile className="w-16 h-16 text-gray-300 mb-4" data-testid="books-empty-icon" />
      <Title size="lg" color="secondary">
        검색 결과가 없습니다.
      </Title>
    </div>
  );
}

export default BooksEmpty; 