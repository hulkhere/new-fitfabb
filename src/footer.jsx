import Instagram from "../src/icons/instagram.png"
import Whatsapp from "../src/icons/whatsapp.png";
import Call from "../src/icons/telephone.png"
import Facebook from "../src/icons/facebook.png";
import Gmail from "../src/icons/gmail.png";
import Youtube from "../src/icons/youtube.png";
import ImgFooter from "../src/images/gym-footer.png"



export default function Footer(){

    return (
      <>
        <footer className="bg-cover text-red-600 flex flex-col gap-5">
          <div className="w-full flex justify-center items-center gap-16">
            <h1 className="">Visit our instagram</h1>
            <a href="">
              <img className="w-10" src={Instagram} alt="" />
            </a>
          </div>
          <div className="w-full flex justify-center items-center gap-16">
            <h1 className="">Visit our instagram</h1>
            <a href="">
              <img className="w-10" src={Whatsapp} alt="" />
            </a>
          </div>
          <div className="w-full flex justify-center items-center gap-16">
            <h1 className="">Visit our instagram</h1>
            <a href="tel:+917674937893">
              <img className="w-10" src={Call} alt="" />
            </a>
          </div>
          <div className="w-full flex justify-center items-center gap-16">
            <h1 className="">Visit our instagram</h1>
            <a href="">
              <img className="w-10" src={Facebook} alt="" />
            </a>
          </div>
          <div className="w-full flex justify-center items-center gap-16">
            <h1 className="">Visit our instagram</h1>
            <a href="">
              <img className="w-10" src={Gmail} alt="" />
            </a>
          </div>
          <div className="w-full flex justify-center items-center gap-16">
            <h1 className="">Visit our instagram</h1>
            <a href="">
              <img className="w-10" src={Youtube} alt="" />
            </a>
          </div>
        </footer>
      </>
    );
}