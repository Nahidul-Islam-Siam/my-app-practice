import Link from "next/link";


const BlogsPage = () => {
    return (
        <div className="p-24">
          {
            blogs.map(blog=>(
                <div key={blog.slug} className="border-2 p-12">
<h3 >{blog.title}</h3>
<h3>{blog.description}</h3>
<button className="bg-red-400 p-3">
<Link href={`/blogs/${blog.slug}`}>View Details</Link>
    </button>
                </div>
            ))
          }
        </div>
    );
};
const blogs = [
    {
      slug: "introduction-to-nextjs",
      title: "Introduction to Next.js",
      description: "A beginner's guide to getting started with Next.js, a popular React framework for building server-rendered applications."
    },
    {
      slug: "mastering-tailwindcss",
      title: "Mastering Tailwind CSS",
      description: "Learn how to harness the power of Tailwind CSS to create responsive and modern web designs with ease."
    },
    {
      slug: "building-with-react-hooks",
      title: "Building with React Hooks",
      description: "Discover the magic of React Hooks and how they simplify state management and side effects in functional components."
    },
    {
      slug: "typescript-best-practices",
      title: "TypeScript Best Practices",
      description: "Explore the best practices for writing clean and maintainable TypeScript code in your projects."
    },
    {
      slug: "full-stack-development-mern",
      title: "Full-Stack Development with MERN",
      description: "A comprehensive guide to building full-stack applications using MongoDB, Express.js, React, and Node.js."
    }
  ];
  

export default BlogsPage;