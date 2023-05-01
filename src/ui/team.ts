import styled from "@emotion/styled";
import { Flex, Section } from "./heading";

interface MemberImageProps {
  bgImage: string;
  bgColor: string;
  alt: string;
}

export const Title = styled.h2`
  font-weight: bold;
  font-size: 40px;
  line-height: 1.125;
  margin-bottom: 2rem;
  margin: 5px 0px;
  text-align: center;
  color: var(--clr-melon);
`;

export const Description = styled.h2`
  font-size: 18px;
  line-height: 1.625;
  font-weight: 400;
  color: var(--clr-gray-light);
  text-align: center;
`;

export const Container = styled(Flex)`
  flex-direction: row;
  gap: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const MemberImage = styled(Flex)<MemberImageProps>`
  position: relative;
  background: ${(props) => props.bgColor};
  background-image: url(${(props) => props.bgImage});
  background-position: center;
  background-size: cover;
  color: white;
  min-width: 200px;
  min-height: 200px;
  border-radius: 50%;
  position: relative;
  margin-bottom: 20px;
`;
export const MemberItem = styled(Flex)`
  flex-direction: column;
  align-items: center;
`;

export const Name = styled.h2`
  font-size: 20px;
  font-weight: 800;
  margin: 0px;
  color: var(--clr-dark-blue);
`;

export const Role = styled.h3`
  font-size: 18px;
  font-weight: 400;
  margin: 0px;
`;

export const Caption = styled.h3`
  font-size: 18px;
  font-weight: 300;
  margin: 0px;
`;
