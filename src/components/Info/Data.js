import img1 from "../../Images/introduce.jpg";
import img2 from "../../Images/expert.jpg";
import img3 from "../../Images/chat.jpg";

export const homeObjOne = {
  id: "about",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "방문요양서비스",
  headline: "방문 요양 서비스란?",
  description:
    "고령이나 노인성 질환으로 일상생활이 어려운 노인분들께 신체활동 또는 가사지원 등의 서비스를 제공하여 건강증진 및 생활안정을 돕고자 하는 노인장기요양보험제도입니다.",
  buttonLabel: "알아보기",
  buttonLink:
    "https://www.longtermcare.or.kr/npbs/e/b/101/npeb101m01.web?menuId=npe0000000030&zoomSize=",
  imgStart: false,
  img: img1,
  alt: "행복한 노인부부",
  dark: false,
  primary: true,
  darkText: true,
};

export const homeObjTwo = {
  id: "introduce",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "노인복지 경력 33년의 전문가",
  headline: "사회복지사 경력 및 원예치료 지도교수 자격",
  description:
    "다년간의 제주의료원 노인복지 경력으로 어르신이 가장 필요로 하는 서비스를 제공하도록 요양보호사를 지도-관리합니다.",
  buttonLabel: "센터 소개",
  imgStart: true,
  img: img2,
  alt: "사회복지사",
  dark: false,
  primary: true,
  darkText: true,
};

export const homeObjThree = {
  id: "apply",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "편하게 문의하기",
  headline: "카카오톡으로 편하게 상담 요청하세요",
  description:
    "국가지원금이 나오는 요양보호 서비스는 대상자의 요양보호 등급에 따라 비용이 다릅니다. 정확한 비용산정을 위해 상담을 받아보세요!",
  buttonLabel: "상담신청",
  imgStart: false,
  img: img3,
  alt: "채팅",
  dark: true,
  primary: true,
  darkText: false,
};
