"use client";
import { useState, useEffect } from "react";
import React from "react";
import Image from "next/image";
import headshot from "../../assets/thebearpolaroid.webp";
import concrete from "../../assets/concrete.jpg";

const Landing = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["GOAT."];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <div className="relative flex items-center justify-center h-screen p-10 text-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={concrete}
          layout="fill"
          objectFit="cover"
          alt="Concrete Background"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center bg-white bg-opacity-70 p-5 rounded">
        <p className="text-8xl font-bold">Hello, my name is Raul, the {text}</p>
        <p className="text-4xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="relative z-10">
        <Image src={headshot} height={500} width={500} alt="Headshot" />
      </div>
    </div>
  );
};

export default Landing;
