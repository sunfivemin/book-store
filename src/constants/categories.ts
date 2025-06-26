export const CATEGORIES = ['전체', '동화', '소설', '사회'] as const;
export type Category = (typeof CATEGORIES)[number];
