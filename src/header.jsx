import Sample from "../src/images/semicrop.png"

export default function Header(){

    return (
      <>
        <div className="flex justify-center">
          <img className="w-56" src={Sample} alt="" />
        </div>
      </>
    );
}