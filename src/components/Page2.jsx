import man from "/man.png";

const Page2 = () => {
  return (
    <div className="page2 min-h-screen flex items-center justify-center p-8">
      <div className="manimg">
        <img className="man" src={man} alt="" />
      </div>

      <div className="content max-w-[40%]  p-12 rounded-lg ">
        <h1 className="abt text-5xl font-md mb-8  text-[#344CB7]">ABOUT ME</h1>
        <p className="contentpara1 text-xl text-gray-700 mb-10 leading-relaxed">
          I am valued. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
        <p className="contentpara1 text-xl text-gray-700 mb-10 leading-relaxed">
          {" "}
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
          imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
          mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
          semper nisi.
        </p>
        <p className=" contentpara2 text-xl text-gray-700 leading-relaxed">
          {" "}
          Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
          consequat vitae, eleifend ac, enim.
        </p>
      </div>
    </div>
  );
};

export default Page2;