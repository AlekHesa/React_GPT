import React from "react";
import { MdColorLens } from "react-icons/md";
import ButtonContainer from "./ButtonContainer";
import { Tour,TourProvider } from '@reactour/tour';

type Props = {};

export default function Guide({}: Props) {
  const [dark, setDark] = React.useState(false);

  React.useEffect(() => {
    if (localStorage.theme === "dark") {
      setDark(true);
    } else {
      setDark(false);
    }
  }, []);

  const handleThemeChange = () => {
    document.documentElement.classList.toggle("dark");
    localStorage.theme = localStorage.theme === "dark" ? "light" : "dark";
    setDark(!dark);
  };



  return (
    <ButtonContainer onClick={handleThemeChange}>
      <MdColorLens />
      Test
    </ButtonContainer>
  );
}
