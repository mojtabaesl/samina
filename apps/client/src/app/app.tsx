import { AppSurface, Stack } from '@samina/ui';
import { SideBar } from '../components/SideBar';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header/Header';

export function App() {
  return (
    <AppSurface>
      <SideBar />
      <main className="grow">
        <Header />
        <Stack className="p-8">
          <Outlet />
        </Stack>
      </main>
    </AppSurface>
  );
}

export default App;
