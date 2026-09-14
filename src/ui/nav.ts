import styled from "@emotion/styled";

export const Page = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const NavBar = styled.header<{ scrolled?: boolean }>`
  position: sticky;
  top: 0;
  z-index: 40;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 14px 26px;
  background: var(--clr-bg);
  transition: padding 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  padding: ${({ scrolled }) => (scrolled ? "12px 0" : "20px 0 14px")};
  border-bottom: 1px solid ${({ scrolled }) => (scrolled ? "var(--clr-border-soft)" : "transparent")};
  box-shadow: ${({ scrolled }) => (scrolled ? "0 6px 18px rgba(20, 24, 40, 0.06)" : "none")};

  @media (max-width: 767px) {
    gap: 10px;
    padding: ${({ scrolled }) => (scrolled ? "10px 0" : "14px 0")};
  }
`;

export const LogoLink = styled.a`
  display: flex;
  align-items: center;
  flex: none;
`;

export const NavLinks = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 20px;
  font-size: 14.5px;
  font-weight: 500;
  flex: 1 1 220px;

  a {
    color: var(--clr-muted);
  }
  a:hover {
    color: var(--clr-blue);
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

export const HeaderStatPill = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  background: var(--clr-surface);
  border: 1px solid #e3e4e9;
  border-radius: 999px;
  padding: 5px 14px 5px 10px;
  flex: none;

  span {
    font-family: var(--font-hand);
    font-weight: 600;
    font-size: 17px;
    color: var(--clr-navy);
    line-height: 1;
    transform: translateY(1px);
  }

  @media (max-width: 1023px) {
    display: none;
  }
`;

export const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: none;
  margin-left: auto;

  @media (max-width: 767px) {
    gap: 8px;
  }
`;

export const LangSwitch = styled.div`
  display: flex;
  background: var(--clr-surface);
  border: 1px solid #e3e4e9;
  border-radius: 999px;
  padding: 3px;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const MenuButton = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border: 0;
  border-radius: 10px;
  background: var(--clr-navy);
  color: #fff;
  flex: none;
  transition: transform 0.15s ease, background 0.15s ease;

  &:active {
    transform: scale(0.9);
    background: #14213f;
  }

  @media (max-width: 767px) {
    display: flex;
  }
`;

export const MenuIconStack = styled.span<{ open: boolean }>`
  position: relative;
  display: inline-flex;
  width: 20px;
  height: 20px;

  svg {
    position: absolute;
    inset: 0;
    transition: transform 0.25s ease, opacity 0.2s ease;
  }

  .icon-menu {
    opacity: ${({ open }) => (open ? 0 : 1)};
    transform: rotate(${({ open }) => (open ? "45deg" : "0deg")}) scale(${({ open }) => (open ? 0.6 : 1)});
  }

  .icon-close {
    opacity: ${({ open }) => (open ? 1 : 0)};
    transform: rotate(${({ open }) => (open ? "0deg" : "-45deg")}) scale(${({ open }) => (open ? 1 : 0.6)});
  }
`;

export const NavCtaIconButton = styled.a`
  display: none;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 999px;
  background: var(--clr-green);
  color: #fff;
  flex: none;
  transition: transform 0.15s ease, background 0.15s ease;

  &:hover {
    background: var(--clr-green-hover);
    color: #fff;
  }
  &:active {
    transform: scale(0.9);
  }

  @media (max-width: 767px) {
    display: flex;
  }
`;

export const MobileMenu = styled.nav<{ open: boolean }>`
  display: none;

  @media (max-width: 767px) {
    display: grid;
    grid-template-rows: ${({ open }) => (open ? "1fr" : "0fr")};
    opacity: ${({ open }) => (open ? 1 : 0)};
    transition: grid-template-rows 0.3s ease, opacity 0.22s ease;
    pointer-events: ${({ open }) => (open ? "auto" : "none")};
  }
`;

export const MobileMenuInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-height: 0;
  overflow: hidden;
  padding-bottom: 18px;

  a {
    padding: 12px 4px;
    font-size: 15px;
    font-weight: 500;
    color: var(--clr-muted);
    border-bottom: 1px solid var(--clr-border-soft);
  }
  a:hover {
    color: var(--clr-blue);
  }
`;

export const MobileMenuCta = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: var(--clr-blue);
  font-size: 15px;
  font-weight: 600;
  padding: 13px 20px;
  border-radius: 999px;
  margin-bottom: 14px;

  && {
    color: #fff;
  }

  &:hover {
    background: var(--clr-blue-hover);
    color: #fff;
  }
`;

export const MobileMenuLangSwitch = styled(LangSwitch)`
  @media (max-width: 767px) {
    display: flex;
  }
`;

export const MobileMenuFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding-top: 14px;
`;

export const MobileMenuNote = styled.p`
  margin: 0;
  font-family: var(--font-hand);
  font-weight: 600;
  font-size: 19px;
  color: var(--clr-coral);
  transform: rotate(-2deg);
`;

export const LangPill = styled.a<{ active: boolean }>`
  border: 0;
  border-radius: 999px;
  padding: 6px 14px;
  font-size: 12.5px;
  font-weight: 600;
  cursor: pointer;
  background: ${({ active }) => (active ? "#1b2a4e" : "transparent")};

  && {
    color: ${({ active }) => (active ? "#fff" : "var(--clr-muted)")};
  }
  &:hover {
    color: ${({ active }) => (active ? "#fff" : "var(--clr-muted)")};
  }
`;

export const NavCta = styled.a`
  display: flex;
  align-items: center;
  gap: 7px;
  background: var(--clr-blue);
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  padding: 10px 18px;
  border-radius: 999px;
  flex: none;

  &:hover {
    background: var(--clr-blue-hover);
    color: #fff;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

export const Divider = styled.div`
  height: 1px;
  background: var(--clr-border-soft);
`;
