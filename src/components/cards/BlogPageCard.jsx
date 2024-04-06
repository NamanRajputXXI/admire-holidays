// import React, { useState } from "react";
// import { CiCalendarDate } from "react-icons/ci";
// import { FaRegCommentDots, FaRegFolderOpen } from "react-icons/fa";

// const BlogPageCard = ({ imageUrl, title, date, comment, detail }) => {
//   const [expanded, setExpanded] = useState(false);

//   const toggleExpanded = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <div className="w-[100%] flex flex-col gap-10">
//       <img src={imageUrl} className="w-[100%]" alt="" />
//       <h1 className="md:text-3xl text-xl font-semibold">{title}</h1>
//       <div className="flex text-xs sm:text-base gap-10 items-center">
//         <div className="flex items-center sm:flex-row flex-col gap-3">
//           <CiCalendarDate size={30} color="#ef4444" />
//           <p className="text-gray-600">{date}</p>
//         </div>
//         <div className="flex items-center gap-3 sm:flex-row flex-col">
//           <FaRegFolderOpen size={30} color="#ef4444" />
//           <p className="text-gray-600">Travel</p>
//         </div>
//         <div className="flex items-center gap-3 sm:flex-row flex-col">
//           <FaRegCommentDots size={30} color="#ef4444" />
//           <p className="text-gray-600">{comment}</p>
//         </div>
//       </div>
//       <div className="flex flex-col gap-1">
//         <p>
//           <strong>Introduction</strong>:
//         </p>
//         <p className={`sm:text-base text-sm ${expanded ? "" : "line-clamp-3"}`}>
//           {detail}
//         </p>
//       </div>
//       <button
//         className="w-fit px-5 h-11 rounded-xl text-white bg-[#ef4444]"
//         onClick={toggleExpanded}
//       >
//         {expanded ? "Read Less" : "Read More"}
//       </button>
//     </div>
//   );
// };

// export default BlogPageCard;
import React, { useState } from "react";
import { CiCalendarDate } from "react-icons/ci";
import { FaRegCommentDots, FaRegFolderOpen } from "react-icons/fa";
import "../../styles/custom.css"; // Import CSS file for custom styles

const BlogPageCard = ({ imageUrl, title, date, comment, detail }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="blog-page-card">
      <img src={imageUrl} className="card-image" alt="" />
      <h1 className="card-title">{title}</h1>
      <div className="card-metadata">
        <div className="metadata-item">
          <CiCalendarDate size={30} color="#ef4444" />
          <p>{date}</p>
        </div>
        <div className="metadata-item">
          <FaRegFolderOpen size={30} color="#ef4444" />
          <p>Travel</p>
        </div>
        <div className="metadata-item">
          <FaRegCommentDots size={30} color="#ef4444" />
          <p>{comment}</p>
        </div>
      </div>
      <div className="card-detail">
        <p>
          <strong>Introduction</strong>:
        </p>
        <p className={`detail-text ${expanded ? "expanded" : ""}`}>{detail}</p>
      </div>
      {!expanded && (
        <button className="toggle-button" onClick={toggleExpanded}>
          Read More
        </button>
      )}
      {expanded && (
        <button className="toggle-button" onClick={toggleExpanded}>
          Read Less
        </button>
      )}
    </div>
  );
};

export default BlogPageCard;
