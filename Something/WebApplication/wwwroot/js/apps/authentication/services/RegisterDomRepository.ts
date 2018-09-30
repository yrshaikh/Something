import { IAuthenticationDomRepository } from "./IAuthenticationDomRepository";

export const RegisterDomRepository: IAuthenticationDomRepository = {
    getHeaderText() { return "Create your account"; },

    getSubtitleText() { return "psst! ...it's free forever"; },

    getButtonText() { return "Create an account"; },

    getAlternateText() { return "Have a account? Login"; },

    getAlternateLink() { return "/account/login"; },

    getFormSubmitLink() { return "/account/register"; },
};
