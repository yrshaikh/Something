import 'jest';
import { LoginDomRepository } from './LoginDomRepository';

describe('LoginDomRepository', () => {
    describe('getHeaderText', () => {
        it('returns correctly', () => {
            const result = LoginDomRepository.getHeaderText();
            expect(result).toBe("Welcome Back :)");
        });
    });

    describe('getSubtitleText', () => {
        it('returns correctly', () => {
            const result = LoginDomRepository.getSubtitleText();
            expect(result).toBe("sign in to your account");
        });
    });

    describe('getButtonText', () => {
        it('returns correctly', () => {
            const result = LoginDomRepository.getButtonText();
            expect(result).toBe("Sign in and continue");
        });
    });

    describe('getAlternateText', () => {
        it('returns correctly', () => {
            const result = LoginDomRepository.getAlternateText();
            expect(result).toBe("Don't have an account? Register");
        });
    });

    describe('getAlternateLink', () => {
        it('returns correctly', () => {
            const result = LoginDomRepository.getAlternateLink();
            expect(result).toBe("/account/register");
        });
    });

    describe('getFormSubmitLink', () => {
        it('returns correctly', () => {
            const result = LoginDomRepository.getFormSubmitLink();
            expect(result).toBe("/account/login");
        });
    });
});
