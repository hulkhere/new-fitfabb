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
        <footer
          className="bg-cover text-green-300"
          style={{
            backgroundImage: `url("${ImgFooter}")`,
          }}
        >
          <div className="flex justify-between items-center gap-5 mx-10 lg:mx-40">
            <div className="text-2xl md:text-5xl">
              <h1>
                Your body can stand almost anything. It’s your mind that you
                have to convince.
              </h1>
            </div>

          
            <div className="h-auto w-20 flex gap-5 flex-col">
              <a href="">
                <img src={Instagram} alt="" />
              </a>
              <a href="">
                <img src={Whatsapp} alt="" />
              </a>
              <a href="">
                <img src={Call} alt="" />
              </a>
              <a href="">
                <img src={Facebook} alt="" />
              </a>
              <a href="">
                <img src={Gmail} alt="" />
              </a>
              <a href="">
                <img src={Youtube} alt="" />
              </a>
            </div>
          </div>

          <div className="w-full flex justify-center text-2xl my-10">
            ®FIT&FAB - NARSAPUR
          </div>
        </footer>
      </>
    );
}