import PropTypes from "prop-types";
import { CiBookmarkPlus } from "react-icons/ci";

const Blog = ({blog, hadleAddtoBookmark}) => {
    const {title, cover_image, author_name, author_image, post_date, reading_time, hashtags} = blog;
    return (
        <div>
            <img className="w-full" src={cover_image} alt={`cover picture of the title${title}`} />
            <div className="flex items-center justify-between mt-8">
                <div className="flex gap-5 items-center mb-5">
                    <img className="w-[60px]" src={author_image} alt="author image" />
                    <div>
                        <h5>{author_name}</h5>
                        <p>{post_date}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <span>{reading_time} min read</span>
                    <button 
                    onClick={() => hadleAddtoBookmark(blog)}
                    className="text-red-700 text-3xl"><CiBookmarkPlus></CiBookmarkPlus>
                    </button>
                </div>
            </div>
            <h2 className="text-4xl mb-5">{title}</h2>
            {hashtags.map((hash, idx) => <span key={idx}><a href=""> {hash} </a></span>)}
        </div>
    );
};



export default Blog;