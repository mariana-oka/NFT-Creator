import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../contexts/index';

const NFTGallery = () => {
  const { state, dispatch} = useContext(AppContext);
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    dispatch
      .findNfts()
      .then(data => setNfts(data))
  }, []);

  return (
    <NFTGalleryContainer>
      <h1>NFT Gallery</h1>
      <NFTGalleryWrapper>
        {nfts.length > 0 && nfts.map((nft) => (
          <NFTCard key={nft.id}>
            <NFTImage src={nft.uri} />
            <NFTName>{nft.name}</NFTName>
            <NFTDescription>{nft.description}</NFTDescription>
          </NFTCard>
        ))}
      </NFTGalleryWrapper>
    </NFTGalleryContainer>
  );
};

const NFTGalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10vw;
  h1 {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

const NFTGalleryWrapper = styled.div`
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

  &:hover {
    border: 1px solid #3772ff;
  }
`;

const NFTImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const NFTName = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 1rem 0;
`;

const NFTDescription = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin: 1rem 0;
`;

export default NFTGallery;


