import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import '../Styles/DownButton.scss'

export default function DownButton(props) {
  const { pageTag } = props;
  const scrollToProfile = () => {
    document.getElementById(pageTag).scrollIntoView({ behavior: "smooth" });
  }

  return (
    <span onClick={() => scrollToProfile()}><FontAwesomeIcon icon={faCircleArrowDown} size="3x" className="arrow-down -initial"/></span>
  )  
}
