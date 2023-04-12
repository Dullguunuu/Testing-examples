import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../src/pages/index";
import Counter from "@/components/Test";
import { fetchTodos } from "@/components/fetchTodos";
import Todos from "@/components/MockingData";
import axios from "axios";
import { BASE_URL } from "@/components/fetchTodos";

jest.mock("axios");

const dummyTodos = [
  { userId: 1, id: 1, title: "todo 1", completed: false },
  {
    userId: 1,
    id: 2,
    title: "todo 2",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "todo 3",
    completed: false,
  },
];

describe("Calculator", () => {
  it("renders a calculator", () => {
    render(<Home />);
    // check if all components are rendered
    expect(screen.getByTestId("result")).toBeInTheDocument();
    expect(screen.getByTestId("num1")).toBeInTheDocument();
    expect(screen.getByTestId("num2")).toBeInTheDocument();
    expect(screen.getByTestId("add")).toBeInTheDocument();
    expect(screen.getByTestId("subtract")).toBeInTheDocument();
    expect(screen.getByTestId("multiply")).toBeInTheDocument();
    expect(screen.getByTestId("divide")).toBeInTheDocument();
  });

  it("checking button", () => {
    render(<Home />);
    // check if adds properly
    screen.getAllByRole("button");
    // screen.getByRole("button");
  });

  it("checking counter", () => {
    //test block

    // render the component on virtual dom
    render(<Counter />);

    //select the elements you want to interact with
    const counter = screen.getByTestId("counter");
    const incrementBtn = screen.getByTestId("increment");

    //interact with those elements
    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);

    //assert the expected result
    expect(counter).toHaveTextContent("2");
  });
});

describe("fetchtodos", () => {
  describe("when API call is successful", () => {
    it("should return todos list", async () => {
      axios.get = jest.fn().mockResolvedValue({ data: dummyTodos });

      // when
      const result = await fetchTodos();

      // then
      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/todos`);
      expect(result).toEqual({ data: dummyTodos });
    });
  });
});

describe("check", () => {
  it("check multiply and divide", () => {
    render(<Home />)
    const num1 = screen.getByTestId("num1");
    const num2 = screen.getByTestId("num2");
    const mul = screen.getByTestId("multiply");
    const div = screen.getByTestId("divide");
    const result = screen.getByTestId("result");

    fireEvent.change(num1, { target: { value: "60" } });
    fireEvent.change(num2, { target: { value: "2" } });

    fireEvent.click(mul);
    expect(result).toHaveTextContent("120");

    fireEvent.click(div);
    expect(result).toHaveTextContent("30");
  })
})


