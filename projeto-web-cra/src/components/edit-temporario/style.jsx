import styled from 'styled-components';

export const Sobreposicao = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const Container = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  width: 400px;
  max-width: 90%;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.25);
`;

export const BotaoContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;

  & > button {
    margin-left: 10px;
  }
`;

export const Botao = styled.button`
  padding: 8px 14px;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  ${({ variant }) =>
    variant === "confirm"
      ? `background: #4caf50; color: white;`
      : `background: #ccc; color: black;`}
`;