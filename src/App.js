import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [articles, setArticles] = useState([]);
  const [country, setCountry] = useState("fr");
  const [category, setCategory] = useState("business");
  const changeCountry = e => {
    setCountry(e.target.value);
  };
  const changeCategory = e => {
    setCategory(e.target.value);
  };

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=c2171c3d7fd042bf8cc35a0f137c749e`,
      )
      .then(response => {
        setArticles(response.data.articles);
      });
  }, [country, category]);
  console.log(articles);
  return (
    <div>
      <select value={country} onChange={e => changeCountry(e)}>
        <option value="fr">FRANCE</option>
        <option value="in">India</option>
        <option value="id">Indonesia</option>
        <option value="ma">Morocco</option>
        <option value="ng">Nigeria</option>
        <option value="pl">Poland</option>
        <option value="ru">Russia</option>
        <option value="sa">Saudi Arabia</option>
        <option value="tr">Turkey</option>
        <option value="ae">UAE</option>
        <option value="gb">UK</option>
        <option value="us">USA</option>
        <option value="ve">Venuzuela</option>
      </select>

      <select value={category} onChange={e => changeCategory(e)}>
        <option value="business">Business</option>
        <option value="sport">Sport</option>
        <option value="politics">Politics</option>
        <option value="technology">Technology</option>
      </select>
      {articles.map((article, index) => (
        <div key={index}>
          <a href={article.url}>
            <h3>{article.title}</h3>
          </a>
          <img src={article.urlToImage} height="100px" />
          <p>{article.description}</p>
          <p>
            auhor: {article.author} - source: {article.source.name}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
