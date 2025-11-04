import { AffHubSVG } from '@/assets';
import { useTranslation } from '@/i18n';
import React, { useCallback, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

interface PhotoItem {
    id: number;
    src: string;
    alt: string;
}

const photos: PhotoItem[] = [
    { id: 1, src: '/images/collection-photo/image-1.webp', alt: 'Photo 1' },
    { id: 2, src: '/images/collection-photo/image-2.webp', alt: 'Photo 2' },
    { id: 3, src: '/images/collection-photo/image-3.webp', alt: 'Photo 3' },
    { id: 4, src: '/images/collection-photo/image-4.webp', alt: 'Photo 4' },
    { id: 5, src: '/images/collection-photo/image-1.webp', alt: 'Photo 5' },
    { id: 6, src: '/images/collection-photo/image-2.webp', alt: 'Photo 6' },
    { id: 7, src: '/images/collection-photo/image-3.webp', alt: 'Photo 7' },
    { id: 8, src: '/images/collection-photo/image-4.webp', alt: 'Photo 8' },
    { id: 9, src: '/images/collection-photo/image-1.webp', alt: 'Photo 9' },
    { id: 10, src: '/images/collection-photo/image-2.webp', alt: 'Photo 10' },
    { id: 11, src: '/images/collection-photo/image-3.webp', alt: 'Photo 11' },
    { id: 12, src: '/images/collection-photo/image-4.webp', alt: 'Photo 12' },
    { id: 13, src: '/images/collection-photo/image-1.webp', alt: 'Photo 13' },
    { id: 14, src: '/images/collection-photo/image-2.webp', alt: 'Photo 14' },
    { id: 15, src: '/images/collection-photo/image-3.webp', alt: 'Photo 15' },
    { id: 16, src: '/images/collection-photo/image-4.webp', alt: 'Photo 16' },
    { id: 17, src: '/images/collection-photo/image-1.webp', alt: 'Photo 17' },
    { id: 18, src: '/images/collection-photo/image-2.webp', alt: 'Photo 18' },
    { id: 19, src: '/images/collection-photo/image-3.webp', alt: 'Photo 19' },
    { id: 20, src: '/images/collection-photo/image-4.webp', alt: 'Photo 20' },
    { id: 21, src: '/images/collection-photo/image-1.webp', alt: 'Photo 21' },
];

const INITIAL_PHOTOS_COUNT = 9;
const EAGER_LOAD_COUNT = 3; // Количество фото для eager loading

interface CollectionPhotoProps {
    isFullPage?: boolean;
}

const CollectionPhoto: React.FC<CollectionPhotoProps> = ({ isFullPage = false }) => {
    const { t } = useTranslation();
    const [isExpanded, setIsExpanded] = useState(false);

    // Определяем отображаемые фото: по умолчанию 9, при расширении - все
    const displayedPhotos = useMemo(() => {
        return isExpanded ? photos : photos.slice(0, INITIAL_PHOTOS_COUNT);
    }, [isExpanded]);

    const hasMorePhotos = photos.length > INITIAL_PHOTOS_COUNT;

    const handleButtonClick = useCallback(() => {
        if (isFullPage) {
            setIsExpanded(prev => !prev);
        }
    }, [isFullPage]);

    const buttonText = useMemo(() => {
        if (!isFullPage) {
            return t('collectionPhoto.learnMore');
        }
        return isExpanded ? t('collectionPhoto.collapse') : t('collectionPhoto.expand');
    }, [isFullPage, isExpanded, t]);

    const imagesInnerClassName = useMemo(() => {
        return isFullPage ? 'collection-photo__images_inner collection-photo__images_inner--photo-page' : 'collection-photo__images_inner';
    }, [isFullPage]);

    return (
        <section className="collection-photo" id="collection-photo">
            <div className="collection-photo__container page-width">
                <h2 className="collection-photo__title custom-heading-primary">PHOTO</h2>
                <p className="collection-photo__subtitle custom-heading-secondary">
                    {t('collectionPhoto.subtitle')}
                </p>
                <div className="collection-photo__heading_inner">
                    <AffHubSVG />
                    <p className="collection-photo__heading_inner_text">*БАШ АРБІТРАЖ ПЛЕМ'Я</p>
                </div>
                <div className={`collection-photo__images ${isFullPage ? 'collection-photo__images--photo-page' : ''}`}>
                    <div className={imagesInnerClassName}>
                        {displayedPhotos.map((photo, index) => (
                            <img
                                key={photo.id}
                                src={photo.src}
                                alt={photo.alt}
                                className={`collection-photo__image ${index === 0 ? 'collection-photo__image--first' : ''}`}
                                loading={index < EAGER_LOAD_COUNT ? 'eager' : 'lazy'}
                            />
                        ))}
                    </div>
                </div>
                <div className="collection-photo__button">
                    {isFullPage && hasMorePhotos ? (
                        <button
                            className="collection-photo__button_text"
                            onClick={handleButtonClick}
                            aria-expanded={isExpanded}
                        >
                            {buttonText}
                        </button>
                    ) : (
                        <Link to="/collection-photo" className="collection-photo__button_text">
                            {buttonText}
                        </Link>
                    )}
                </div>
            </div>
        </section >
    );
}

export default CollectionPhoto;