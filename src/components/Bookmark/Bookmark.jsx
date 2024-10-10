
const Bookmark = ({bookmark}) => {
   const {title} = bookmark;
    return (
            <div className="bg-white p-3 m-3 rounded-lg">
                 <h4 className="text-xl font-semibold">{title}</h4>
            </div>

    );
};

export default Bookmark;