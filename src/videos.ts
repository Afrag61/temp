const videos = import.meta.glob('./assets/**/*.mp4', {
  eager: true,
  query: 'url',
  import: 'default',
});

console.log('videos', videos);

export const videosList = Object.values(videos) as string[];

console.log('list', videosList);

const images = import.meta.glob('./assets/**/*.jpg', {
  eager: true,
  query: 'url',
  import: 'default',
});

console.log('images', images);

export const imagesList = Object.values(images) as string[];
