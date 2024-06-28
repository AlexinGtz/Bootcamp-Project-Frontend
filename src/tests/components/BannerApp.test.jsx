import { BannerApp } from "../../components/BannerApp/BannerApp";
import { render, screen } from '@testing-library/react';

describe("<BannerApp />", () => {
    test("Render Succesfully", () => {
        render(<BannerApp />)
    
    const appTitle = screen.queryByText("BootCamp School")

    expect(appTitle).toBeTruthy();
    
    })

})