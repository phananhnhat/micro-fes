import ReactDOM from 'react-dom/client';
import Counter from "./Counter";

export default (el: Element) => {
  const root = ReactDOM.createRoot(el);
  root.render(<Counter />);
};
