import Sample from "../src/images/semicrop.png"

export default function Header(){

    return (
      <>
        <div className="flex justify-center">
          <img className="w-56 xl:w-68" src={Sample} alt="" />
        </div>
      </>
    );
}