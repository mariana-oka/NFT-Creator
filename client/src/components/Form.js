import { useState } from "react";
import styled from "styled-components"
import Input from "./Input"

/// renders the form component
const Form = ({ handleSubmit }) => {
    const [formData, setFormData] = useState();
/// registers what is inputted in the input fields 
    const handleChange = (key, value) => {
        setFormData({
            ...formData,
            [key]: value
        })
    }

    const [ file, setFile ] = useState(null);

    const handleFileUpload = (event) => {
        const fr = new FileReader();

        fr.readAsDataURL(event.target.files[0]);
        fr.onloadend = (event) => {
            const filePath = event.currentTarget.result
            setFile(filePath)
        }
    }

    return (  
       /// onSubmit, sends the formData component with handleSubmit function
    <StyledForm onSubmit={(e) => handleSubmit(e, formData)}>
        <Div>
                {/* {create a drag and drop uploader component to Upload file} */}

                <label>Upload file</label>
                <FileUploadSquare>
                    { file && (
                        <img 
                            src={file} 
                            width="100"
                            height="100"
                            alt="preview"
                            style={{ position: 'absolute' }}
                        />
                    )}
                    { !file && <p>Drop a file below to upload!</p>}
                    <input
                        type="file" 
                        id="file"
                        placeholder="Upload file"
                        required="true"
                        onChange={(event) => handleFileUpload(event)} 
                        style={{ opacity: 0, width: '100%', height: '100%' }}
                    />
                </FileUploadSquare>
                <h4>Item Details</h4>
                <label>NFT Name</label>
                <Input 
                    type="text" 
                    placeholder="The Mona Lisa"
                    required={true}
                    handleChange={handleChange} 
                />
                <label>Description</label>
                <Input 
                    type="text" 
                    placeholder="The greatest painting of all time"
                    required={true}
                    handleChange={handleChange} 
                />
                <label>Wallet address</label>
                <Input 
                    type="text" 
                    placeholder="Wallet address"
                    name={"wallet address"}
                    required={true}
                    handleChange={handleChange} 
                />
            {/* the Submit button fires the handleSubmit function */}
            <button type="submit">Create Now</button>
            </Div>
        </StyledForm>
    );
}

const FileUploadSquare = styled.div`
    font-family: 'inter', sans-serif;
    font-size: 16px;
    border-radius: 48px;
    /* border: 3px solid white !important; */
    padding: 12px;
    margin: 5px 10px;
    color: white;
    text-align: center;
    background-color: #232730;
    
    width: 100%;
    height: 100px;

    display: flex;
    justify-content: center;
`;

const StyledForm = styled.form`
    max-width: 700px;
    margin: 20px 40px 0px 20px;
    padding: 30px;
    display: flex;
    flex-direction: row;
    border-radius: 52px;
    gap: 20px;
    font-size: 16px;
`;

const Div = styled.div`
    display: flex;
    flex-direction: column;
`;


export default Form;