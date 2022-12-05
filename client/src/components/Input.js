import styled from "styled-components"

// renders the input field for the form
const Input = ({type, placeholder, name, required, id, handleChange}) => {
    return (
        <StyledInput 
            type={type} 
            placeholder={placeholder} 
            required={required} 
            // send the text to form with handleChange
            id={id}
            onChange={(event) => handleChange(event)}
        />
    )
}

const StyledInput = styled.input`
    font-size: 16px;
    border-radius: 20px;
    width: 410px;
    border: 2px solid #353945;
    padding: 12px;
    margin: 16px 0px;

    &:focus {
    outline: none;
    border: 2px solid #779FFF;
    }
`;

export default Input