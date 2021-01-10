import React from "react"
import { Wrapper, HeroTitle, HeroDescription, HeroButton } from "./HeroSection"
import { Button } from "../Button"

function Hero() {
  return (
    <Wrapper>
      <HeroTitle>Travel More...</HeroTitle>
      <HeroDescription>Plan your next trip today</HeroDescription>
      <HeroButton>
        <Button fontBig big primary>
          Get Started
        </Button>
      </HeroButton>
    </Wrapper>
  )
}

export default Hero
