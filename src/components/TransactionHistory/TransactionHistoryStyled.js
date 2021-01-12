import styled from 'styled-components';

const Table = styled.table`
border-collapse: collapse;
width: 80%;
text-align: center;
    tbody tr:nth-child(even){
        background-color: red;
        }
    th {
        border: 1px solid #999;
        padding: 0.5rem;
        text-align: center;
        background-color: antiquewhite; 
    }    
    td {
        border: 1px solid #999;
        padding: 0.5rem;
        text-align: center;
    }
`

export default  Table;