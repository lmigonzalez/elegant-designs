import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Contact from '../components/Contact'

describe("Contact Component", () => {
  it("submit enable when input has the correspondent value", () => {
    render(<Contact/>);
   const nameInputField = screen.getByPlaceholderText("Enter full name")
   const emailInputField = screen.getByPlaceholderText("Enter email")
   const typeInputField = screen.getByTestId("select-option")
   const submitBtn = screen.getByText("Submit")

    expect(nameInputField).toBeInTheDocument();
    expect(emailInputField).toBeInTheDocument();
    expect(typeInputField).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
    expect(submitBtn).toBeDisabled();
 

	fireEvent.change(nameInputField, { 'target': { 'value': 'Luis Gonzalez' } })

	fireEvent.change(emailInputField, { 'target': { 'value': 'luisgonzalez@gmail.com' } })

	fireEvent.change(typeInputField, { 'target': { 'value': 'portfolio' } })

	
	expect(submitBtn).toBeEnabled()


  	});
	
	

});
