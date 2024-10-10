import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="w-1/3 bg-gray-200 ml-3">
            <div className="text-center text-2xl font-semibold bg-white p-2 rounded-lg m-3">
                <h2>Reading Time: {readingTime}</h2>
            </div>
            <h2 className="text-xl font-semibold text-center m-3 bg-white rounded-lg ">Bookmarks Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark> )
            }
        </div>
    );
};

export default Bookmarks;