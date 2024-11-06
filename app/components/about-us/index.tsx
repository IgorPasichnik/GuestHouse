const AboutUs = () => {
  return (
    <>
      <div className="z-10 flex py-16 justify-center shadow-customUpShadow">
        <div className="px-4 w-5/6 max-w-[1500px] flex flex-col items-center gap-10">
          <h2 className="text-3xl">О нас</h2>
          <div className="flex justify-between">
            <img
              src="/we1.png"
              alt="number1"
              className="w-5/12 rounded-xl shadow-2xl object-cover h-[400px]"
            />
            <div className="flex w-1/2 flex-col justify-center gap-10 text-justify text-xl">
              <h3>Name</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
                harum beatae iusto voluptates provident eum modi totam
                temporibus sequi fugiat quae voluptatum molestias repudiandae,
                officia quis velit quibusdam est qui!
              </p>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex w-1/2 flex-col justify-center gap-10 text-justify text-xl">
              <h3>Name</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
                harum beatae iusto voluptates provident eum modi totam
                temporibus sequi fugiat quae voluptatum molestias repudiandae,
                officia quis velit quibusdam est qui!
              </p>
            </div>
            <img
              src="/we2.png"
              alt="number2"
              className="w-5/12 rounded-xl shadow-2xl object-cover h-[400px]"
            />
          </div>

          <div className="flex justify-between">
            <img
              src="/we3.png"
              alt="number3"
              className="w-5/12 rounded-xl shadow-2xl object-cover h-[400px]"
            />
            <div className="flex w-1/2 flex-col justify-center gap-10 text-justify text-xl">
              <h3>Name</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
                harum beatae iusto voluptates provident eum modi totam
                temporibus sequi fugiat quae voluptatum molestias repudiandae,
                officia quis velit quibusdam est qui!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <hr className="w-5/6"></hr>
      </div>
    </>
  );
};

export default AboutUs;
