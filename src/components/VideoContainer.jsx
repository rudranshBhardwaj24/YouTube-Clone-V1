import { useEffect, useState } from "react";
import { YOUTUBE_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import ShimmerContainer from "./ShimmerContainer";
const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_URL);
    const json = await data.json();
    setVideos(json?.items);
    console.log(videos);
    // console.log(json.items[0].snippet.title);
  };

  // if (videos == []) return null;

  return videos.length == 0 ? (
    <ShimmerContainer />
  ) : (
    <div className="flex flex-col sm:flex-row sm:flex-wrap scroll-smooth gap-2 sm:gap-4 mb-4 justify-center sm:items-start items-center bg-gray-600">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
