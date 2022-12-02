import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from 'styled-components';
import Form from "../components/Form";

// Build a jsx form aligned to the left that contains the following fields:
// Upload file
// NFT name 
// NFT Description
// Wallet address 
// Create Item button that will create the NFT


const NFTMaker = () => {
  return (
    <NFTMakerContainer>
      <h4>Generate NFT</h4>
      <Form />
    </NFTMakerContainer>
  );
};

const NFTMakerContainer = styled.div`
//add a standard amount of margin top and bottom
  padding: 20px 30px 20px 30px;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #141416;
  h4 {
    margin-top: 2rem;
    margin-bottom: 2rem;
    color:white;
  }
`;

export default NFTMaker;



