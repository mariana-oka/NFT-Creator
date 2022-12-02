import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { AppContext } from '../contexts/index';

const NFT = () => {
  const id = useParams();
  const { state, dispatch} = useContext(AppContext);
  const [nft, setNft] = useState([]);
  
  //Create a useEffect and use the dispatch to get the individual nft data from the database based on the id
  useEffect(() => {
    dispatch
      .getNft(id)
      .then(data => setNft(data))
  }, []);

  // Create an individual NFT details page that displays the NFT image to the left and the NFTname, definition and creator to the right
  return (
    <NFTContainer>
      <NFTWrapper>
      <NFTCard key={nft.id}>
        <LeftColumn>
          <NFTImage src={nft.uri}/>
        </LeftColumn>
        <RightColumn>
          <NFTName>{nft.name}</NFTName>
          <NFTDescription>{nft.description}</NFTDescription>
          <NFTCreator>{nft.creator}</NFTCreator>
        </RightColumn>
        </NFTCard>  
      </NFTWrapper>
    </NFTContainer>
  );
};


// Have a two columns inside the NFTCard, one to the left called leftcolumn and one to the right called rightcolumn
const LeftColumn = styled.div`

`;

const RightColumn  = styled.div`
 
`;

const NFTContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10vw;
  `;

const NFTWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const NFTCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 400px;
  margin: 1rem;
  border: 1px solid #eaeaea;
`;

const NFTImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 1px solid red;
  color: black;
`;

const NFTName = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0.5rem 0;
  border: 1px solid yellow;
  color: white;

`;

const NFTDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  margin: 0.5rem 0;
  color: #777E90;
`;

const NFTCreator = styled.p`
  font-size: 1rem;
  font-weight: 300;
  margin: 0.5rem 0;
  color: white;
`;

export default NFT;
