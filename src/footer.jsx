import Instagram from "../src/icons/instagram.png"
import Whatsapp from "../src/icons/whatsapp.png";
import Call from "../src/icons/telephone.png"
import Facebook from "../src/icons/facebook.png";
import Gmail from "../src/icons/gmail.png";
import Youtube from "../src/icons/youtube.png";



export default function Footer(){

    return (
      <>
        <footer>
          <div className="flex justify-between items-center md:items-center gap-5 mx-10 lg:mx-40">
            <div className="text-2xl md:text-5xl">
              <h1>
                Your body can stand almost anything. It’s your mind that you
                have to convince.
              </h1>
            </div>
            <div className="h-auto w-20 flex gap-5 flex-col">
              <img src={Instagram} alt="" />
              <img src={Call} alt="" />
              <img src={Facebook} alt="" />
              <img src={Whatsapp} alt="" />
              <img src={Gmail} alt="" />
              <img src={Youtube} alt="" />
            </div>
          </div>

          <div className="w-full flex justify-center text-2xl my-10">
            ®FIT&FAB - NARSAPUR
          </div>
        </footer>
      </>
    );
}