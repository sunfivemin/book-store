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
        <Layout>
          <Home />
          <Detail />
          <DarkModeToggle />

          <br />
          <Button intent="primary" size="sm">
            Primary Small
          </Button>
          <Button intent="danger" size="md">
            Danger Medium
          </Button>
          <Button intent="ghost" size="lg">
            Ghost Large
          </Button>

          <div className="bg-white text-black dark:bg-slate-600 dark:text-white">
            인라인 다크모드
          </div>
        </Layout>
      </div>
    </ThemeProvider>
  );
}

export default App;
