// Типы для сервисов

export interface BaseService {
    id: string;
    title: string;
    titlePart1?: string;
    titlePart2?: string;
}

export interface YouTubeServiceCard extends BaseService {
    image: string;
    hasLogo?: boolean;
}

export interface MarketService extends BaseService {
    titlePart1: string; // Обязательное для Market
    titlePart2: string; // Обязательное для Market
}

