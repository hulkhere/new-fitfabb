import Sample from "../src/images/finall-unremoved-1.png"

export default function Header(){

    return (
      <>
        <div
         className="w-full bg-black flex justify-between items-center p-4">
          <img className="w-2/3 xl:w-68" src={Sample} alt="" />
         <a href="#test">
           <button className="bg-red-600 p-4 px-6 text-xl">JOIN TODAY</button>
         </a>
        </div>
      </>
    );
}