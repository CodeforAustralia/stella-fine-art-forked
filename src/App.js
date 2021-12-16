import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { lazy, Suspense, Fragment } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
const Home = lazy(() => import('./Pages/Home/home'));
const Artist = lazy(() => import('./Pages/Artist/artist'));

const Commissions = lazy(() => import('./Pages/Commissions/commissions'));

const FrequentlyAskedQuestions = lazy(() =>
  import('./Pages/FrequentlyAskedQuestions/frequently-asked-questions'),
);

const App = () => {
  return (
    <Fragment>
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

            <Route path="/faquestions" element={<FrequentlyAskedQuestions />} />
            {/* <Route path='/contact' component={Contact} />

            <Route path='/nature' component={Nature} />

            <Route path='/mastercopies' component={Mastercopies} />

            <Route path='/portraits' component={Portraits} />

            <Route path='/petportraits' component={Petportraits} />

            <Route path='/florals' component={Florals} />

            <Route path='/birdanimal' component={BirdAnimal} />

            <Route path='/sold' component={Sold} />

            <Route path='/faquestions' component={FrequentlyAskedQuestions} />
 */}
          </Routes>
        </Router>
      </Suspense>
    </Fragment>
  );
};
export default App;
