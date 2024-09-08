import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import arrow_right_dark from "../../../assets/images/arrow-right-dark.svg";
import { GlobalContext } from "../../../context/GlobalContext";
import { handleSetPathToNavigate } from "../../../context/action";

interface CustomLinkProps {
  title: string;
  href: string;
  style: string;
  image: any;
  textStyle: string;
  setHovered?: (hovered: boolean) => void;
}

const CustomLink = ({
  href,
  title,
  style,
  image,
  textStyle,
  setHovered,
}: CustomLinkProps) => {
  const { dispatch } = useContext(GlobalContext);

  return (
    <Link
      href="#"
      onClick={() => handleSetPathToNavigate(dispatch, href)}
      onMouseOver={() => setHovered!(true)}
      onMouseOut={() => setHovered!(false)}
    >
      <button className={style}>
        <span className={textStyle}>{title}</span>
        <div className="w-10 h-10 items-center flex justify-center">
          <Image src={image} alt="" />
        </div>
      </button>
    </Link>
  );
};

export default CustomLink;
