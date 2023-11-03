import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function navigateTo(path: string) {
  history.push(path);
}

export { navigateTo };
