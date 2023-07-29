import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const newsUpdate = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(60);

    setArticles(parsedData.articles);
    setLoading(false);
    setTotalResults(parsedData.totalResults);

    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    newsUpdate();
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;

    setPage(page + 1);
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  return (
    <>
      <h1 className="text-center" style={{ marginTop: "80px" }}>
        NewsBay - {capitalizeFirstLetter(props.category)}
      </h1>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={loading && <Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles?.map((element, index) => {
              return (
                <div className="col md-3" key={index}>
                  <NewsItem
                    title={String(element.title).slice(0, 45)}
                    description={String(element.description).slice(0, 88)}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};
News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
  totalResults: 0,
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
