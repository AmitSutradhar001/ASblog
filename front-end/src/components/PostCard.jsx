import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <div className="gap-3 w-72 h-96 flex flex-col justify-around px-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/post/${post.slug}`} className="border-b-2">
        <img
          className="rounded-t-lg h-48 w-full"
          src={post.image}
          alt="cover image"
        />
      </Link>
      <div className="p-5">
        <h5 className="mb-2 line-clamp-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          {post.title}
        </h5>
        <Link
          to={`/post/${post.slug}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
