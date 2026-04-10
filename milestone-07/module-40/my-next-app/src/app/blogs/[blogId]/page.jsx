
const blogs = [
    {
      id: 1,
      title: "Understanding React Basics",
      author: "John Doe",
      date: "2024-01-10",
      category: "Programming",
      content:
        "This blog explains the fundamentals of React including components, props, and state.",
    },
    {
      id: 2,
      title: "Getting Started with Next.js",
      author: "Jane Smith",
      date: "2024-02-05",
      category: "Web Development",
      content:
        "Learn how to build fast and SEO-friendly applications using Next.js.",
    },
    {
      id: 3,
      title: "JavaScript ES6 Features",
      author: "Alex Johnson",
      date: "2024-03-12",
      category: "JavaScript",
      content:
        "Explore modern JavaScript features like arrow functions, destructuring, and modules.",
    },
    {
      id: 4,
      title: "CSS Flexbox Guide",
      author: "Emily Davis",
      date: "2024-04-20",
      category: "Design",
      content:
        "A complete guide to building responsive layouts using CSS Flexbox.",
    },
  ];


const BlogDetailsPage = async ({params}) => {
    const {blogId} = await params;
    const blog = blogs.find (blog => blog.id === parseInt(blogId));
    console.log("show me params",blog);
    return (
        <div>
            <h3 className="text-3xl">This is blog details page </h3>
            {
                blog && <div>
                    <h3>{blog.title}</h3>
                    <p>{blog.content}</p>
                </div>
            }
        </div>
    );
};

export default BlogDetailsPage;