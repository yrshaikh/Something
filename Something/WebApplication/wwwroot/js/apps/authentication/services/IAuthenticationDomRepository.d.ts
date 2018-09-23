export interface IAuthenticationDomRepository {
    getHeaderText: () => string;
    getSubtitleText: () => string;
    getButtonText: () => string;
    getAlternateText: () => string;
    getAlternateLink: () => string;
    getFormSubmitLink: () => string;
}