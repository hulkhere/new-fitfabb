export default function About(){

    return (
      <>
        <aside className="bg-black flex flex-col justify-center items-center text-center my-5">
          <div style={{maxWidth:"40rem"}} className="w-full rounded-2xl mx-5 py-10 text-4xl lg:text-6xl bg-blue-700 text-white">
            JOIN TODAY <br /> AT <br /> 30% OFFER
          </div>
          <div style={{maxWidth:"60rem"}} className="text-2xl lg:text-5xl text-white mt-5">
            Your body can stand almost anything. It's your mind that you have to
            convince.
          </div>
        </aside>
      </>
    );
}