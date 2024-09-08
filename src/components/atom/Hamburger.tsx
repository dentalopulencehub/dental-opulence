import React, { useContext } from "react";
import { gsap, TimelineLite } from "../../../lib/gsap";
import { useIsomorphicLayoutEffect } from "../../../hooks";
import { useGSAP } from "@gsap/react";
import { handleSetMenuState } from "../../../context/action";
import { GlobalContext } from "../../../context/GlobalContext";

const Hambuger = () => {
  const { dispatch, menuOpen } = useContext(GlobalContext);

  useGSAP(() => {
    var upper = document.getElementsByClassName("upper");
    var middle = document.getElementsByClassName("middle");
    var lower = document.getElementsByClassName("lower");

    var tl = new TimelineLite({ paused: true, reversed: true });

    tl.to(
      upper,
      0.5,
      { attr: { d: "M8,2 L2,8" }, x: 1, ease: "power2.inOut" },
      "start"
    )
      .to(middle, 0.5, { autoAlpha: 0 }, "start")
      .to(
        lower,
        0.5,
        { attr: { d: "M8,8 L2,2" }, x: 1, ease: "power2.inOut" },
        "start"
      );

    document
      ?.querySelector(".hamburger")
      ?.addEventListener("click", function () {
        tl.reversed() ? tl.play() : tl.reverse();
      });
  }, []);

  return (
    <div
      onClick={() => handleSetMenuState(dispatch, !menuOpen)}
      className="bg-[#000] hamburger w-[50px] h-[50px] lg:hidden flex items-center justify-center cursor-pointer rounded-[999px]"
    >
      <svg viewBox="0 0 12 10" className=" flex" height="20px" width="29px">
        <path
          d="M10,2 L2,2"
          className="upper w-full"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeLinecap: "round",
            strokeWidth: "0.6",
          }}
        />

        <path
          d="M2,5 L10,5"
          className="middle w-full"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeLinecap: "round",
            strokeWidth: "0.6",
          }}
        />
        <path />
        <path
          d="M10,8 L2,8"
          className="lower w-full"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeLinecap: "round",
            strokeWidth: "0.6",
          }}
        />
      </svg>
    </div>
  );
};

export default Hambuger;

{
  /* <svg
  width="18"
  height="2"
  viewBox="0 0 18 2"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M18 0H0V1.45161H9H18V0Z" fill="black" />
</svg>; */
}
