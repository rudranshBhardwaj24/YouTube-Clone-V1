const VideoCard = ({ info }) => {
  if (info == null) return null;
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="sm:w-72 w-[20rem] bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
      <img
        className="w-full h-44 object-cover hover:scale-105 transition-transform duration-300"
        src={thumbnails?.medium?.url}
        alt={title}
      />
      <div className="p-3">
        <h3 className="text-lg font-semibold text-gray-100 truncate">
          {title}
        </h3>
        <p className="text-sm text-gray-400 mt-1">{channelTitle}</p>
        <p className="text-sm text-gray-400 mt-1">
          {Number(statistics?.viewCount).toLocaleString()} views
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
