import { useContext } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import NFTMaker from "./pages/NFTMaker";
import ProfileEdit from "./pages/ProfileEdit";
import NFTGallery from "./pages/NFTGallery";
import Confirmation from "./pages/Confirmation";
import Error from "./pages/Error";
import { AppContext } from './contexts/index';
import NFT from "./pages/NFT";

const App = () => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <BrowserRouter>
    <Wrapper>
      <Nav>
        {/* Logo img goes here to the left */}
        <Logo 
          src="https://res.cloudinary.com/dk9mn4cvz/image/upload/v1669738927/logo_o1ssgy.svg" 
          alt="logo"
          onClick={() => {
            window.location.href = '/'; 
          }}
        />
        <Button 
          onClick={() => state.session.userLoggedIn ? dispatch.logout() : dispatch.login()}
        >
          {state.session.userLoggedIn ? 'Log Out' : 'Log In'}
        </Button>
        {
          state.session.userLoggedIn && (
            <Link to="nft-gallery">
              Profile
            </Link>
          )
        }
              {
          state.session.userLoggedIn && (
            <Link to="nft-maker">
              Generator
            </Link>
          )
        }
      </Nav>
        <GlobalStyles />
        {/* <Header /> */}
        <Main>
          <Routes>
            <Route path={"/"} element={<Homepage />} />
            {
              state.session.userLoggedIn && (
                <>
                  <Route path={"/nft-maker"} element={<NFTMaker />} />
                  <Route path={"/confirmation"} element={<Confirmation />} /> 
                  <Route path={"/nft-gallery"} element={<NFTGallery />} />
                  <Route path={"/profile-edit"} element={<ProfileEdit />} />
                  <Route path={"/nfts/:id"} element={<NFT />} />
                </>
              )
            }
            <Route path={"*"} element={<Error />} />
          </Routes>
        </Main>
        <Footer />
      </Wrapper>
    </BrowserRouter>
  );
};


const Wrapper = styled.div`
  background-color: #141416;
  `;
  
const Main = styled.div`
  background-color: #141416;
`;

const Logo = styled.img`
  height: 80px;
  margin-right: 300px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #141416;

  //align links to the right side of the page
  a {
    margin-right: 1rem;
    color: white;
    font-size: 1rem;
    font-family: 'DM Sans', sans-serif;
    text-decoration: none;
    //all caps
    /* text-transform: uppercase; */
    padding-left: 2rem;
  }

    &:hover {
      text-decoration: none;
      color: yellow;

  }

`;


//Style the links and button to the extreme right of the page 
const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
`;      


export default App;