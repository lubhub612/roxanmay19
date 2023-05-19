import React, { useEffect, useState } from 'react';
import './index.css';
import {
  Route,
  Routes,
  Navigate,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { Header } from './components/Header_v2';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { HomeV2 } from './pages/Home_v2';
import { Details } from './pages/Details';
import { Offer } from './pages/Offer';
import { SellDetails } from './pages/SellDetails';
import { Profile } from './pages/Profile';
import { Settings } from './pages/Settings';
import { UploadNFT } from './pages/UploadNFT';
import { MyStery } from './pages/MyStery';
import { Stats } from './pages/Stats';
import { CreateSignup } from './pages/CreateSignup';
import { ListItemForSale } from './pages/ListItemForSale';
import { Collections } from './pages/Collections';
import { Creators } from './pages/Creators';
import { CollectionDetails } from './pages/CollectionDetails';
import { CollectionCreator } from './pages/CollectionCreator';
import Ai from './pages/Ai';

import ToastListener from './components/Toast';
import { useAuth } from './contexts/AuthContext';
import { Viewcollection } from './pages/ViewCollection';
import { googleAnalyticsActions } from './utils/google_analytics';
import { CollectionV2 } from './pages/Collection_v2';
import { CollectionV2Det } from './pages/Collection_v2Details';
import { SingleProduct } from './pages/SingleProduct';
import { AiSubscription } from './pages/AiSubscription';
import { Reward } from './pages/Reward';
import { BuyToken } from './pages/BuyToken';

export const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    // update the data-theme attribute on the html element
    document.documentElement.setAttribute('data-theme', theme);
    // save the theme state in local storage
    localStorage.setItem('theme', theme);
  }, [theme]);
  function toggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }
  // const { auth } = useAuth();
  // const navigate = useNavigate();

  // React.useEffect(() => {
  // if (auth.isLoggedIn === false) {
  //   console.log('---------------------');
  //   navigate('/');
  // }
  // }, [auth.isLoggedIn])

  useEffect(() => {
    googleAnalyticsActions.initGoogleAnalytics('UA-239541283-1');
  }, []);

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route exact path="/" element={<Navigate to="/home" />}></Route>
        <Route exact path="/explorer" element={<Home />}></Route>
        <Route exact path="/offer" element={<Home />}></Route>
        <Route exact path="/ai" element={<Ai />}></Route>
        <Route exact path="/create-signup" element={<CreateSignup />}></Route>
        <Route exact path="/profile/:address" element={<Profile />}></Route>
        <Route exact path="/settings" element={<Settings />}></Route>
        <Route exact path="/upload" element={<UploadNFT />}></Route>
        <Route
          exact
          path="/products/:collection/:tokenId/:saleId/buy"
          element={<Details category="buy" />}
        ></Route>
        <Route
          exact
          path="/products/:collection/:tokenId/:saleId/bid"
          element={<Details category="bid" />}
        ></Route>
        <Route
          exact
          path="/products/:collection/:tokenId/offer"
          element={<Offer />}
        ></Route>
        <Route
          exact
          path="/products/:collection/:tokenId/sell"
          element={<SellDetails />}
        ></Route>
        <Route
          exact
          path="/products/:collection/:tokenId/sale"
          element={<ListItemForSale />}
        ></Route>
        <Route exact path="/mystery" element={<MyStery />}></Route>
        <Route exact path="/stats" element={<Stats />}></Route>
        <Route
          exact
          path="/collections"
          element={<CollectionV2 filter="all" />}
        ></Route>
        <Route exact path="/creators" element={<Creators />}></Route>
        <Route
          exact
          path="/my-collections"
          element={<CollectionV2 filter="owner" />}
        ></Route>
        <Route
          exact
          path="/my-collections/create"
          element={<CollectionCreator />}
        ></Route>
        <Route
          exact
          path="/collections/:contractAddress"
          element={<CollectionDetails />}
        ></Route>
        <Route
          exact
          path="/viewcollection/:address"
          element={<Viewcollection />}
        ></Route>
        <Route exact path="/home" element={<HomeV2 />}></Route>
        {/* <Route exact path="/collections_v2" element={<CollectionV2 filter="all" />}></Route> */}
        <Route
          exact
          path="/collections-details"
          element={<CollectionV2Det />}
        ></Route>
        <Route exact path="/single-product" element={<SingleProduct />}></Route>
        <Route
          exact
          path="/ai-subscription"
          element={<AiSubscription />}
        ></Route>
        <Route exact path="/reward" element={<Reward />}></Route>
        <Route exact path="/buy-roxan-token" element={<BuyToken />}></Route>
      </Routes>
      <ToastListener />
      <Footer theme={theme} toggleTheme={toggleTheme} />
    </>
  );
};
