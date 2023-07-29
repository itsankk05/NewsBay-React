import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card" style={{ width: "18rem" }}>
        <span
          className="badge rounded-pill bg-danger"
          style={{
            display: "flex",
            justifyContent: "flex - end",
            position: "absolute",
            right: "0",
          }}
        >
          {source}
          <span className="visually-hidden"></span>
        </span>
        <img
          src={
            !imageUrl
              ? "https://www.notateslaapp.com/images/news/2023/loot-rewards.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            {title}... <span className="badge text-bg-success">Success</span>
          </h5>
          <p className="card-text">{description}...</p>

          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-dark"
          >
            Read More
          </a>

          <p className="card-text">
            <small className="text-body-secondary">
              By {!author ? "unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
