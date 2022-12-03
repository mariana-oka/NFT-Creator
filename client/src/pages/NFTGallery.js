import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../contexts/index';
import {Link, useNavigate} from "react-router-dom";
// import { useParams } from 'react-router-dom';


const NFTGallery = () => {
  const { state, dispatch} = useContext(AppContext);
  const [nfts, setNfts] = useState([]);
  const [user] = useState(state.user);
  // const id = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch
      .findNfts()
      .then(data => setNfts(data))
  }, []);

  //fetch the user from the database

  //Create a cover image at the top of the page, add a EditCoverPhoto button and a EditProfile button 
  // Create a block with the user information like username, wallet address, bio and website,
  // Add a block overlapping the cover slightly and to the right of the gallery, that contains user profile picture and user details below it
  return (
    <NFTGalleryContainer>
      <CoverPhoto>
        <EditProfileBtn
          onClick={() => navigate(`/profile-edit`)}
          >
          Edit profile</EditProfileBtn>
        <CoverPhotoImage src="https://images.unsplash.com/photo-1622737133809-d95047b9e673?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" />
      </CoverPhoto>

      <ProfileBody>
        <ProfileBodyLeft>
          <UserProfileBlock>
            <UserProfilePic src="https://images.unsplash.com/photo-1622737133809-d95047b9e673?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" />
            <h5>{user.name}</h5>            
            <UserWalletAddress>{user.walletAddress}</UserWalletAddress> 
            <UserBio>Artist and farm owner in Montana.</UserBio>
            <UserWebsite>https://www.google.com</UserWebsite>
          </UserProfileBlock>
        </ProfileBodyLeft>
        <ProfileBodyRight>
          <NFTGalleryWrapper>
            <DivForTitle>
              <h4>Gallery</h4>
            </DivForTitle>
            {nfts.length > 0 && nfts.map((nft) => (
              <NFTCard 
                onClick={() => navigate(`/nfts/${nft.id}`)}
                key={nft.id}>
                <NFTImage src={nft.uri} />
                <NFTName >{nft.name.substring(0, 14)}</NFTName>
              </NFTCard>
            ))}
          </NFTGalleryWrapper>
        </ProfileBodyRight>
      </ProfileBody>

    </NFTGalleryContainer>
  );
};

//make div for title take up the whole width of the gallery
const DivForTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 16px;

  //place the h4 at the extreme left of the container
  h4 {
    left:15px;
    font-size: 1.5rem;
  }     

`;

const ProfileBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ProfileBodyLeft = styled.div`
  display: flex;
  flex-direction: row;
  width: 30%;
  `;

const ProfileBodyRight = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
`;

const UserProfileBlock = styled.div`
  position: absolute;
  top: 20%;
  left: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #101012;
  border-radius: 16px;
  padding: 20px;
  width: 300px;
  height: 300px;
  z-index: 1;
`;

const UserProfilePic = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  
`;

const UserWalletAddress = styled.p`
  color: white;
  font-size: 1.2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const UserBio = styled.p`
  color: white;
  font-size: 1.2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const UserWebsite = styled.p`
  color: white;
  font-size: 1.2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;




const EditCoverBtn = styled.button`
  position: absolute;
  bottom: 10px;
  right: 8em;
  background-color: transparent;
  color: white;
  border: none;
  border-radius: 20px;
  /* border: 1px solid white; */
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    background-color: #3772FF
  }
`;


const EditProfileBtn = styled.button`
  position: absolute;
  bottom: 10px;
  right: 1em;
  background-color: transparent;
  /* background-color: #141416; */
  color: white;
  border: 2px solid white;
  border-radius: 20px;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    border: none;
    background-color: #3772FF
  }
`;

const CoverPhoto = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  background-color: #141416;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoverPhotoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const NFTGalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10vw;
  h4 {
    margin-top: 2rem;
    margin-bottom: 2rem;
    color: white;
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
// add gaps in between the NFTCards

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 400px;
  margin: 1rem;
  border: 1px solid #353945;
  cursor: pointer;


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
  color: white;
  font-size: 16px;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
`;

const NFTDescription = styled.p`
  color: white;
  font-size: 1rem;
  font-weight: 400;
  margin: 1rem 0;
`;

export default NFTGallery;


