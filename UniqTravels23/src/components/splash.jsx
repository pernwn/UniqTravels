//{Kodet af: Victoria}

import splash from "../json/uniq.json"
import guy from "../json/guy2.json"
import travel from "../json/travel.json"
import Lottie from "lottie-react"
import "../styles/vic.css"



export const SplashAnimation = () => <Lottie animationData={splash} loop={true}/>
export const GuyAnimation = () => <Lottie animationData={guy} loop={true}/>
export const TravelAnimation = () => <Lottie animationData={travel} loop={true}/>   
  