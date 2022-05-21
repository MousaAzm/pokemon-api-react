import styled from "styled-components"


export const AboutView = () => {
    return (
        <>
          <Wrapper>       
              <Box>
              <h1>About</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </Box>
          </Wrapper>        
        </>
    )
}

const Wrapper = styled.div`
   margin-left: 200px;
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   height: 100vh;
   width: 100%;
`;
const Box = styled.div`
   border-radius: 10px;
   box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19);
   max-width: 320px;
   padding: 10px;
   align-self: center;
   text-align: center
`;


