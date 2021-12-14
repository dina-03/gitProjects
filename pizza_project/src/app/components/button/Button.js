import styled, { css } from 'styled-components'

export const Button = styled.button`
background: #ccc;
text-transform: uppercase;
font-size: 1rem;
border: 1px solid black;
border-radius: 5px;
padding: 5px 15px;
&:hover{
	background: red;
	cursor:pointer;
	color:#fff;
}
${props => props.cart && css`
display: block;
margin: 30px auto 0px auto;
width: 170px;
height: 40px;
border-radius: 20px;
background-color: rgba(255, 255, 255, 0.7);
border: none;
font-weight: bold;
font-size: 14px;
&:hover{
	color: black;
	background: rgb(87, 236, 0);
`}
`

export const SuccessButton = styled(Button)`
background: green;
color:#fff;
&:hover{
	background: rgb(87, 236, 0);
	color: black;
}
${props => props.menu && css`
background-color: rgba(0, 0, 0, 0.7);
border: none;
position: absolute;
right: 20px;
bottom: 20px;
font-size: 16px;
padding: 10px;
`}
${props => props.menuBig && css`
background-color: rgba(0, 0, 0, 0.7);
border: none;
position: absolute;
right: 20px;
bottom: 20px;
font-size: 20px;
padding: 15px;
`}
`