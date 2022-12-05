import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../contexts/index';
import {Link, useNavigate} from "react-router-dom";
// import { useParams } from 'react-router-dom';


const NFTGallery = () => {
  const { state, dispatch} = useContext(AppContext);
  const [nfts, setNfts] = useState([]);
  const [user] = useState(state.user);
  console.log(user)

  // const id = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch
      .findNfts()
      .then(data => setNfts(data))
  }, []);


  return (
    <NFTGalleryContainer>
      <CoverPhoto>
        <EditProfileBtn
          onClick={() => navigate(`/profile-edit`)}
          >
          Edit profile</EditProfileBtn>
        <CoverPhotoImage src={user.coverPhotoUrl ? user.coverPhotoUrl : "https://images.unsplash.com/photo-1622737133809-d95047b9e673?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"}/>
      </CoverPhoto>
      <ProfileBody>
        <ProfileBodyLeft>
          <UserProfileBlock>
            <UserProfilePic src={user.avatarUrl ? user.avatarUrl : "https://res.cloudinary.com/dk9mn4cvz/image/upload/v1670221773/Default-User-Profile_zprhan.png"}/>
            <Username>{user.username}</Username>            
            <UserWalletAddress
            >{user.walletAddress.substring(0,11)}...{user.walletAddress.substring(37,41)}</UserWalletAddress> 
            <UserBio>{user.bio}</UserBio>
            <a href={user.portfolioLink}>Website </a>
          </UserProfileBlock>
        </ProfileBodyLeft>
        <ProfileBodyRight>
          <NFTGalleryWrapper>
            {nfts.length > 0 && nfts.map((nft) => (
              <NFTCard 
                onClick={() => navigate(`/nfts/${nft.id}`)}
                key={nft.id}>
                { nft.uri ? <NFTImage src={nft.uri}/> : <NFTImage src="https://res.cloudinary.com/dk9mn4cvz/image/upload/v1670025933/animation_640_lb6qly2q_xhp4p9.gif"/>}
                <NFTName >{nft.name.substring(0, 14)}</NFTName>
              </NFTCard>
            ))}
          </NFTGalleryWrapper>
        </ProfileBodyRight>
      </ProfileBody>

    </NFTGalleryContainer>
  );
};



const Username = styled.h5`
  color: #FAFC77;
  font-size: 20px;
`;

const DivForTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 16px;

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
  width: 75%;
  margin-top: 20px;
`;

const UserProfileBlock = styled.div`
  position: absolute;
  top: 36%;
  left: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #0A0A0C;
  border-radius: 16px;
  padding: 20px;
  width: 280px;
  /* height: 340px; */
  z-index: 1;

  a:hover {
    color: #FAFC77;
    text-decoration: underline;
  }
  // add separation between its children 
  & > * {
    margin-bottom: 5px;
  }
`;

const UserProfilePic = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;  
`;

const UserWalletAddress = styled.p`
  color: white;
  font-size: 14px;
  margin-top: 10px;
`;

const UserBio = styled.p`
  color: #777E90;
  font-size: 16px;
  margin-bottom: 16px;
`;


const EditProfileBtn = styled.button`
  position: absolute;
  bottom: 10px;
  right: 3%;
  background-color: transparent;
  /* background-color: #141416; */
  color: white;
  border: 2px solid white;
  border-radius: 20px;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    border: none;
    background-color: #3772FF;
    right: 3%;
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
  width: 100%;
  flex-direction: column;
  align-items: center;
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
  border: 1px solid red;
`;

const NFTCard = styled.div`
// add gaps in between the NFTCards
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 400px;
  margin: 18px;
  border: 1px solid #353945;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const NFTImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  margin-left: 20px;
  border-radius: 16px;

`;

const NFTName = styled.h2`
  color: white;
  font-size: 18px;
  margin-top: 28px;
  font-weight: 400;
  font-family: 'DM Sans', sans-serif;
`;

// const NFTDescription = styled.p`
//   color: white;
//   font-size: 1rem;
//   font-weight: 400;
//   margin: 1rem 0;
// `;

export default NFTGallery;


