import IMG from ".././assets/bannerIMG.avif";

const Banner = () => {
  return (
    <div className="bg-slate-100 dark:bg-slate-900 dark:text-white *:">
      <div className="container md:h-[500px] flex items-center justify-center py-10">
        <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-2">
          <div>
            <img src={IMG} alt="" className="mx-auto w-full p-4 md:max-w-full h-[300px] md:h-[350px] object-cover   rounded-3xl" />
          </div>
          <div className="container space-y-10 ">
            <h1 className="text-2xl md:text-4xl mb-4  font-semibold">Help The Needy People</h1>
            <ul className="flex list-inside list-disc flex-col gap-2 md:gap-4">
              <li className="font-medium">
                Always give without remembering and always receive without
                forgetting
              </li>
              <li className="font-medium">
                Giving does not only precede receiving it is the reason for it{" "}
              </li>
              <li className="font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, maxime quibusdam.
              </li>
            </ul>
            <button className="bg-white text-primary border border-primary p-3 rounded-md ">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
