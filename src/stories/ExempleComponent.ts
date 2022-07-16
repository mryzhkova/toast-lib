import styled from 'styled-components';

export const ExempleComponent = styled.div`
  display: flex;
  flex-direction: column;
  button {
    cursor: pointer;
    width: 100px;
    height: 35px;
    margin: 10px;
    border-radius: 5px;
    border: 2px solid #0f3057;
    color: #0f3057;
    background: none;
    text-align: center;
  }
  button:hover {
      background-color: #F4F4FF;
    }
`;
