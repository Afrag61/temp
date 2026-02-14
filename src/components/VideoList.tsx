import data from '../data.json';
import VideoItem from './VideoItem';

const VideoList = () => {
  return (
    <div className='mt-40 list-none grid grid-cols-1 md:gap-8 md:grid-cols-2 lg:grid-cols-3 mx-2.5 h-40'>
      {data.map((vid, i) => {
        return <VideoItem key={i} video={vid} />;
      })}
    </div>
  );
};

export default VideoList;
