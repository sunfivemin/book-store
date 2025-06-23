import { app } from '@/styles/App.css';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/Button/Button';
import Home from '@/pages/Home';
import Detail from '@/pages/Detail';
import DarkModeToggle from '@/components/ui/DarkModeToggle';
import { ThemeProvider } from '@/providers/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <div className={app}>
        <h1>Hello, Vanilla Extract + Tailwind Variants!</h1>
        <Layout>
          <Home />
          <Detail />
          <DarkModeToggle />
          <Button intent="primary" size="sm">
            Primary Small
          </Button>
          <Button intent="danger" size="md">
            Danger Medium
          </Button>
          <Button intent="ghost" size="lg">
            Ghost Large
          </Button>
          <p className="font-kkokghae text-lg">이건 꽃게체입니다</p>
          <p className="font-pretendard text-base">이건 프리텐다드입니다</p>
          <p className="font-serifk italic">이건 세리프체입니다</p>
          <div className="bg-white text-black dark:bg-black dark:text-white">
            다크모드 테스트
          </div>
        </Layout>
      </div>
    </ThemeProvider>
  );
}

export default App;
