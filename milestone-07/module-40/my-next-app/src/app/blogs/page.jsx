import Link from "next/link";
import { Roboto } from 'next/font/google'
import { Pacifico } from 'next/font/google'
 

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
 
const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Blogs page',
  description: 'here is blog info',
}

const BlogPage = () => {
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


  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Blogs</h2>
      {
        blogs.map(blog => 
            <div className={roboto.className} key={blog.id}>
                <h2 className={pacifico.className}>{blog.title}</h2>
                <Link className="btn text-xs" href={`/blogs/${blog.id}`}>Show blog info</Link>
            </div>
        )
      }
    </div>
  );
};

export default BlogPage;
