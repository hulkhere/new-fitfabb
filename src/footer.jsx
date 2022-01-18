import Instagram from "../src/icons/instagram.png"
import Whatsapp from "../src/icons/whatsapp.png";
import Call from "../src/icons/telephone.png"
import Youtube from "../src/icons/youtube.png";



export default function Footer(){

    return (
      <>
        <footer className="w-full py-4 flex flex-col items-center bg-red-700 gap-5 lg:flex-row lg:justify-evenly">
          <div className="text-2xl lg:text-4xl">®FIT&FAB-NARSAPUR</div>
          <div className="flex gap-8">
            <a href="">
              <img className="w-10" src={Call} alt="" />
            </a>
            <a href="">
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