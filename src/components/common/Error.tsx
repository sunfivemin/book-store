import { useRouteError, Link } from 'react-router-dom';

interface RouteError {
  statusText?: string;
  message?: string;
}

function Error() {
  const error = useRouteError() as RouteError;

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-4">
      <h1 className="text-4xl font-bold mb-4">😢 오류가 발생했습니다.</h1>
      <p className="text-lg mb-2">다음과 같은 오류가 발생했어요:</p>
      <p className="text-red-600 mb-6">{error.statusText || error.message}</p>
      <Link
        to="/"
        className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}

export default Error;
