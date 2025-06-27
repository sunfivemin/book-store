export const CATEGORIES = [
  { id: 0, name: '전체' },
  { id: 1, name: '동화' },
  { id: 2, name: '소설' },
  { id: 3, name: '사회' },
] as const;

export type Category = (typeof CATEGORIES)[number]['name'];
