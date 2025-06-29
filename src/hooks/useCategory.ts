import { useEffect, useState } from 'react';
import { fetchCategory } from '@/api/category.api';
import { toast } from 'react-hot-toast';
import type { Category } from '@/models/category.model';

export const useCategory = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetchCategory()
      .then(category => {
        if (!category) return;
        // '전체'를 맨 앞에 추가, 나머지는 모두 그대로 추가 (category_id: 0도 포함)
        const categoryWithAll: Category[] = [
          { category_id: -1, category_name: '전체' },
          ...category,
        ];
        setCategories(categoryWithAll);
      })
      .catch(() => {
        toast.error('카테고리 정보를 불러오지 못했습니다.');
      });
  }, []);

  return { categories };
};
