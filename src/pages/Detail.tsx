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
    </section>
  );
};

export default Detail;
