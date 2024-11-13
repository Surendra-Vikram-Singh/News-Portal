import React from "react";
import NewsList from "./NewsList";
import { useState, useEffect } from "react";

export default function News(props) {
  const [articles, setArticles] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [page, setPage] = useState(0);

  const fetchData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&pageSize=${props.pageSize}&apiKey=c39e047ef9bc4fffb6f632787732c3e0`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container my-3">
      <div className="row">
        {articles.map((element) => {
          return (
            <div className="col-md-4" key={Math.random()}>
              <NewsList
                publishedAt={element.publishedAt}
                title={
                  element.title?.length > 45
                    ? element.title.substring(0, 35) + "..."
                    : element.title
                }
                description={
                  element.description?.length > 100
                    ? element.description.substring(0, 60) + "..."
                    : element.description
                }
                imageUrl={
                  element.urlToImage
                    ? element.urlToImage
                    : "https://resize.indiatvnews.com/en/centered/newbucket/1200_675/2023/11/breaking-news-live-1700276865-1700441177.jpg"
                }
                newsUrl={element.url}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
