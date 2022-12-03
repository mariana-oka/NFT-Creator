import styled from 'styled-components';


//Create JSX for the homepage that has the text and button to the left and a picture to the right, centered in the middle of the page.
const Homepage = () => {
  return (
    <Wrapper>
      <Left>
        <h5>Make your own NFT</h5>
        <h1>Start minting your art</h1>
        <p>The free and easy way to create a wallet and start minting</p> 
        <button>Get Started</button>
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
  /* justify-content: space-between; */
  align-items: center;
  height: 100vh;
  background-color: #141416;
  max-width: 1440px;
  align-content : center;
  //add as much padding as most professional websites
`;

//Create a styled component for the text and button to the left of the homepage.
const Left = styled.div`
  width: 90%;

  h5 {
    text-transform: uppercase;
    line-height: 1;
    color: #777E90;
    margin-left: 5rem;


  }

  h1 {
    margin-left: 5rem;
    line-height: 1.16667;
    color: #FCFCFD
  }

  p {
    margin-left: 5rem;
    color: #777E90;
    margin-bottom: 2rem;
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    list-style: 24px;
    font-weight: 400;
  }

  button {
    margin-left: 5rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    padding: 0 24px;
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
      margin-left: 5rem;
    }

    &:active {
      margin-left: 5rem;
      background: #1e3a8a;
    }

    &:focus {
      margin-left: 5rem;
      outline: none;
    }

    //make it mobile responsive
    @media (max-width: 768px) {
      margin-left: 0;
      h5 { 
        font-size: 12px;
      }

      h1 {
        font-size: 18px;
      }

      p {
        font-size: 12px;
      }

      button {
        font-size: 12px;
      }
  }}
`;

//Create a styled component for the picture to the right of the homepage.
const Right = styled.div`
  width: 50%;
  margin-right: 5rem;
  img {
    width: 100%;
    }

  @media (max-width: 768px) {
    img { 
      display: none;       
    }
  }
`;

export default Homepage;
