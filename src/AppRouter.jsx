import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Menu from './pages/Menu';
import Meals from './pages/Meals';
import Favourites from './pages/Favourites';
import MealGenerator from './pages/MealGenerator';

export const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About Me', component: AboutMe },
  { path: '/menu', name: 'Menu', component: Menu },
  { path: '/meals', name: 'Meals', component: Meals },
  { path: '/favourites', name: 'My Favourites', component: Favourites },
  { path: '/meal-generator', name: 'Meal Generator', component: MealGenerator },
];

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <div className='container'>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={<route.component />} />
          ))}
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;
