import IMG1 from "../assets/IMG1.avif"
import bannerIMG from "../assets/bannerIMG.avif"
import BlogCard from "./BlogCard";

const BlogData = [
  {
    img: IMG1,
    title: "No one has ever become poor from giving.They have always been rich",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis doloribus quaerat inventore, ex soluta vero.",
    date: "April 22,2024",
    writer: "john",
  },
  {
    img: bannerIMG,
    title: "No one has ever become poor from giving.They have always been rich",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis doloribus quaerat inventore, ex soluta vero.",
    date: "April 22,2024",
    writer: "Anonymous",
  },
  {
    img: IMG1,
    title: "No one has ever become poor from giving.They have always been rich",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis doloribus quaerat inventore, ex soluta vero.",
    date: "April 22,2024",
    writer: "Imad",
  },
];
const Blogs = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white ">
      <div className="container py-8 ">
        <h1 className="mb-8 border-l-8 pl-2 text-center  text-3xl font-bold">Our Latest Blogs</h1>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 ">
          {BlogData.map((item,index) => (
            <BlogCard
            key={index}
              img={item.img}
              title={item.title}
              description={item.description}
              date={item.date}
              writer={item.writer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
