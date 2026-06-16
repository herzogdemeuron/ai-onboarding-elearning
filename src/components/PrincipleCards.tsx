import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { PrincipleCard } from '../types';
import { getAssetPath } from '../utils/assetPath';
import styles from './PrincipleCards.module.css';

const iconMap: Record<string, string> = {
  p1: getAssetPath('/images/human-accountability.png'),
  p2: getAssetPath('/images/design-quality.png'),
  p3: getAssetPath('/images/authorship-ip.png'),
  p4: getAssetPath('/images/efficient-use.png'),
  p5: getAssetPath('/images/security.png'),
  p6: getAssetPath('/images/transparency.png'),
};

interface PrincipleCardsProps {
  cards: PrincipleCard[];
  onComplete: () => void;
  isCompleted: boolean;
}

export function PrincipleCards({ cards, onComplete, isCompleted }: PrincipleCardsProps) {
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);
  const [viewedCards, setViewedCards] = useState<Set<string>>(new Set());
  const [showOverlay, setShowOverlay] = useState(!isCompleted);

  const allCardsViewed = viewedCards.size === cards.length;

  useEffect(() => {
    if (allCardsViewed && !isCompleted) {
      onComplete();
    }
  }, [allCardsViewed, isCompleted, onComplete]);

  const handleCardClick = (index: number) => {
    if (selectedCardIndex !== null) {
      setViewedCards(prev => new Set([...prev, cards[selectedCardIndex].id]));
    }
    setSelectedCardIndex(index);
    setShowOverlay(false);
  };

  const handleClose = () => {
    if (selectedCardIndex !== null) {
      setViewedCards(prev => new Set([...prev, cards[selectedCardIndex].id]));
    }
    setSelectedCardIndex(null);
  };

  const handlePrevious = () => {
    if (selectedCardIndex !== null && selectedCardIndex > 0) {
      setViewedCards(prev => new Set([...prev, cards[selectedCardIndex].id]));
      setSelectedCardIndex(selectedCardIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedCardIndex !== null && selectedCardIndex < cards.length - 1) {
      setViewedCards(prev => new Set([...prev, cards[selectedCardIndex].id]));
      setSelectedCardIndex(selectedCardIndex + 1);
    }
  };

  const selectedCard = selectedCardIndex !== null ? cards[selectedCardIndex] : null;

  return (
    <div className={styles.container}>
      <div className={styles.cardsGrid}>
        {cards.map((card, index) => (
          <button
            key={card.id}
            className={`${styles.card} ${viewedCards.has(card.id) ? styles.viewed : ''}`}
            onClick={() => handleCardClick(index)}
          >
            {viewedCards.has(card.id) && (
              <div className={styles.viewedBadge}>
                <Check size={14} />
              </div>
            )}
            <div className={styles.cardIcon}>
              {iconMap[card.id] ? (
                <img src={iconMap[card.id]} alt={card.title} className={styles.iconImage} />
              ) : (
                <div className={styles.iconPlaceholder} />
              )}
            </div>
            <div className={styles.cardTitle}>{card.title}</div>
          </button>
        ))}
      </div>

      {showOverlay && !isCompleted && (
        <div className={styles.overlay} onClick={() => setShowOverlay(false)}>
          <button className={styles.overlayCard} onClick={() => setShowOverlay(false)}>
            <p className={styles.overlayText}>
              Click each principle to learn what it means in practice.
            </p>
          </button>
        </div>
      )}

      {selectedCard && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <div className={styles.modalIcon}>
                {iconMap[selectedCard.id] ? (
                  <img src={iconMap[selectedCard.id]} alt={selectedCard.title} className={styles.iconImage} />
                ) : (
                  <div className={styles.iconPlaceholder} />
                )}
              </div>
              <button className={styles.closeButton} onClick={handleClose}>
                <X size={24} />
              </button>
            </div>

            <div className={styles.modalBody}>
              <div className={styles.modalTitleRow}>
                <h3 className={styles.modalTitle}>
                  {selectedCardIndex !== null ? selectedCardIndex + 1 : ''}. {selectedCard.title}
                </h3>
                {viewedCards.has(selectedCard.id) && (
                  <div className={styles.modalViewedBadge}>
                    <Check size={14} />
                    <span>Viewed</span>
                  </div>
                )}
              </div>
              <p className={styles.modalSubtitle}>
                <span className={styles.modalSubtitleMarker}>{selectedCard.subtitle}</span>
              </p>
              <p className={styles.modalDescription}>{selectedCard.description}</p>
              <div className={styles.contentList}>
                {selectedCard.details.map((item, idx) => (
                  <div key={idx} className={styles.contentItem}>
                    <span className={styles.contentText}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.modalFooter}>
              <button 
                className={styles.arrowButton} 
                onClick={handlePrevious}
                disabled={selectedCardIndex === 0}
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                className={styles.arrowButton} 
                onClick={handleNext}
                disabled={selectedCardIndex === cards.length - 1}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      )}

      {allCardsViewed && (
        <div className={styles.completionMessage}>
          All principles reviewed
        </div>
      )}
    </div>
  );
}
