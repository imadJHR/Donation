const FooterLinks = ({ links }) => {
  return (
    <div>
      {links.map((link) => (
        <li
          key={link.name}
          className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]"
        >
          <a href="">{link.name}</a>
        </li>
      ))}
    </div>
  );
};

export default FooterLinks;
