import { useState, useRef, useEffect } from 'react';
import { Play, Check } from 'lucide-react';
import { VideoTutorial } from '../types';
import { getAssetPath } from '../utils/assetPath';
import styles from './VideoPlayer.module.css';

interface VideoPlayerProps {
  video: VideoTutorial;
  onWatched?: () => void;
  isModuleCompleted?: boolean;
}

export function VideoPlayer({ video, onWatched, isModuleCompleted = false }: VideoPlayerProps) {
  const [hasStarted, setHasStarted] = useState(false);
  const [isWatched, setIsWatched] = useState(isModuleCompleted);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setHasStarted(isModuleCompleted);
    setIsWatched(isModuleCompleted);
    if (videoRef.current && !isModuleCompleted) {
      videoRef.current.currentTime = 0;
    }
  }, [video.videoUrl, isModuleCompleted]);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setHasStarted(true);
    }
  };

  const handlePlaceholderClick = () => {
    setHasStarted(true);
    setIsWatched(true);
    onWatched?.();
  };

  const handleVideoEnd = () => {
    setIsWatched(true);
    onWatched?.();
  };

  const handleTimeUpdate = () => {
    if (!hasStarted) {
      setHasStarted(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.videoGroup}>
        <div className={styles.topLabel}>
          <div className={styles.videoTitle}>
            <span>{video.title}</span>
          </div>
          <div className={styles.videoDuration}>
            <span>{video.duration || '00 min'}</span>
          </div>
        </div>

        <div className={styles.videoArea}>
          {video.videoUrl ? (
            <div className={styles.videoWrapper}>
              <video
                ref={videoRef}
                className={styles.video}
                src={video.videoUrl ? getAssetPath(video.videoUrl) : undefined}
                controls
                onEnded={handleVideoEnd}
                onTimeUpdate={handleTimeUpdate}
                playsInline
              />
              {!hasStarted && (
                <button className={styles.playOverlay} onClick={handlePlay}>
                  <Play size={32} fill="currentColor" />
                </button>
              )}
            </div>
          ) : (
            <div className={styles.videoPlaceholder}>
              <button className={styles.playButton} onClick={handlePlaceholderClick}>
                <Play size={24} fill="currentColor" />
              </button>
            </div>
          )}
        </div>

        <div className={styles.bottomLabel}>
          <span className={`${styles.watchStatus} ${isWatched ? styles.watched : ''}`}>
            {isWatched && <Check size={16} className={styles.checkIcon} />}
            {isWatched ? 'Watched' : 'Unwatched'}
          </span>
        </div>
      </div>
    </div>
  );
}
