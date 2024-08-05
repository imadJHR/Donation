const Banner2 = () => {
  return (
    <div className="bg-slate-100 dark:bg-slate-900 dark:text-white *:">
      <div className="container md:h-[500px] flex items-center justify-center py-10">
        <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-2">
          <div className="container space-y-10 ">
            <h1 className="text-2xl md:text-4xl mb-4  font-semibold">
              Help The Needy People
            </h1>
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
          <div>
            <img
              src="https://img.freepik.com/photos-gratuite/mains-colorees-au-festival-gros-plan_23-2148338000.jpg?t=st=1722729292~exp=1722732892~hmac=abea1290f6a2001194949d9785373bfb2fca787b7e3839e6625c6b71f3b5b244&w=996"
              alt=""
              className="mx-auto w-full p-4 md:max-w-full h-[300px] md:h-[350px] object-cover   rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
