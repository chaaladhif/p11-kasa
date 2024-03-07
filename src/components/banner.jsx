import React from "react"
import banner from "../assets/banner.png"
function Banner() {
  return (
    <div className="banner">
      <img src={banner} alt="banner" />
      <p>Chez vous, partout et ailleurs</p>
    </div>
  )
}
export default Banner;
