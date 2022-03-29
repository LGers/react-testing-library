import { render, screen } from '@testing-library/react';
import App from './App';

/*
Search variants:
  getBy:                    queryby:                    findBy:
- getByText               - queryByText               - findByText
- getByRole               - queryByRole               - findByRole
- getByLabelText          - queryByLabelText          - findByLabelText
- getByPlaceholderText    - queryByPlaceholderText    - findByPlaceholderText
- getByAltText            - queryByAltText            - findByAltText
- getByDisplayValue       - queryByDisplayValue       - findByDisplayValue
- getAllBy                - queryAllBy                - findAllBy
*/

/*
Assertive Functions:
- toBeDisabled            - toBeEnabled               - toBeEmpty
- toBeEmptyDOMElement     - toBeInTheDocument         - toBeInvalid
- toBeRequired            - toBeValid                 - toBeVisible
- toContainElement        - toContainHTML             - toHaveAttribute
- toHaveClass             - toHaveFocus               - toHaveFormValues
- toHaveStyle             - toHaveTextContent         - toHaveValue
- toHaveDisplayValue      - toBeChecked               - toBePartiallyChecked
- toHaveDescription
*/

//lesson-4

describe("App", () => {
  it("renders App component", async () => {
    render(<App />);
    // expect(screen.queryByText(/Searches for React/i)).toBeNull();
    expect(screen.queryByText(/Logged in as/i)).toBeNull();
    screen.debug();
    expect(await screen.findByText(/Logged in as/i)).toBeInTheDocument();
    screen.debug();
    expect(screen.getByAltText(/image/i)).toHaveClass('image');
    expect(screen.getByLabelText(/search/i)).not.toBeRequired();
    expect(screen.getByLabelText(/search/i)).toBeEmpty();
    expect(screen.getByLabelText(/search/i)).toHaveAttribute("id");
  });
});
