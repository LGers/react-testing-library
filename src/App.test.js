import { render, screen } from '@testing-library/react';
import App from './App';

//lesson-1
test('renders learn react link', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  screen.debug();
});

//lesson-2
//snapshot
test('renders learn react link2', () => {
  const { asFragment } = render(<App />);
  expect(asFragment(<App />)).toMatchSnapshot();
});

// test('renders Search', () => {
//   const { asFragment } = render(<Search />);
//   expect(asFragment(<Search />)).toMatchSnapshot();
// });

//lesson-3
describe("App", () => {
  it("render App component", () => {
    render(<App />);
    screen.debug();
    expect(screen.getByText(/Search:/i)).toBeInTheDocument();
  });
});

describe("App2", () => {
  it("render App component", () => {
    render(<App />);
    expect(screen.getByText(/Search:/i)).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText('search text...')).toBeInTheDocument();
    expect(screen.getByAltText('search image')).toBeInTheDocument();
    expect(screen.getByDisplayValue('')).toBeInTheDocument();
  });
});
