import styled from 'styled-components';


const Footer = () => {
  return (
    <FooterWrapper>
      <h6>Made with love in Montreal ❤️ </h6>
    </FooterWrapper>
  );
}

//Create a footer Wrapper that always shows at the bottom of the page and its contents are centered.
  const FooterWrapper = styled.div`
    background-color: #141416;
    color: white;
    text-align: center;
    height: 100px;


    h6 {
      color: white;
      margin-top: 280px;
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