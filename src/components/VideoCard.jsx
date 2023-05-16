const VideoCard = ({ info }) => {
  if (info == null) return null;
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="w-72 shadow-lg bg-gray-600 text-gray-100 h-full p-2 rounded-lg shadow-gray-800nm">
      <img
        className="rounded-lg border border-spacing-2gray-200"
        src={thumbnails?.medium?.url}
      ></img>
      <ul>
        <li className="font-bold">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};
export default VideoCard;
