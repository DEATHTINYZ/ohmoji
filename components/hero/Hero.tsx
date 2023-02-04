import React from 'react'
import {
  BsFacebook,
  BsGithub,
  BsInstagram
} from 'react-icons/bs'

const Hero = () => {
  return (
    <section className="bg-[url('../public/assets/bg.png')] bg-cover mt-[3.5rem]">
      <div className="container">
        <div className="flex flex-col justify-center items-center text-center p-[5rem_2rem]">
          <div className="text-[28px] font-bold lg:text-[32px] text-[#050505]">
            OHMOJI
          </div>
          <div className="text-[#050505]">
            The best custom emojis for your Slack or Discord.
          </div>
          <div className="flex gap-[1.2rem] mt-[1rem]">
            <a
              target="_blank"
              href="https://www.facebook.com/chayutpong.chumneanpongpun/"
              className="footer_link"
              rel="noreferrer"
            >
              <BsFacebook className="text-[#4267B2]" size={24} />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/ur.ddream"
              className="footer_link"
              rel="noreferrer"
            >
              <BsInstagram size={24} className="text-[#E1306C] " />
            </a>
            <a
              target="_blank"
              href="https://github.com/DEATHTINYZ"
              className="footer_link"
              rel="noreferrer"
            >
              <BsGithub size={24} className="text-[#6E5494] " />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
