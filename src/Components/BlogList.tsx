const BlogList = () => {
  const blogList = [
    {
      title: "Building Kernels in WSL",
      date: "October 22, 2020",
      url: "",
    },
    {
      title: "Blogs and Stuff",
      date: "May 7, 2020",
      url: "",
    },
  ];

  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-4">blog posts</h1>
      <ul className="ml-4">
        {blogList.map((blogEntry) => (
          <li className="mb-2 list-disc">
            <a
              href="./blogs/building-kernels-in-wsl.html"
              className="underline"
            >
              {blogEntry.title}
            </a>
            <br />
            <span className="italic">{blogEntry.date}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BlogList;
