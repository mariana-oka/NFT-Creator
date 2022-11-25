import styled from 'styled-components';

const Card = () => {
  return (
    <Wrapper>
      <h1>Card</h1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default Card;