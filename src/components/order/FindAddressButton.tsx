import { useEffect } from 'react';
import { Button } from '../ui/Button/Button';

interface Props {
  onCompleted: (address: string) => void;
}
const SCRIPT_URL =
  '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';

function FindAddressButton({ onCompleted }: Props) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = SCRIPT_URL;
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleClick = () => {
    new window.daum.Postcode({
      oncomplete: function (data: { address: string }) {
        onCompleted(data.address);
      },
    }).open();
  };

  return (
    <Button
      onClick={handleClick}
      intent="elevated"
      size="md"
      className="h-[42px]"
    >
      주소 찾기
    </Button>
  );
}
export default FindAddressButton;
