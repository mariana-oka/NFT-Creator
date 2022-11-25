import styled from 'styled-components';


const Footer = () => {
  return (
    <Wrapper>
      <h3>Footer</h3>
    </Wrapper>
  );
}

//Create a styled component for the homepage
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default Footer;