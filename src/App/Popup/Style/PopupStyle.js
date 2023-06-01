import styled from 'styled-components';

export const PopupBox = styled.div`
  position: fixed;
  background: #00000050;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
`;

export const Box = styled.div`
  position: relative;
  width: 300px;
  margin: 0 auto;
  height: auto;
  max-height: 70vh;
  margin-top: calc(40vh);
  background: #e6e6e7;
  border-radius: 20px;
  padding: 20px 0 0 0;
  border: 1px solid #999;
  overflow: auto;
`;