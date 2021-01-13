import styled from "styled-components";


const Section = styled.section`
border: grey solid 1px;
width: fit-content;
height: fit-content;
display: block;

 h2 {
text-align: center;
margin: 0;
 }

 li{
display: flex;
flex-direction: column;
align-items: center;
padding: 20px 20px;
 }

 ul {
list-style: none;
display: flex;
margin: 0;
 }
`
export default Section;