import { AppSurface } from '@samina/ui';
import { SideBar } from '../components/SideBar';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header/Header';

export function App() {
  return (
    <AppSurface>
      <SideBar />
      <main className="grow">
        <Header />
        <Outlet />
      </main>
    </AppSurface>
  );
}

export default App;
