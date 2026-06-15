import { useState } from 'react';
import { Users, MessageSquare, ThumbsUp, Send } from 'lucide-react';
import { CollaborativeReflection as CollaborativeReflectionType, CommunityResponse } from '../types';
import styles from './CollaborativeReflection.module.css';

interface CollaborativeReflectionProps {
  reflection: CollaborativeReflectionType;
}

export function CollaborativeReflection({ reflection }: CollaborativeReflectionProps) {
  const [response, setResponse] = useState('');
  const [localResponses, setLocalResponses] = useState<CommunityResponse[]>(reflection.communityResponses);
  const [likedResponses, setLikedResponses] = useState<Set<string>>(new Set());

  const handleSubmit = () => {
    if (!response.trim()) return;

    const newResponse: CommunityResponse = {
      id: `local-${Date.now()}`,
      authorInitials: 'YO',
      authorName: 'You',
      timeAgo: 'Just now',
      content: response,
      likes: 0
    };

    setLocalResponses([newResponse, ...localResponses]);
    setResponse('');
  };

  const handleLike = (responseId: string) => {
    if (likedResponses.has(responseId)) {
      const newLiked = new Set(likedResponses);
      newLiked.delete(responseId);
      setLikedResponses(newLiked);
      setLocalResponses(localResponses.map(r => 
        r.id === responseId ? { ...r, likes: r.likes - 1 } : r
      ));
    } else {
      setLikedResponses(new Set([...likedResponses, responseId]));
      setLocalResponses(localResponses.map(r => 
        r.id === responseId ? { ...r, likes: r.likes + 1 } : r
      ));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.iconWrapper}>
          <Users size={16} className={styles.headerIcon} />
        </div>
        <h3 className={styles.title}>Collaborative Reflection</h3>
      </div>

      <div className={styles.notice}>
        <MessageSquare size={16} />
        <span>Your answer will be visible to other participants.</span>
      </div>

      <p className={styles.prompt}>{reflection.prompt}</p>

      <div className={styles.inputSection}>
        <textarea
          className={styles.textarea}
          placeholder="Share your thinking here..."
          value={response}
          onChange={(e) => setResponse(e.target.value)}
          rows={3}
        />
        <button 
          className={styles.submitButton} 
          onClick={handleSubmit}
          disabled={!response.trim()}
        >
          <Send size={16} />
          Post response
        </button>
      </div>

      <div className={styles.sharedWall}>
        <h4 className={styles.wallTitle}>Shared learning wall</h4>
        <div className={styles.responsesList}>
          {localResponses.map((communityResponse) => (
            <div key={communityResponse.id} className={styles.responseCard}>
              <div className={styles.responseHeader}>
                <div className={styles.avatar}>
                  {communityResponse.authorInitials}
                </div>
                <div className={styles.authorInfo}>
                  <span className={styles.authorName}>{communityResponse.authorName}</span>
                  <span className={styles.timeAgo}>{communityResponse.timeAgo}</span>
                </div>
              </div>
              <p className={styles.responseContent}>{communityResponse.content}</p>
              <button 
                className={`${styles.likeButton} ${likedResponses.has(communityResponse.id) ? styles.liked : ''}`}
                onClick={() => handleLike(communityResponse.id)}
              >
                <ThumbsUp size={14} />
                <span>{communityResponse.likes}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
