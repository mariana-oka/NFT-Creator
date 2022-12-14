import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components"
import Input from "./Input"
import { AppContext } from "../contexts/index";

/// renders the form component
const Form = () => {
    const { state, dispatch } = useContext(AppContext);
    const [formData, setFormData] = useState({});
    const [ filePreview, setFilePreview ] = useState(null);
    const navigate = useNavigate();

/// registers what is inputted in the input fields 
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.id]: event.target.value
        })
    }

    const handleFileUpload = (event) => {
        const fr = new FileReader();
        const file = event.target.files[0];
        setFormData({
            ...formData,
            file
        })

        fr.readAsDataURL(event.target.files[0]);
        fr.onloadend = async (event) => {
            const dataUrl = event.currentTarget.result
            setFilePreview(dataUrl)
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        dispatch.createNft({
            name: formData.name,
            description: formData.description,
            file: formData.file,
            walletAddress: state.user.walletAddress,
            userId: state.user.id,
        });
        
        navigate('/confirmation');
    }

    return (  
       /// onSubmit, sends the formData component with handleSubmit function
    <>
    <StyledForm onSubmit={(event) => handleSubmit(event)}>
        <Div>
                {/* {create a drag and drop uploader component to Upload file} */}

                <label>Upload file</label>
                <FileUploadSquare>
                    { filePreview && (
                        <img 
                            src={filePreview} 
                            width="100"
                            height="100"
                            alt="preview"
                            style={{ position: 'absolute' }}
                        />
                    )}
                    { !filePreview && <UploaderTxt>????  Drop a file to upload</UploaderTxt>}
                    <input
                        type="file" 
                        id="file"
                        placeholder="Upload file"
                        required="true"
                        onChange={(event) => handleFileUpload(event)} 
                        style={{ opacity: 0, width: '100%', height: '100%' }}
                    />
                </FileUploadSquare>
                {/* <h5>Item Details</h5> */}
                <label>NFT Name</label>
                <Input 
                    type="text" 
                    placeholder="The Mona Lisa"
                    required={true}
                    handleChange={handleChange} 
                    id="name"
                />
                <label>Description</label>
                <Input 
                    type="text" 
                    placeholder="The greatest painting of all time"
                    required={true}
                    handleChange={handleChange} 
                    id="description"
                />
            {/* the Submit button fires the handleSubmit function */}
            <button type="submit">Create Now</button>
            </Div>
        </StyledForm>
    </>
    );
}

const UploaderTxt = styled.p `
    //center in container 
    position: absolute;
    top: 25%;
`

const FileUploadSquare = styled.div`
// position its children in the middle 
    font-family: 'DM Sans', sans-serif;
    font-size: 16px;
    border-radius: 20px;
    /* border: 3px solid white !important; */
    color: white;
    text-align: center;
    background-color: #232730;
    position: relative;
    //center children in container
    justify-items: center;
    width: 440px;
    height: 100px;
    display: flex;
    justify-content: center;
`;

const StyledForm = styled.form`
    width: 440px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    border-radius: 52px;
    font-size: 16px;

    label {
        margin-bottom: 10px;
        margin-top: 15px;
    }
`;

const Div = styled.div`
    display: flex;
    flex-direction: column;
    button {
        margin-top: 26px;
        padding: 20px 30px;
//center button in container
        margin-left: auto;
        margin-right: auto;
        border-radius: 18px;

    }
    button:hover {
        color: white;
        font-weight: 900;
        background-image: linear-gradient(90deg, #00C0FF 0%, #FFCF00 49%, #FC4F4F 80%, #00C0FF 100%);
        animation:slidebg 2s linear infinite;

        @keyframes slidebg {
        to {
        background-position:20vw;
        }
        }
    }
`;


export default Form;