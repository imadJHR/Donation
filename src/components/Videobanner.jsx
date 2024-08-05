const Videobanner = () => {
  return (
    <div className="bg-primary ">
      <div className="container py-8 md:py-16  ">
        <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-4 md:gap-8 ">
          {/*video scetion */}
          <div>
            <iframe
              width="90%"
              height="90%"
              src="https://www.youtube.com/embed/StuD65aRrb8?si=FYaNkxwfJAv9QVuO"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              className="aspect-video w-fulll"
            ></iframe>
          </div>

          {/*text-section */}
          <div className="soace-y-4 text-center md:text-left text-white">
            <h1 className="text-4xl font-bold">Watch Our video</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam modi deleniti provident, itaque incidunt odio quibusdam
              molestiae eaque nulla quam ducimus fugit aliquam laudantium illum
              optio molestias repellat labore veniam.
            </p>
            <button className="btn-primary !bg-white !text-black
            ">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videobanner;
