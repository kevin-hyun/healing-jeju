import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaFacebook,
  FaPhoneAlt,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinkItems,
  FooterLink,
  FooterLinkTitle,
  FooterLinksWrapper,
  WedsiteRights,
  SocialIconLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  LogoCopyRight,
  ContactPhone,
  ContactFax,
} from "./FooterElement";

const Footer = () => {
  return (
    <FooterContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">힐링제주 복지센터</SocialLogo>
          <ContactPhone>
            <FaPhoneAlt />: 064-757-3053
          </ContactPhone>
          <ContactFax>fax : 064-757-3052</ContactFax>
          <WedsiteRights>
            힐링제주 복지센터 {new Date().getFullYear()} © All rights reserved.
          </WedsiteRights>
          <LogoCopyRight
            href="https://www.flaticon.com/free-icons/profit"
            title="profit icons"
          >
            Profit icons created by Freepik - Flaticon
          </LogoCopyRight>
          {/* <SocialIcons>
            <SocialIconLink
              href="//www.facebook.com"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
              <FaTwitter />
            </SocialIconLink>
          </SocialIcons> */}
        </SocialMediaWrap>
      </SocialMedia>
      {/* <FooterWrap>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>상세 페이지 </FooterLinkTitle>
            <FooterLink to="signin">센터장 소개</FooterLink>
            <FooterLink to="signin">오시는 길</FooterLink>
            <FooterLink to="signin">블로그(오픈예정)</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterWrap> */}
    </FooterContainer>
  );
};

export default Footer;
