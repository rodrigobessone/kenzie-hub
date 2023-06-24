import styled from "styled-components";
import Theme from "../../../../styles/Theme";

const StyledTechSection = styled.section`
width: 100%;
max-width: 48rem;
margin: 0.725rem auto;

div:first-child{
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2{
        color: ${Theme.colors.gray0};
    }

}

div:nth-child(2){
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${Theme.colors.gray3};
    border-radius: 0.25rem;
    cursor: pointer;
}

p{
    display: block;
    width: 100%;
    font-size: 1.5rem;
    color: ${Theme.colors.gray1};
    text-align: center;
    margin-top: 3rem;
}

@media(max-width: 32rem){
   p{
        padding: 1.25rem;
    }
}

@media (max-width: 48rem) {
    div:first-child {
      padding: 20px;
    }
`;
export default StyledTechSection;
