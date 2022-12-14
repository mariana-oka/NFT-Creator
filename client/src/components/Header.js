import react from 'react';
import styled from 'styled-components';

//Create a header component with jsx that has a logo to the extreme left and a blue button at the extreme right that links to the Login page
const Header = () => {
  return (
    <Wrapper>
      {/* add logo image  */}
      <img src="https://res.cloudinary.com/dk9mn4cvz/image/upload/v1669738927/logo_o1ssgy.svg" alt="logo" />
      <Button>Button</Button>
    </Wrapper>
  );
}

//Create a styled component for the header
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 20px;
  background-color: #141416;

`;
//Create a styled component for the logo
const Logo = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

//Create a styled component for the button
const Button = styled.button`
  background-color: #0077FF;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 700;
`;

export default Header;
