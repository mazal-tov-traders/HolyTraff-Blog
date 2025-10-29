import classNames from 'classnames';
import type { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import React, { useCallback, useEffect, useState } from 'react';
import { LeftArrowSVG, RightArrowSVG } from '../../assets';

interface SliderModuleProps<T> {
    cards: T[];
    options?: EmblaOptionsType;
    renderCard: (card: T, index: number) => React.ReactNode;
}

const SliderModule = <T,>({ cards, options = { loop: true, align: 'start' }, renderCard }: SliderModuleProps<T>) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const [selectedIndex, setSelectedIndex] = useState(0);

    // Керування слайдером (стрілки)
    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    // Синхронізація індексу
    useEffect(() => {
        if (!emblaApi) return;
        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
        emblaApi.on('select', onSelect);
        onSelect();
        return () => {
            emblaApi.off('select', onSelect);
        };
    }, [emblaApi]);

    return (
        <div className="slider-container">
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    {cards.map((card, index) => (
                        <div key={index} className="embla__slide">
                            {renderCard(card, index)}
                        </div>
                    ))}
                </div>
            </div>
            {/* Стрілки */}
            <button className="slider__prev" onClick={scrollPrev}><LeftArrowSVG /></button>
            <button className="slider__next" onClick={scrollNext}><RightArrowSVG /></button>
            {/* Дотики/індикатори, якщо потрібно */}
            <div className="slider__dots">
                {cards.map((_, index) => (
                    <button
                        key={index}
                        className={classNames('slider__dot', { 'active': index === selectedIndex })}
                        onClick={() => emblaApi?.scrollTo(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default SliderModule;