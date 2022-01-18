import Sample from "../src/images/semicrop.png"

export default function Header(){

    return (
      <>
        <div
         className="w-full flex justify-between items-center p-4">
          <img className="w-56 xl:w-68" src={Sample} alt="" />
         <a href="">
           <button className="bg-red-600 p-4 px-6 text-xl">JOIN TODAY</button>
         </a>
        </div>
      </>
    );
}