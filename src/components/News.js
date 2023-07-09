import React, { useEffect, useState } from 'react'
import './News.css'
import Card from './Card'
import Spinner from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useLocation } from 'react-router-dom'

function News(props) {
  const [page, setPage] = useState(1)
  const [apiData, setapiData] = useState([])
  const [totalResults, setTotalResults] = useState(0)
  const [loading, setLoading] = useState(false)

  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const query = queryParams.get('query') || '';
  
  useEffect(() => {
    setLoading(true)
    props.setProgress(10)
        
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&q=${query}&pageSize=${props.pageSize}`;
    const url2 = `https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    // console.log(query)

    fetch(query? url2 : url)
    .then(response => {
      props.setProgress(30)
      return response.json()
    })
    .then(data => {
      props.setProgress(100)
      setapiData(data.articles)
      setTotalResults(query ? 100 : data.totalResults)
      setLoading(false)
    })
    // eslint-disable-next-line
  }, [query])

  // function handleNext() {
  //   setPage(prev => prev+1)
  // }

  // function handlePrev() {
  //   setPage(prev => prev-1)
  // }

  function fetchData() {
    setLoading(true)

    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&q=${query}&pageSize=${props.pageSize}`
    const url2 = `https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;

    fetch(query? url2 : url)
    .then(response => response.json())
    .then(data => {
      setapiData(prevData => prevData.concat(data.articles))
      setTotalResults(query ? 100 : data.totalResults)
      setLoading(false)
    })
    setPage(prev => prev+1)
  }

  const cards = apiData.map((news, index)=> {
    return(
      <Card title={news.title} description={news.description} imageUrl={news.urlToImage} key={index} link={news.url} author={news.author} date={news.publishedAt} source={news.source.name}/>
    )
  })

  if(cards.length <= 0) {
    return (
      <h1 style={{textAlign: 'center', padding: '20px'}}> OOPS!!! No news found🥲 <br/> click on the logo to go back to home!!!</h1>
    )
  }

  return (
    <div className="news">
      {loading && <Spinner/>}
      
      <h2 className="newsCategory"> <span>Top HeadLines</span> </h2>

      <InfiniteScroll
        dataLength={apiData.length} //This is important field to render the next data
        next={fetchData}
        hasMore={apiData.length !== totalResults}
        loader={loading && <Spinner/>}
        endMessage={
          <h3 style={{
            color: 'white',
            marginTop: '10px',
            padding: '20px',
            backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '10px',
            textAlign: 'center'
          }}>
            Woah, You are all caught Up!!!
          </h3>
        }
      >
        <div className="cardContainer">
          {cards}
        </div>
      </InfiniteScroll>

      {/* <div className="pageButtons">
        {!loading && <button disabled={page<=1} onClick={handlePrev}> &#8630; prev</button>}
        {!loading && <button disabled={page + 1 > Math.ceil(totalResults/20)} onClick={handleNext}>next &#8631;</button>}
      </div> */}
    </div>
  )
}

export default News