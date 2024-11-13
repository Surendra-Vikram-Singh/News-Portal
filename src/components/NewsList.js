import React, { useEffect, useState } from "react";

export default function NewsList({
  title,
  description,
  imageUrl,
  newsUrl,
  publishedAt,
}) {
  let [day, setDay] = useState("");

  let dateFormat = () => {
    let date = new Date(publishedAt);
    setDay(date.getDay());
  };

  useEffect(() => {
    dateFormat();
  }, []);

  return (
    <div className="my-3">
      <div className="card" style={{ width: "18rem", height: "auto" }}>
        <img
          className="card-img-top"
          style={{ height: "200px" }}
          src={imageUrl}
          alt="News"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-primary"
          >
            Read More
          </a>
        </div>
        <div className="card-footer text-center text-muted">{day} Days Ago</div>
      </div>
    </div>
  );
}
