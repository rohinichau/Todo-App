import { render, screen } from '@testing-library/react';
import Header from './Header';
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({

  //  Import non-mocked library and use other functionalities and hooks
  ...(jest.requireActual("react-router-dom") as any),

  // Mock the required hook
  useNavigate: () => mockedUsedNavigate
}));
describe("Header component testing", () => {
  it("has todo list text", async () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    // Testing to-do app text
    expect(
      screen.getByText("To-Do List App")
    ).toBeInTheDocument();


  });
  it("has a signout button and does navigate to signin page", async () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    await userEvent.click(screen.getByText("Signout"));
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/login');
  });
});



