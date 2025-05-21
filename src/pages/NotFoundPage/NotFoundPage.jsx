import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <Link to="/">
      <h2>Ops... Page not found</h2>
    </Link>
  );
}
