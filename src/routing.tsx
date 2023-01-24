import { Route, Routes } from 'react-router-dom';
import { HomePage } from './routes/homePage/homePage.route';
import { Navigation } from './routes/navigation/navigation.component';

export const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};
