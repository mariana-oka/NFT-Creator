import { useContext } from 'react';
import styled from 'styled-components';
// Create a NFT gallery page with JSX
import Input from "../components/Input";
import {useState} from 'react';
import { AppContext } from '../contexts/index';
import { useNavigate } from 'react-router-dom';

const ProfileEdit = () => {
  const [formData, setFormData] = useState([]);
  const { state, dispatch } = useContext(AppContext);
  const [user] = useState(state.user);

  const navigate = useNavigate();

  /// registers what is inputted in the input fields 
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value
    })
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    await dispatch.updateUser({
      ...formData,
      id: state.user.id,
      walletAddress: state.user.walletAddress
    });

    navigate('/nft-gallery');
  }

  return (
    <FormWrapper onSubmit={event => handleSubmit(event)}>
      <h3>Edit profile</h3>
      <p>Manage your personal settings</p> 
      {/* <h5>Profile photo</h5> */}
      <UploadPhoto>
        <label>Profile photo </label>
        <Input
          type="text"
          id="avatarUrl"
          placeholder="Paste image URL to update"
          handleChange={handleChange}
        />
      </UploadPhoto>
      <UploadPhoto>      
        <label>Cover photo</label>
        <Input
          type="text"
          id="coverPhotoUrl"
          placeholder="Paste image URL to update"
          handleChange={handleChange}
        />
      </UploadPhoto>
      {/* Upload photo field  */}
      <h5>Account info</h5> 
      <label>Display name</label>
      <Input
          type="text"
          id="username"
          //add current name as placeholder
          placeholder={user.username} 
          handleChange={handleChange}
        />
      <label>Bio</label>
      <Input
          type="text"
          id="bio"
          placeholder={user.bio}
          handleChange={handleChange}
        />
      <label>Portfolio or website</label>
      <Input
          type="text"
          id="portfolioLink"
          placeholder={user.portfolioLink}
          handleChange={handleChange}
        />
      <button type="submit">Update Profile</button>
    </FormWrapper>
  );
}

// Set text aligned to the left for PageIntro


// Make the form wrapper children into two columns 
const FormWrapper = styled.form`
  //center all the content inside 
  display: flex;
  flex-direction: column;
  align-items: center;
  //add a standard amount of margin top and bottom
  padding: 20px 30px 20px 30px;
  height: 100%;

  @media (max-width: 768px) {
      margin-bottom: 32px;
      padding-bottom: 16px;
      border-bottom: 1px solid #E6E8EC; 
  }
  h3 {
    margin-bottom: 42px;
    font-size: 32px;
    font-weight: 700;
    color: white;

  }

  h5 {
    margin-bottom: 30px;
    font-size: 16px;
    font-weight: 700;
    color: white;
  }
  p {
    margin-bottom: 32px;
    font-size: 16px;
    font-weight: 400;
    color: white;
    margin-top: 16px;
  }

  input   {
    margin-top: 8px;
    margin-bottom: 20px;
    font-size: 16px;
    border-radius: 20px;
    width: 410px;
    border: 2px solid #353945;
    padding: 12px;
    margin: 16px 0px;
  }

  button {
    margin-top: 24px;
  }`;

// const LeftColumn = styled.div`
//   width: 50%;
//   padding-right: 32px;
//   @media (max-width: 768px) {
//     width: 100%;
//     padding-right: 0;
//   }

// `;

// const RightColumn = styled.div`
//   width: 50%;
//   padding-left: 32px;
//   @media (max-width: 768px) {
//     width: 100%;
//     padding-left: 0;
//   }
// `;

const UploadPhoto = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  align-items: center;
  padding: 0 10vw;
  h5 {
    margin-top: 2rem;
    margin-bottom: 2rem;
    color: white;
  }
`;

export default ProfileEdit;