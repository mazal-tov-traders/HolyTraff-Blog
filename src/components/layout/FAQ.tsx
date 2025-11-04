import { FAQDownArrowSVG, FAQRightArrowSVG } from '@/assets';
import { useTranslation } from '@/i18n';
import type { FAQItem } from '@/types/faq';
import React, { useCallback, useMemo, useState } from 'react';

/**
 * Компонент элемента FAQ (аккордеон)
 */
const FAQItemComponent: React.FC<{ item: FAQItem; isOpen: boolean; onToggle: () => void }> = ({
    item,
    isOpen,
    onToggle
}) => {
    const iconClassName = `faq-item__icon ${isOpen ? 'faq-item__icon--open' : ''}`;
    const IconComponent = isOpen ? FAQDownArrowSVG : FAQRightArrowSVG;
    const answerId = `faq-answer-${item.id}`;
    const questionId = `faq-question-${item.id}`;

    return (
        <div className="faq-item">
            <button
                className="faq-item__button"
                onClick={onToggle}
                aria-expanded={isOpen}
                aria-controls={answerId}
                id={questionId}
            >
                <span className="faq-item__question">{item.question}</span>
                <span className={iconClassName} aria-hidden="true">
                    <IconComponent />
                </span>
            </button>
            {isOpen && (
                <div
                    id={answerId}
                    className="faq-item__answer"
                    role="region"
                    aria-labelledby={questionId}
                >
                    {item.answer}
                </div>
            )}
        </div>
    );
};

/**
 * Секция FAQ (Часто задаваемые вопросы)
 */
const FAQ: React.FC = () => {
    const { t } = useTranslation();
    const [openItems, setOpenItems] = useState<Set<string>>(new Set()); // По умолчанию все вопросы закрыты

    // Данные FAQ
    const faqItems: FAQItem[] = useMemo(() => [
        {
            id: 'question-1',
            question: t('faq.question1'),
            answer: t('faq.answer1')
        },
        {
            id: 'question-2',
            question: t('faq.question2'),
            answer: t('faq.answer2')
        },
        {
            id: 'question-3',
            question: t('faq.question3'),
            answer: t('faq.answer3')
        },
        {
            id: 'question-4',
            question: t('faq.question4'),
            answer: t('faq.answer4')
        },
        {
            id: 'question-5',
            question: t('faq.question5'),
            answer: t('faq.answer5')
        },
        {
            id: 'question-6',
            question: t('faq.question6'),
            answer: t('faq.answer6')
        },
        {
            id: 'question-7',
            question: t('faq.question7'),
            answer: t('faq.answer7')
        }
    ], [t]);

    const toggleItem = useCallback((id: string) => {
        setOpenItems(prev => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
    }, []);

    return (
        <section className="faq" id="faq">
            <div className="faq__container">
                <h2 className="faq__title">
                    <span className="faq__title-white">{t('faq.titlePart1')}</span>
                    <span className="faq__title-green">{t('faq.titlePart2')}</span>
                </h2>
                <div className="faq__items">
                    {faqItems.map((item) => (
                        <FAQItemComponent
                            key={item.id}
                            item={item}
                            isOpen={openItems.has(item.id)}
                            onToggle={() => toggleItem(item.id)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
