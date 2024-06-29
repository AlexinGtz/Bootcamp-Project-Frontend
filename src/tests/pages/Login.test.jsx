import { useNavigate } from "react-router-dom";
import Login from "../../pages/Login/Login";
import { fireEvent, render, screen } from '@testing-library/react';
import { useDispatch } from "react-redux";
import { BannerApp } from "../../components/BannerApp/BannerApp";
import axios from "axios";
import { API,  }  from "../../api"

jest.mock('axios')

//console.log("Axios", axios)

const mockedAxios = axios //jest.mock('axios')

// jest.mock('../../api', () => ({
//     API: jest.fn((userEmail, userPassword) => {
//         return ({
//             data: {
//                 data: {
//                     accesToken: "someToken",
//                     userType: "STUDENT",
//                     email: "luiginini@gmail.com",
//                     firstName: "Luis",
//                     lastName: "Urias"
//                 }
//             }
//         })
//     })
// }))

jest.mock('../../pages/Login/Login', () => ({
    APIConnection: jest.fn((userEmail, userPassword) => {
        return ({
            data: {
                data: {
                    accesToken: "someToken",
                    userType: "STUDENT",
                    email: "luiginini@gmail.com",
                    firstName: "Luis",
                    lastName: "Urias"
                }
            }
        })
    })
}))

jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn()
}))

jest.mock('react-redux', () => ({
    useDispatch: jest.fn()
}))

describe("Login Page", () => {

    //  beforeEach(() => {
       
    // })

    test("Render Succesfully", async() => {
        render(<Login />)
        mockedAxios.get.mockResolvedValue({
            data:{
                data: {
                    accesToken: "someToken",
                    userType: "STUDENT",
                    email: "luiginini@gmail.com",
                    firstName: "Luis",
                    lastName: "Urias"
                }
            }
        })
    const emailInput = screen.getByPlaceholderText('email')
    expect(emailInput).toBeTruthy()

    const passwordInput = screen.getByPlaceholderText('password')
    expect(passwordInput).toBeTruthy()

    const button = screen.queryByRole('button')
    expect(button).toBeTruthy()

    fireEvent.change(emailInput, {target: {value: 'luiginini@gmail.com'}})
    fireEvent.change(passwordInput, {target: {value: 'Luigi'}})
    fireEvent.click(button)

    })
})