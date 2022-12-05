import styled from 'styled-components';

const Error = () => {
  return (
    <Wrapper>
      <h1>404</h1>
      <h2>Page not found</h2>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #141416;
`;

export default Error;