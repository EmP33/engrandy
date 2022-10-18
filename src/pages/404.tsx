import { Link } from 'gatsby-plugin-react-i18next';

export default function NotFound() {
  return (
    <main>
      <p>Sorry, page not found!</p>
      <Link to="/">Go to Home Page</Link>
    </main>
  );
}
