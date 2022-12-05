import styled from 'styled-components';
import { useContext } from "react";
import { AppContext } from '../contexts/index';

//Create JSX for the homepage that has the text and button to the left and a picture to the right, centered in the middle of the page.
const Homepage = () => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <Wrapper>
      <Left>
        <h5>Make your own NFT</h5>
        <h1>Start minting your art</h1>
        <p>The easiest way to create a wallet and start minting</p> 

      </Left>
      <Right>
        <img src="https://res.cloudinary.com/dk9mn4cvz/image/upload/v1670025916/animation_500_lb6qm1m6_u7n4x2.gif" alt="NFT" />
      </Right>
    </Wrapper>
  );
};

//Make the homepage responsive to different screen sizes.
//Create a styled component for the homepage that has the text and button to the left and a picture to the right, centered in the middle of the page.
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #141416;
  width: 100vw;
  /* align-content : center; */
  /* margin: 0; */
  //add as much padding as most professional websites
`;

//Create a styled component for the text and button to the left of the homepage.
const Left = styled.div`
  flex: 30%;
  /* display: flex; */
  /* flex-direction: column;
  justify-content: center; */
  align-items: flex-start;
  border: 10px solid red;
  
  h5 {
    /* padding-left: 100px; */
    width: 100%;
    text-transform: uppercase;
    line-height: 1;
    color: #777E90;
    margin-left: 100px;
  }
  
  h1 {
    width: 100%;
    margin-left: 100px;
    /* padding-left: 100px; */
    line-height: 1.16667;
    color: #FCFCFD
  }
  
  p {
    width: 100%;
    margin-left: 100px;
    /* padding-left: 100px; */
    color: #777E90;
    margin-bottom: 2rem;
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    list-style: 24px;
    font-weight: 400;
  }
  
  button {
    /* width: 100%; */
    margin-left: 100px;
    /* margin-left: 100px; */
    height: 48px;
    /* padding: 0 24px; */
    background: #3772ff;
    font-family: 'DM Sans', sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    color: #fcfcfd;
    transition: all 0.2s;

    &:hover {
      background: #2e5ed6;
      /* margin-left: 100px; */
    }
    &:active {
      /* margin-left: 100px; */
      background: #1e3a8a;
    }

    &:focus {
      /* margin-left: 100px; */
      outline: none;
    }

    //make it mobile responsive
    @media (max-width: 768px) {
      /* margin-left: 10px; */
      h5 { 
        font-size: 12px;
      }

      h1 {
        font-size: 15px;
      }

      p {
        font-size: 12px;
      }

      button {
        font-size: 12px;
      }
  }
  }
`;

//Create a styled component for the picture to the right of the homepage.
const Right = styled.div`
  flex: 10%;
  margin-right: 5rem;
  img {
    width: 80%;
  }

  @media (max-width: 768px) {
    img { 
      display: none;       
    }
  }
`;

export default Homepage;
