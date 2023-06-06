const VideoCard = ({ info }) => {
  if (info == null) return null;
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="sm:w-72 w-[20rem] text-gray-100 h-full">
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
