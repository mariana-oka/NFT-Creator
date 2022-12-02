import styled from 'styled-components';


const Footer = () => {
  return (
    <FooterWrapper>
      <h6>Made with love in Canada ❤️ </h6>
    </FooterWrapper>
  );
}

//Create a footer Wrapper with a maximum height of 100px and a background color of #141416
  const FooterWrapper = styled.div`
    height: 100px;
    background-color: #141416;
    display: flex;
    justify-content: center;
    align-items: center;

    h6 {
      color: white;
    }
  `;

// const Wrapper = styled.div`
/* 
  max-height: 20px;
  background-color: #141416;

  h6 {
    margin-left: 2rem;
    color: white; */

//   }
// `;

export default Footer;