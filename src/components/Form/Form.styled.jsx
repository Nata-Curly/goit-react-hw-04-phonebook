import styled from '@emotion/styled';

export const AddContactForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
gap: 15px;`

export const Label = styled.label`
text-align: center;`

export const Btn = styled.button`
padding: 5px 10px;
width: 110px;
cursor: pointer;
font-size: 16px;
line-height: 1.2;
font-weight: 500;
letter-spacing: -0.01em;
color: black;
background-color: #cbbfbf4d;
border: none;
border-radius: 10px;
filter: drop-shadow(0px 4px 4px #00000040);
transition-property: color, background-color;
transition-duration: 250ms;
transition-timing-function: cubic-bezier(.4, 0, .2, 1);
&:hover,
&:focus {
    color: white;
    background-color: blue;
    }`

export const Input = styled.input`
height: 25px;
width: 200px;
padding: 0 10px;
border: 1px solid #cbbfbf4d;
border-radius: 10px;
filter: drop-shadow(0px 4px 4px #00000040);
transition-property: border;
transition-duration: 250ms;
transition-timing-function: cubic-bezier(.4, 0, .2, 1);
&:hover,
&:focus {
    border: 1px solid blue;
    }`