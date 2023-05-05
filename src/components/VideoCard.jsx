const VideoCard = ({ info }) => {
  if (info == null) return null;
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="w-72 m-2 p-2">
      <img className="rounded-lg" src={thumbnails?.medium?.url}></img>
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};
export default VideoCard;
