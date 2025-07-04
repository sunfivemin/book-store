export {}; // 글로벌 스코프 오염 방지

declare global {
  interface Window {
    daum: {
      Postcode: new (config: {
        oncomplete: (data: { address: string }) => void;
      }) => {
        open: () => void;
      };
    };
  }
}
