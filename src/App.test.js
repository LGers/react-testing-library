import axios from 'axios';
import { render, act, findAllByRole } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App, { URL } from './App';


//lesson_07 axios

jest.mock("axios");

const hits = [
  {
    objectID: "1", title: "Angular"
  },
  {
    objectID: "2", title: "React"
  },
];

describe("App", () => {
  it("fetch news from an API", async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: { hits } }));
    const { getByRole, findAllByRole } = render(<App />);
    userEvent.click(getByRole("button"));
    const items = await findAllByRole("listitem");
    expect(items).toHaveLength(2);
    // Additional
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith("hn.algolia.com/api/v1/search?query=React");
    expect(axios.get).toHaveBeenCalledWith(`${URL}?query=React`);
  });

  it("fetch news from an API and reject", async () => {
    axios.get.mockImplementationOnce(() => Promise.reject(new Error()));
    const { getByRole, findByText } = render(<App />);
    userEvent.click(getByRole("button"));
    const message = await findByText(/something/i);
    expect(message).toBeInTheDocument();
  });

  it("fetch news from an API", async () => {
    const promise = Promise.resolve({ data: { hits } });
    axios.get.mockImplementationOnce(() => promise);
    const { getByRole, getAllByRole } = render(<App />);
    userEvent.click(getByRole("button"));
    await act(() => promise);
    expect(getAllByRole("listitem")).toHaveLength(2);
  });
});
