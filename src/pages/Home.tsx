import { formatNumber } from '../utils/format';

const COUNT = 10000;

function Home() {
  return (
    <>
      <div>book</div>
      <div>count: {formatNumber(COUNT)}</div>
    </>
  );
}

export default Home;
