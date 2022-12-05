import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AppContext } from '../contexts/index';

const NFT = () => {
  const id = useParams();
  const { state, dispatch} = useContext(AppContext);
  const [nft, setNft] = useState([]);
  const navigate = useNavigate();
  
  //Create a useEffect and use the dispatch to get the individual nft data from the database based on the id
  useEffect(() => {
    dispatch
      .getNft(id)
      .then(data => setNft(data))
  }, []);

  const handleDelete = async () => {
    await dispatch.deleteNft(nft.id);
    navigate('/nft-gallery');
  }

  // Create an individual NFT details page that displays the NFT image to the left and the NFTname, definition and creator to the right
  return (
    <NFTContainer>
      <NFTWrapper>
      <NFTCard key={nft.id}>
        <NFTPreview>
          <BackButton onClick={() => navigate('/nft-gallery')}>← Back</BackButton>
          <NFTImage src={nft.uri}/>
        </NFTPreview>
        <NFTDetails>
          <NFTName>{nft.name}</NFTName>
          <NFTDescription>{nft.description}</NFTDescription>
          <NFTCreator>{nft.creator}</NFTCreator>
          <BlockExplorer>
            <a href={nft.blockExplorerUrl} target="_blank" rel="noreferrer">View on blockchain 👁</a>
          </BlockExplorer>
          <DeleteButton
            onClick={handleDelete}>Delete from gallery</DeleteButton>
        </NFTDetails>
        </NFTCard>  
      </NFTWrapper>     
    </NFTContainer>
  );
};

const BackButton = styled.button`
  color: #141416;
  border: none;
  color: #fff;
  background-color: #141416;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    color: #141416;
    background-color: white;
  } 
  `;
const DeleteButton = styled.button`
  background: transparent;
  border: 2px solid #595C64;
  border-radius: 15px;
  color: #595C64;
  margin-top: 20px;
  
// on hover change the background color to #595C64 and the text color to white
  &:hover {
    background: #EF466F;
    border: none;
    color: white;
  }
  `;

// Have a two columns inside the NFTCard, one to the left called leftcolumn and one to the right called rightcolumn
const NFTPreview = styled.div`
`;

const NFTDetails  = styled.div`
  align-items: flex-start;
  //add a standard amount of margin top and bottom
  padding: 20px 30px 20px 30px;
`;

const BlockExplorer = styled.h5`
  margin-top: 26px;

  a:hover {
    color: #FAFC77;
    text-decoration: underline;
;
  }

`;

const NFTContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  `;

const NFTWrapper = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const NFTCard = styled.div`
  align-items: center;
  width: 400px;
  height: 500px;
  margin-bottom: 1rem;
  border: 1px solid #eaeaea;
  border-radius: 30px;
  padding: 20px 30px 20px 30px;
`;

const NFTImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  color: black;
  border-radius: 16px;
`;

const NFTName = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: 20px;
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
