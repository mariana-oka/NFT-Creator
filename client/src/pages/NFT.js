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
      <iframe
        title="iframe"
        src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=dracula-pro&wt=none&l=javascript&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=contractAddress%253A%25200x55a8dbe6f191b370885d01e30cb7d36d0fa99f16%250AtokenId%253A%252010878"
        style={{width: '647px', height: '223px', border: 0, transform: 'scale(1)', overflow: 'hidden '}}
        sandbox="allow-scripts allow-same-origin">
      </iframe>
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
