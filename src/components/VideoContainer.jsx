import { useEffect, useState } from "react";
import { YOUTUBE_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_URL);
    const json = await data.json();
    setVideos(json?.items);
    // console.log(json.items[0].snippet.title);
  };

  // if (videos == []) return null;

  return (
    <div className="flex flex-wrap scroll-smooth">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
