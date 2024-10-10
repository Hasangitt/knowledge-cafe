import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="w-1/3 bg-gray-200 ml-3">
            <h2 className="text-xl font-semibold text-center m-3 bg-white rounded-lg ">Bookmarks Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark> )
            }
        </div>
    );
};

export default Bookmarks;