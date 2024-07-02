import { useNavigate } from "react-router-dom";
import { Login } from "../../pages/Login/Login";
import { fireEvent, render, screen } from "@testing-library/react";
import { useDispatch } from "react-redux";
import { BannerApp } from "../../components/BannerApp/BannerApp";
import { API } from "../../api";
import { setUserData } from "../../redux/reducers/userReducer";
import { enqueueSnackbar } from "notistack";
import { userEvent } from "@testing-library/user-event";
import * as userMock from "../mocks/user.json";

jest.mock("../../api", () => ({
    API: jest.fn(() => {
        return {
            login: jest.fn((userEmail, userPassword) => {
                return {
                    data: {
                        data: {
                            accesToken: "someToken",
                            userType: "STUDENT",
                            email: "luiginini@gmail.com",
                            firstName: "Luis",
                            lastName: "Urias"
                        }
                    }
                };
            })
        };
    })
}));

jest.mock("react-redux", () => ({
    useDispatch: jest.fn(() => jest.fn())
}));

jest.mock("react-router-dom", () => ({
    useNavigate: jest.fn(() => jest.fn())
}));

jest.mock("notistack", () => ({
    enqueueSnackbar: jest.fn()
}));

describe("Login Page", () => {
    describe("Success test", () => {
        it("Should succeed when the components render", async () => {
            render(<Login />);

            const emailInput = screen.getByPlaceholderText("email");
            expect(emailInput).toBeTruthy();

            const passwordInput = screen.getByPlaceholderText("password");
            expect(passwordInput).toBeTruthy();

            const button = screen.queryByRole("button");
            expect(button).toBeTruthy();
        });

        it("Should succeed when login function can be call", async () => {
            render(<Login />);

            const emailInput = screen.getByPlaceholderText("email");
            expect(emailInput).toBeTruthy();

            const passwordInput = screen.getByPlaceholderText("password");
            expect(passwordInput).toBeTruthy();

            const button = screen.queryByRole("button");
            expect(button).toBeTruthy();

            fireEvent.change(emailInput, {
                target: { value: userMock[0].email }
            });
            fireEvent.change(passwordInput, {
                target: { value: userMock[0].password }
            });
            fireEvent.click(button);
        });

        it("Should succeed when login function can be call on keydown email input", async () => {
            render(<Login />);

            const emailInput = screen.getByPlaceholderText("email");
            expect(emailInput).toBeTruthy();

            const passwordInput = screen.getByPlaceholderText("password");
            expect(passwordInput).toBeTruthy();

            const button = screen.queryByRole("button");
            expect(button).toBeTruthy();

            fireEvent.change(emailInput, {
                target: { value: userMock[0].email }
            });
            fireEvent.change(passwordInput, {
                target: { value: userMock[0].password }
            });
            await userEvent.type(emailInput, "{enter}");
        });

        it("Should succeed when login function can be call on keydown password input", async () => {
            render(<Login />);

            const emailInput = screen.getByPlaceholderText("email");
            expect(emailInput).toBeTruthy();

            const passwordInput = screen.getByPlaceholderText("password");
            expect(passwordInput).toBeTruthy();

            const button = screen.queryByRole("button");
            expect(button).toBeTruthy();

            fireEvent.change(emailInput, {
                target: { value: userMock[0].email }
            });
            fireEvent.change(passwordInput, {
                target: { value: userMock[0].password }
            });
            await userEvent.type(passwordInput, "{enter}");
        });
    });

    describe("Fail test", () => {
        it("Should fail when email is not given", async () => {
            render(<Login />);

            const emailInput = screen.getByPlaceholderText("email");
            expect(emailInput).toBeTruthy();

            const passwordInput = screen.getByPlaceholderText("password");
            expect(passwordInput).toBeTruthy();

            const button = screen.queryByRole("button");
            expect(button).toBeTruthy();

            fireEvent.change(emailInput, { target: { value: "" } });
            fireEvent.change(passwordInput, {
                target: { value: userMock[0].password }
            });
            fireEvent.click(button);
        });

        it("Should fail when password is not given", async () => {
            render(<Login />);

            const emailInput = screen.getByPlaceholderText("email");
            expect(emailInput).toBeTruthy();

            const passwordInput = screen.getByPlaceholderText("password");
            expect(passwordInput).toBeTruthy();

            const button = screen.queryByRole("button");
            expect(button).toBeTruthy();

            fireEvent.change(emailInput, {
                target: { value: userMock[0].email }
            });
            fireEvent.change(passwordInput, { target: { value: "" } });
            fireEvent.click(button);
        });

        it("Should fail when email is not a valid format", async () => {
            render(<Login />);

            const emailInput = screen.getByPlaceholderText("email");
            expect(emailInput).toBeTruthy();

            const passwordInput = screen.getByPlaceholderText("password");
            expect(passwordInput).toBeTruthy();

            const button = screen.queryByRole("button");
            expect(button).toBeTruthy();

            fireEvent.change(emailInput, { target: { value: "@gmail.com" } });
            fireEvent.change(passwordInput, {
                target: { value: userMock[0].password }
            });
            fireEvent.click(button);
        });
    });
});
