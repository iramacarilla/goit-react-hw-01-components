import styled from "styled-components";

const List = styled.li`
display: flex;
width: 300px;
height: 80px;
padding: 0 20px;
margin-bottom: 20px;
background-color: beige;
box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
align-items: center;
justify-content: flex-start;
  span {
display: inline-block;
height: 15px;
width: 15px;
border-radius: 50%;
background-color: ${props => (props.isOnline ? 'green': 'red')};
margin-right: 20px;
}
    img {
border-radius: 50%;
margin-right: 20px;
    }
`
export default List;