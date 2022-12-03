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
      <h3>Edit profile</h3>
      <p>Manage your personal settings</p> 
      {/* <h5>Profile photo</h5> */}
        <UploadPhoto>
          <label>Profile photo </label>
          <Input
            type="file"
            id="file"
            placeholder="Upload photo"
            required={true}
            handleChange={handleChange}
          />
        </UploadPhoto>
        <UploadPhoto>
          <label>Cover photo</label>
          <Input
            type="file"
            id="file"
            placeholder="Upload photo"
            required={true}
            handleChange={handleChange}
          />
        </UploadPhoto>
        {/* Upload photo field  */}
          <h5>Account info</h5> 
          <label>Display name</label>
          <input type="text" placeholder="Enter your display name" />
          <label>Bio</label>
          <input type="text" placeholder="Enter your bio" />
          <label>Portfolio or website</label>
          <input type="text" placeholder="Enter URL" />
          <button type="submit">Update Profile</button>
  </FormWrapper>
);
}

// Set text aligned to the left for PageIntro


// Make the form wrapper children into two columns 
const FormWrapper = styled.div`
//center all the content inside 
display: flex;
flex-direction: column;
align-items: center;
//add a standard amount of margin top and bottom
padding: 20px 30px 20px 30px;
height: 90vh;

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


`;

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
  h5 {i
    margin-top: 2rem;
    margin-bottom: 2rem;
    color: white;

  }
`;



export default ProfileEdit;