export default function Ctas(){

    return (
      <>
        <div
          id="test"
          className="w-full h-max flex justify-center items-center flex-col gap-5 md:flex-row md:p-5 xl:p-0 gap-10"
        >
          <div
            style={{ backgroundColor: "#e11a20" }}
            className="bg-black w-64 h-56 rounded-2xl   flex flex-col items-center"
          >
            <h1 className="text-4xl" style={{ color: "#C0C0C0" }}>
              SILVER
            </h1>
            <div className="text-black">
              <li>aksfkjasfaskjdhkjashd</li>
              <li>bfhjfhakfaskjsghagsfh</li>
              <li>aksfkjasfaskjdhkjashd</li>
              <li>aksfkjasfaskjdhkjashd</li>
            </div>
            <button className="bg-white rounded px-4 mt-6">
              JOIN NOW @499
            </button>
          </div>

          <div
            style={{ backgroundColor: "#e11a20" }}
            className="bg-green-300 w-64 h-56 rounded-xl flex flex-col items-center"
          >
            <h1 className="text-4xl" style={{ color: "#FFD700" }}>
              GOLD
            </h1>
            <div className="text-black">
              <li>aksfkjasfaskjdhkjashd</li>
              <li>bfhjfhakfaskjsghagsfh</li>
              <li>aksfkjasfaskjdhkjashd</li>
              <li>aksfkjasfaskjdhkjashd</li>
            </div>
            <button className="bg-white rounded px-4 mt-6">
              JOIN NOW @699
            </button>
          </div>

          <div
            style={{ backgroundColor: "#e11a20" }}
            className="bg-green-300 w-64 h-56 rounded-xl flex flex-col items-center"
          >
            <h1 className="text-4xl" style={{ color: "#E5E4E2" }}>
              PLATINUM
            </h1>
            <div className="text-black">
              <li>aksfkjasfaskjdhkjashd</li>
              <li>bfhjfhakfaskjsghagsfh</li>
              <li>aksfkjasfaskjdhkjashd</li>
              <li>aksfkjasfaskjdhkjashd</li>
            </div>
            <button className="bg-white rounded px-4 mt-6">
              JOIN NOW @2499
            </button>
          </div>
        </div>
      </>
    );
}