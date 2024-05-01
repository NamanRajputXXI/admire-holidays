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
      <div className="card-metadata sm:gap-5 gap-3 ">
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
