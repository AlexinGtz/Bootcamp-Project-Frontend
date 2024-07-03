import { AppBanner } from "../../components/BannerApp/AppBanner";
import { render, screen } from "@testing-library/react";

describe("<BannerApp />", () => {
    test("Render Succesfully", () => {
        render(<AppBanner />);

        const appTitle = screen.queryByText("BootCamp School");
        expect(appTitle).toBeTruthy();
    });
});
