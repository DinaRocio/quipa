import styled from "@emotion/styled";

export const FloatingButton = styled.a`
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 40;
  display: flex;
  align-items: center;
  gap: 10px;
  background: var(--clr-green);
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  padding: 14px 20px;
  border-radius: 999px;
  box-shadow: 0 10px 26px rgba(20, 60, 40, 0.28);
  animation: qup 0.32s ease both;
  &:hover {
    background: var(--clr-green-hover);
    color: #fff;
  }
`;
