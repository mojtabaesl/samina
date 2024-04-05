import { AppSurface } from '@samina/ui';
import { SideBar } from '../components/sideBar/SideBar';

export function App() {
  return (
    <AppSurface>
      <main className="grow">main</main>
      <SideBar />
    </AppSurface>
  );
}

export default App;
