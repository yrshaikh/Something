import { IAuthenticationDomRepository } from "./IAuthenticationDomRepository";

export const LoginDomRepository: IAuthenticationDomRepository = {
    getHeaderText() { return "Welcome Back :)"; },

    getSubtitleText() { return "sign in to your account"; },

    getButtonText() { return "Sign in and continue"; },

    getAlternateText() { return "Don't have an account? Register"; },

    getAlternateLink() { return "/account/register"; },

    getFormSubmitLink() { return "/account/login"; },
};
