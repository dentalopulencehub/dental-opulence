import React, { useContext } from "react";
import Link from "next/link";
import { GlobalContext } from '../../../context/GlobalContext'
import { handleSetPathToNavigate } from '../../../context/action'

interface PrimaryLinkProps {
  title: string;
  href: string;
  style: string;
}

const PrimaryLink = ({ href, title, style }: PrimaryLinkProps) => {

  const { dispatch } = useContext(GlobalContext)

  return (
    <div className={style} onClick={()=> handleSetPathToNavigate(dispatch, href)} >
      {title}
    </div>
  );
};

export default PrimaryLink;
