import styled from "@emotion/styled";
import { Flex } from "./heading";

const Grid = styled.div`
  display: grid;
`;

export const ImageContainer = styled(Grid)`
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  padding: 20px;

  place-items: center;

  @media (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

interface ActivityImageProps {
  bgImage: string;
  alt: string;
}

export const ActivityImage = styled(Flex)<ActivityImageProps>`
  position: relative;
  background: linear-gradient(
    hsla(192, 37%, 48%, 0.9),
    hsla(192, 37%, 48%, 0.9)
  );
  background-image: url(${(props) => props.bgImage});
  /* background-image: url(" https://res.cloudinary.com/circlesulfisoxazole/image/upload/v1682833369/todes_ekpymm.png"); */
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);

  background-position: center;
  background-size: cover;
  color: white;
  width: 226px;
  height: 214px;
  border-radius: 8px;
  position: relative;
  margin-bottom: 20px;

  &:hover {
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.1));
    transform: scale(1.2);
    transition: all 0.5s;
  }
  @media (max-width: 1080px) {
    width: 320px;
    height: 200px;
  }
`;

export const TitleContainer = styled(Flex)`
  flex-direction: column;
  align-items: center;
  p,
  h2 {
    margin: 0px;
    text-align: center;
  }
`;

export const Caption = styled.p`
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 900;
  line-height: 1.625;
  letter-spacing: 4px;
  color: var(--clr-gray-dark);

  /* margin-bottom: 2rem; */
`;

export const Title = styled.h2`
  /* color: var(--clr-footer); */
  font-weight: bold;
  font-size: 40px;
  line-height: 1.125;
  margin-bottom: 2rem;
  /* color: var(--clr-gray-dark); */

  color: var(--clr-dark-blue);

  @media (max-width: 1080px) {
    width: 70%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Description = styled.p`
  font-size: "18px";
  line-height: 1.625;
  color: var(--clr-gray-light);
  width: 70%;

  @media (max-width: 1080px) {
    width: 100%;
  }
  /* margin-bottom: 2rem; */
`;
