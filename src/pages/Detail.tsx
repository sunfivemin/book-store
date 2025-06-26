import { Card } from '@/components/ui/Card/Card';

const Detail = () => {
  return (
    <section className="space-y-6">
      <Card variant="elevated">
        <h2 className="text-lg font-semibold">Elevated Card</h2>
        <p className="text-sm text-gray-600">
          This card has shadow and background.
        </p>
      </Card>

      <Card variant="outline">
        <h2 className="text-lg font-semibold">Outline Card</h2>
        <p className="text-sm text-gray-600">
          This card is transparent with border only.
        </p>
      </Card>

      <Card variant="elevated" padding="lg" shadow="strong" rounded="lg">
        여백 넓고, 그림자 강하고, 라운드 큰 카드
      </Card>

      <Card
        variant="outline"
        interactive
        className="transition-transform hover:scale-105"
      >
        호버 시 확대되는 카드
      </Card>

      <Card
        variant="elevated"
        padding="md"
        shadow="weak"
        rounded="md"
        interactive
      >
        <h2 className="text-xl font-bold mb-2">카드 타이틀</h2>
        <p>여기는 카드 본문입니다.</p>
      </Card>
    </section>
  );
};

export default Detail;
