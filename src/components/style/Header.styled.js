import styled from "vue3-styled-components";


export const StyledHeader = styled.header`

background-color: red;
padding: 40px 0;
.hubble {

    h1{
        color:blue;
        :hover{
            color:white;
        }
    }
    p {
        color:yellow;
       
    }
}
h1 {
    color:green;
}

&:hover {
    
    background-color:gray;
}
`