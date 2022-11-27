import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from '../src/pages/Profile';
import About from './pages/About';
import Community from './pages/Community';
import Sawi from './pages/Sawi';
import { ABOUT, COMMUNTIY, HOME, LOGIN, REGISTER, SAWI, PROFILE } from './routes';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Home />} path={HOME} />
        <Route element={<About />} path={ABOUT} />
        <Route element={<Community />} path={COMMUNTIY} />
        <Route element={<Sawi />} path={SAWI} />
        <Route element={<Login />} path={LOGIN} />
        <Route element={<Register />} path={REGISTER} />
        <Route element={<Profile />} path={PROFILE} />
        <Route element={<Sawi />} path={SAWI} />
      </Routes>
    </>
  );
}

export default App;
