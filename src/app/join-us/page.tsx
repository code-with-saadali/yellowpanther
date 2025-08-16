import React from "react";
import Hero from "./_components/Hero";
import Accordion from "./_components/Accordion";
import FollowUs from "./_components/FollowUs";
import Community from "./_components/Community";

const page = () => {
  return (
    <div>
      <Hero />
      <Accordion />
      <Community />
      <FollowUs />
    </div>
  );
};

export default page;
