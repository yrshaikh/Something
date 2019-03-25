import * as React from "react";
import { ImageService } from './../common/ImageService';

import "./Home.scss";
import { IHomeProps } from "./types/IHomeProps";

export const Home : React.SFC<IHomeProps> = () => {
    const placeHolderImgUrl = ImageService.getPlaceholderImage(300, 500, 'WebApp');
    return <div className="Home">
        <p className="Home__title">Something.</p>
        <div className="Home__gallery">
            <img src={placeHolderImgUrl} />
        </div>
        <p className="Home__boast">An open source project and issue management app that doesn't suck!</p>
        <div className="Home__btns">
            <a
                className="promo-btn"
                href="/account/login">
                GET SOMETHING
            </a>
        </div>
    </div>;
}
