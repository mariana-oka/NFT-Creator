import styled from 'styled-components';


//Create JSX for the homepage that has the text and button to the left and a picture to the right, centered in the middle of the page.
const Homepage = () => {
  return (
    <Wrapper>
      <Left>
        <h5>Make your own NFT</h5>
        <h1>Upload your artwork and create your own NFT</h1>
        <p>The free and easy way to create a wallet and start minting</p> 
        <button>Get Started</button>
      </Left>
      <Right>
        <img src="https://res.cloudinary.com/dk9mn4cvz/image/upload/v1669346080/img_avmw6w.png" alt="NFT" />
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
  
  padding: 0 10vw;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5vw;
  }

`;

//Create a styled component for the text and button to the left of the homepage.
const Left = styled.div`
  width: 50%;
  h5 {
    text-transform: uppercase;
    line-height: 1;
    color: #777E90;

  }

  h1 {
    line-height: 1.16667;
    color: #FCFCFD
  }

  p {
    color: #777E90;
    margin-bottom: 2rem;
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    list-style: 24px;
    font-weight: 400;
  }

  button {
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
    }

    &:active {
      background: #1e3a8a;
    }

    &:focus {
      outline: none;
    }

  }
`;

//Create a styled component for the picture to the right of the homepage.
const Right = styled.div`
  width: 50%;
  img {
    width: 100%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export default Homepage;
