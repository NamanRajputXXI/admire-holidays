"use client";
import React from "react";
import QuestioningCard from "./cards/QuestioningCard";
import { SiIcomoon } from "react-icons/si";
import { FaCar } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
const QuestioningCardsLayout = () => {
  return (
    <section className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-3  md:grid-cols-2 grid-cols-1">
      <QuestioningCard
        data-aos="fade-left"
        iconName={<SiIcomoon color="#FF474D" size={100} />}
        text={"Tell us what you want to do"}
      />
      <QuestioningCard
        iconName={<FaCar color="#A47EC8" size={100} />}
        text={"Share your travel preference"}
      />
      <QuestioningCard
        iconName={<BsStars color="#6CC417" size={100} />}
        text={"We’ll give you recommendations"}
      />
    </section>
  );
};

export default QuestioningCardsLayout;
