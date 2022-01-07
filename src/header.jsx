import Sample from "../src/images/sample.png"

export default function Header(){

    return (
      <>
        <div className="flex justify-center">
          <img className="w-48" src={Sample} alt="" />
        </div>
      </>
    );
}