import { useEffect, useState } from "react";
import { YOUTUBE_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import ShimmerContainer from "./ShimmerContainer";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_URL);
      const json = await data.json();
      setVideos(json?.items || []); // fallback if API returns undefined
    } catch (error) {
      console.error("Failed to fetch videos:", error);
      setVideos([]); // fallback on error
    }
  };

  return (
    <div className="p-4 sm:p-6 bg-gradient-to-b from-gray-800 to-gray-900 min-h-screen">
      {videos.length === 0 ? (
        <ShimmerContainer />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {videos.map((video) => (
            <Link
              to={"/watch?v=" + video.id}
              key={video.id}
              className="transform transition duration-300 hover:scale-105 hover:shadow-xl rounded-lg overflow-hidden"
            >
              <VideoCard info={video} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoContainer;
