import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import NoPage from './components/NoPage';
import {useState } from 'react';
import LoadingBar from 'react-top-loading-bar';
import Footer from './components/Footer';

function App() {
  const [progress, setProgress] = useState(0)
  const apiKey = process.env.REACT_APP_NEWS_API

  return (
    <BrowserRouter>
      <div className="App">
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Navbar/>

        <Routes>
          <Route index element={<News setProgress={setProgress} apiKey={apiKey}  key='general' pageSize={12} country="in" category="general"/>}/> {/* default route for the app */}
          <Route path="/business" element={<News setProgress={setProgress} apiKey={apiKey}  key='business' pageSize={12} country="in" category="business"/>}/>
          <Route path="/health" element={<News setProgress={setProgress} apiKey={apiKey}  key='health' pageSize={12} country="in" category="health"/>}/>
          <Route path="/science" element={<News setProgress={setProgress} apiKey={apiKey}  key='general' pageSize={12} country="in" category="science" query=""/>}/>
          <Route path="/sports" element={<News setProgress={setProgress} apiKey={apiKey}  key='sports' pageSize={12} country="in" category="sports" query=""/>}/>
          <Route path="/technology" element={<News setProgress={setProgress} apiKey={apiKey}  key='technology' pageSize={12} country="in" category="technology" query=""/>}/>
          <Route path="/search" element={<News setProgress={setProgress} apiKey={apiKey}  key='search' pageSize={12} country="" category=""/>}/>
          <Route path="*" element={<NoPage/>} /> {/* all the undefinded paths will be handled here leading to NoPage */}
        </Routes>

        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
