import { Routes, Route } from 'react-router-dom';
import AppRoutes from './routes';

function App() {
  return (
    <Routes>
      {AppRoutes.map((appRoute) => {
        return (
          <Route
            key={appRoute.id}
            path={appRoute.path}
            element={appRoute.page}
          />
        );
      })}
    </Routes>
  );
}

export default App;
