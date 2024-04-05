import { AppSurface } from '@samina/ui';
import { SideBar } from '../components/SideBar';

export function App() {
  return (
    <AppSurface>
      <SideBar />
      <main className="grow">main</main>
    </AppSurface>
  );
}

export default App;
