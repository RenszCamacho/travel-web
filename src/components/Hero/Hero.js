import React from "react"
import { Wrapper, HeroTitle, HeroDescription, HeroButton } from "./HeroSection"

function Hero() {
  return (
    <Wrapper>
      <HeroTitle>Travel More...</HeroTitle>
      <HeroDescription>Plan your next trip today</HeroDescription>
      <div>
        <HeroButton>Get Started</HeroButton>
      </div>
    </Wrapper>
  )
}

export default Hero
