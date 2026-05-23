// key: `${lessonIndex}-${videoIndex}` → File object
const pendingVideos = new Map();

export const setPendingVideo = (lessonIndex, videoIndex, file) => {
  pendingVideos.set(`${lessonIndex}-${videoIndex}`, file);
};

export const getPendingVideo = (lessonIndex, videoIndex) => {
  return pendingVideos.get(`${lessonIndex}-${videoIndex}`);
};

export const clearPendingVideos = () => pendingVideos.clear();
