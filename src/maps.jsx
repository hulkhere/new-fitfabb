import Iframe from "react-iframe";
export default function Maps() {
  return (
    <>
      <div className="mt-12">
        <h1 className="text-4xl bg-red-600 flex justify-center">
            OUR LOCATION</h1>
      </div>
      <div className="flex justify-center p-5 mt-10">
        <Iframe
          className=""
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d706.586716426917!2d78.28158996960175!3d17.74187402517673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcc0ad80067b719%3A0xbfb7f0b90b86e44b!2sshri%20bhramhalingeshwara%20tea%20point!5e0!3m2!1sen!2sin!4v1641827811597!5m2!1sen!2sin"
          width="400"
          height="250"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
        />
      </div>
      ;
    </>
  );
}
