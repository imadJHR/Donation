// eslint-disable-next-line react/prop-types
const BlogCard = ({ title, description, img, date, writer }) => {
  return (
    <div className="p-4 shadow-lg  transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white">
      <div className="overflow-hidden">
        <img
          src={img}
          alt=""
          className="mx-auto h-[250px] object-cover w-full transition duration-700 hover:scale-125 "
        />
      </div>
      <div className="flex justify-between pt-2 text-slate-600 text-sm">
        <p>{date}</p>
        <p className="line-clamp-1">by {writer}</p>
      </div>
      <div className="space-y-2 py-3">
        <h1 className="line-clamp-3 font-bold">{title}</h1>
        <p className="line-clamp-4 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
