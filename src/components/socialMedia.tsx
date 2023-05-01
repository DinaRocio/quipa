import styled from "@emotion/styled";
import facebook from "./../images/icon-facebook.svg";
import instagram from "./../images/icon-instagram.svg";
import twitter from "./../images/icon-twitter.svg";
import tiktok from "./../images/icon-tiktok.svg";
import Image from "next/image";

export const SocialMediaLogo = styled.a`
  /* img:hover {
    filter: brightness(100);
  } */
`;

export const SocialMediaGroup = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0;
  gap: 30px;
  li {
    list-style: none;
  }
`;

export const socialNetwork = [
  {
    name: facebook,
    svg: "https://web.facebook.com/QhipaClub",
    alt: "facebook logo",
  },
  {
    name: instagram,
    svg: "https://www.instagram.com/diniwirocio/?hl=es",
    alt: "instagram logo",
  },
  {
    name: tiktok,
    svg: "https://www.tiktok.com/@qhipa.slc",
    alt: "tiktok logo",
  },
];

export default function SocialMedia() {
  return (
    <SocialMediaGroup>
      {socialNetwork.map((net, idx) => (
        <li key={idx}>
          <SocialMediaLogo href={net.svg}>
            <Image src={net.name} alt={net.name} width={20} height={18} />
          </SocialMediaLogo>
        </li>
      ))}
    </SocialMediaGroup>
  );
}
