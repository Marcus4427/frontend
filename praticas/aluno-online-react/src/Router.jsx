import { useEffect, useState } from 'react';

import AppSite from './AppSite';
import Login from './pages/Login/Login';

export default function Router() {
  const [path, setPath] = useState(() => window.location.pathname);

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  if (path === '/login') return <Login />;

  return <AppSite />;
}

