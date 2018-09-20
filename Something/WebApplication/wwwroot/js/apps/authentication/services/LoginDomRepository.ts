import { IAuthenticationDomRepository } from "./IAuthenticationDomRepository";

export class LoginDomRepository implements IAuthenticationDomRepository {
    public getHeaderText = (): string => {
        return "Welcome Back :)";
    }

    public getSubtitleText = (): string => {
        return "sign in to your account";
    }

    public getButtonText = (): string => {
        return "Sign in and continue";
    }

    public getAlternateText = (): string => {
        return "Don't have an account? Register";
    }

    public getAlternateLink = (): string => {
        return "/account/register";
    }

    public getFormSubmitLink = (): string => {
        return "/account/login";
    }
}