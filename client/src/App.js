import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import NFTMaker from "./pages/NFTMaker";
import ProfileEdit from "./pages/ProfileEdit";
import ProfileGallery from "./pages/ProfileGallery";
import Confirmation from "./components/Confirmation";
import Error from "./components/Error";
import { AppContext } from './contexts/index';

const App = () => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <BrowserRouter>
      <button 
        onClick={() => dispatch.login()}
      >
        {state.userLoggedIn ? 'Log Out' : 'Log In'}
      </button>
      <GlobalStyles />
      <Header />
      <Main>
        <Routes>
          <Route path={"/"} element={<Homepage />} />
          <Route path={"/nft-maker"} element={<NFTMaker />} />
          <Route path={"/confirmation"} element={<Confirmation />} /> 
          <Route path={"/profile-gallery"} element={<ProfileGallery />} />
          <Route path={"/profile-edit"} element={<ProfileEdit />} />
          <Route path={"/confirmation"} element={<Confirmation />} />
          <Route path={"*"} element={<Error />} />
        </Routes>
      </Main>
      <Footer />
    </BrowserRouter>
  );
};

const Main = styled.div`
  background-color: white;
`;

export default App;