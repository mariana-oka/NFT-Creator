import styled from "styled-components";

//Create a confirmation page with JSX with a centered image and a h2 below that says "Your NFT is being minted. Please wait for confirmation." with a centered button that says "Go to Profile" that will redirect to the dashboard page.
const Confirmation = () => {
  return (
    <ConfirmationWrapper>
      <LoadingImage>
        <img src="https://res.cloudinary.com/dk9mn4cvz/image/upload/v1669927379/animation_640_lb5jluub_vclruw.gif" alt="confirmation" />
      </LoadingImage>
      <h2>Minting in progress</h2>
      <h5> We are working on it. Please wait for confirmation</h5>
      <button>Go to Profile</button>
    </ConfirmationWrapper>
  );   
};

const ConfirmationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #141416;

  h2 {
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: white;
    margin-bottom: 1rem;

  }

  h5 {
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: white;
    margin-bottom: 1rem;
  }

  button {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

const LoadingImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  margin-bottom: 1rem;
`;

export default Confirmation;