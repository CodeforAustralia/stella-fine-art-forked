import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
const Home = lazy(() => import('./Pages/Home/home'));
const Artist = lazy(() => import('./Pages/Artist/artist'));

const Commissions = lazy(() => import('./Pages/Commissions/commissions'));

const Contact = lazy(() => import('./Pages/Contact/contact'));

const FrequentlyAskedQuestions = lazy(() =>
  import('./Pages/FrequentlyAskedQuestions/frequently-asked-questions'),
);

// painting droupdown menu items link
const Nature = lazy(() => import('./Pages/Paintings/Nature/nature'));

const Florals = lazy(() => import('./Pages/Paintings/Florals/florals'));

const WildLife = lazy(() => import('./Pages/Paintings/WildLife/wild-life'));

const MasterCopies = lazy(() =>
  import('./Pages/Paintings/Mastercopies/master-copies'),
);

const Portraits = lazy(() => import('./Pages/Paintings/Portraits/portraits'));

const Petportraits = lazy(() =>
  import('./Pages/Paintings/PetPortraits/pet-portraits'),
);

const Sold = lazy(() => import('./Pages/Paintings/Sold/sold'));

const App = () => {
  return (
    <div>
      <Suspense
        fallback={
          <div className="container-loader">
            <div className="flex">
              <div className="loader"></div>
            </div>
            <div className="load-text">Loading...</div>
          </div>
        }>
        <Router>
          <Navbar />

          {/* new  */}
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/artist" element={<Artist />} />

            <Route path="/commissions" element={<Commissions />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/faquestions" element={<FrequentlyAskedQuestions />} />

            <Route path="/nature" element={<Nature />} />

            <Route path="/florals" element={<Florals />} />

            <Route path="/wildlife" element={<WildLife />} />

            <Route path="/mastercopies" element={<MasterCopies />} />

            <Route path="/portraits" element={<Portraits />} />

            <Route path="/petportraits" element={<Petportraits />} />

            <Route path="/sold" element={<Sold />} />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
};
export default App;
