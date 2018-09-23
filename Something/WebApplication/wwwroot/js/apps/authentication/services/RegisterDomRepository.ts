import { IAuthenticationDomRepository } from "./IAuthenticationDomRepository";

export class RegisterDomRepository implements IAuthenticationDomRepository {
    public getHeaderText = (): string => {
        return "Create your account";
    }

    public getSubtitleText = (): string => {
        return "psst! ...it's free forever";
    }

    public getButtonText = (): string => {
        return "Create an account";
    }

    public getAlternateText = (): string => {
        return "Have a account? Login";
    }

    public getAlternateLink = (): string => {
        return "/account/login";
    }

    public getFormSubmitLink = (): string => {
        return "/account/register";
    }
}
