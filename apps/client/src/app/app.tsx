import { AppSurface } from '@samina/ui';
import { SideBar } from '../components/SideBar';
import { Outlet } from 'react-router-dom';

export function App() {
  return (
    <AppSurface>
      <SideBar />
      <main className="grow">
        <Outlet />
      </main>
    </AppSurface>
  );
}

export default App;
