import React from "react"
import {screen, render} from "@testing-library/react"

import {Mylatestpayslip} from "./mylatestpayslip";

describe("Mylatestpayslip", () => {
    it("should render the component", () => {
        render(<Mylatestpayslip contentLanguage="en_US" message="World"/>);

        expect(screen.getByText(/Hello World/)).toBeInTheDocument();
    })
})
