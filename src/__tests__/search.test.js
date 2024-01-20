import { act } from "react-dom/test-utils";
import Body from "../components/Body";
import MOCK_DATA from "./mocks/resCardData.json";

global.fetch = jest.fn(() => {
  return new Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

"it should search with given input and filter the data",
  async () => {
    await act(async () => {
      render(<Body />);
    });
  };
