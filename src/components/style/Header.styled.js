import styled from "vue3-styled-components";


export const StyledHeader = styled.header`

background-color: red;
padding: 40px 0;

h1{
    color:blue;
    :hover{
        color:white;
    }
}

&:hover {
    
    background-color:gray;
}
`