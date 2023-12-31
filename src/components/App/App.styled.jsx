// import styled from 'styled-components';

// export const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   background-color: rgb(131, 166, 155);
//   margin: 0 auto;
//   `;
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  letter-spacing: 2px;
  border: 6px solid rgba(50, 57, 65, 1);
  box-shadow: 0px 0px 6px 5px #009eff;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;
export const PhoneBook = styled.h1`
  padding: 0px;
  letter-spacing: 2 px;
  color: rgba(50, 57, 65, 1);
  font-size: 26px;
  @media screen and (max-width: 1024px) {
    font-size: 20px;
  }
  @media screen and (max-width: 767px) {
    font-size: 18px;
  }
`;
export const Title = styled.h2`
  display: flex;
  padding: 1px;
  margin: 1px;

  color: rgba(50, 57, 65, 1);
  @media screen and (max-width: 1023px) {
    font-size: 28px;
  }
  @media screen and (max-width: 767px) {
    font-size: 24px;
  }
`;