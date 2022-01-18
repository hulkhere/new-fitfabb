import Sample from "../src/images/finall-unremoved-1.png"

export default function Header(){

    return (
      <>
        <div className="w-full bg-black flex justify-between items-center p-2">
          <img className="w-2/3" src={Sample} alt="" />
          <a href="#test">
            <button
              style={{ backgroundColor: "#e11a20" }}
              className="p-1 px-3 rounded text-sm lg:text-xl mr-2 lg:mr-5 xl:p-3 xl:px-8"
            >
              JOIN TODAY
            </button>
          </a>
        </div>
      </>
    );
}