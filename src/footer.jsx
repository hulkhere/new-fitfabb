import Instagram from "../src/icons/instagram.png"
import Whatsapp from "../src/icons/whatsapp.png";
import Call from "../src/icons/telephone.png"
import Youtube from "../src/icons/youtube.png";



export default function Footer(){

    return (
      <>
      <div
            style={{ backgroundColor: "#e11a20" }}
            className="w-full h-2"
          ></div>
        <footer className="w-full py-4 flex flex-col items-center bg-black gap-5 lg:flex-row lg:justify-evenly">
        
          <div className="text-2xl lg:text-4xl text-white">
            ®FIT&FAB-NARSAPUR
          </div>
          <div className="flex gap-8">
            <a href="tel:+917674937893">
              <img className="w-10" src={Call} alt="" />
            </a>
            <a href="https://www.instagram.com/fit_and_fab__2022/">
              <img className="w-10" src={Instagram} alt="" />
            </a>
            <a href="">
              <img className="w-10" src={Whatsapp} alt="" />
            </a>
            <a href="">
              <img className="w-10" src={Youtube} alt="" />
            </a>
          </div>
        </footer>
      </>
    );
}