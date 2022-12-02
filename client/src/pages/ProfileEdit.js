import styled from 'styled-components';
// Create a NFT gallery page with JSX
import Input from "../components/Input";
import {useState} from 'react';

const ProfileEdit = ({ handleSubmit }) => {
  const [formData, setFormData] = useState();

  /// registers what is inputted in the input fields 
  const handleChange = (key, value) => {
    setFormData({
        ...formData,
        [key]: value
    })
}
return (
  <FormWrapper onSubmit={(e) => handleSubmit(e, formData)}>
    <Top>
      <h3>Edit profile</h3>
      <p>You can set preferred display name and manage your personal settings</p> 
    </Top>
    <ProfilePicColumn>
      <h5>Profile photo</h5>
      <p> We recommend an image of at least 400x400</p>
        <UploadPhoto>
          <label>Upload photo</label>
          <Input
            type="file"
            id="file"
            placeholder="Upload photo"
            required={true}
            handleChange={handleChange}
          />

        </UploadPhoto>
      </ProfilePicColumn>
        {/* Upload photo field  */}
        <ProfileInfoColumn>
          <p>You can set preferred display name and manage your personal settings</p> 
          <h5>Account info</h5> 
          <label>Display name</label>
          <input type="text" placeholder="Enter your display name" />
          <label>Bio</label>
          <input type="text" placeholder="Enter your bio" />
          <label>Portfolio or website</label>
          <input type="text" placeholder="Enter URL" />
          <button type="submit">Update Profile</button>
        </ProfileInfoColumn>
  </FormWrapper>
);
}

// Set text aligned to the left for PageIntro
const Top = styled.div` 
  margin-bottom: 64px; 
// create mobile sized
  @media (max-width: 768px) {
      margin-bottom: 32px;
      padding-bottom: 16px;
      border-bottom: 1px solid #E6E8EC; 
  }
  h3 {
    font-size: 32px;
    font-weight: 700;
    color: white;

  }
  p {
    font-size: 16px;
    font-weight: 400;
    color: white;
    margin-top: 16px;
  }
`;


const FormWrapper = styled.div`
  display: flex;
  //center form
  max-width: 896px;
  //make the child elements relative to the wrapper
  position: relative;
  h5 {
    margin-top: 2rem;
    color: white;

  }
`;


const ProfilePicColumn = styled.div`
  //make this element relative to the wrapper
  position: relative;
  flex-direction: column;
  align-items: center;
  /* padding: 0 10vw; */
  h5 {
    margin-top: 2rem;
    margin-bottom: 2rem;
    color: white;
  }

`;

const UploadPhoto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10vw;
  h5 {
    margin-top: 2rem;
    margin-bottom: 2rem;
    color: white;

  }

`;

const ProfileInfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10vw;
  h5 {
    margin-top: 2rem;
    margin-bottom: 2rem;
    color: white;

  }
`;



export default ProfileEdit;