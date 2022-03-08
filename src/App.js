import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MarketplaceHomepage from "./pages/MarketplaceHomepage";
import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { useDispatch } from "react-redux";
import { fetchUserCryptoInfo, fetchUserSolInfo } from "./features/userSlice";
import Marketplace from "./components/marketplace/Marketplace";
import NFTs from "./pages/NFTs";
import Collection from "./pages/Collection";
import City from "./pages/City";

// import { SolAuthModal } from "./components/marketplace/SolAuthModal";

function App() {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useMoralis();
  const [showAuthModal, showSolAuthModal] = useState(false);

  useEffect(() => {
    if (user?.get("solAddress")) dispatch(fetchUserSolInfo());
    if (user?.get("ethAddress")) dispatch(fetchUserCryptoInfo());
  }, [user]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/cities/:slug" element={<City />} />
      <Route path="/marketplace" element={<Marketplace />}>
        <Route path="" element={<MarketplaceHomepage />} />
        <Route path="nfts" element={<NFTs />} />
        <Route path="collection/:slug" element={<Collection />} />
      </Route>
    </Routes>
  );
}

export default App;
