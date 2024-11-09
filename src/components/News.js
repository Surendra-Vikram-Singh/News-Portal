import React, { Component } from "react";
import NewsList from "./NewsList";
export default class news extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?category=business&apiKey=c39e047ef9bc4fffb6f632787732c3e0";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
  }

  render() {
    return (
      <div className="container my-3">
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4">
                <NewsList
                  title={
                    element.title?.length > 45
                      ? element.title.substring(0, 45) + "..."
                      : element.title
                  }
                  description={
                    element.description?.length > 100
                      ? element.description.substring(0, 100) + "..."
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
}
