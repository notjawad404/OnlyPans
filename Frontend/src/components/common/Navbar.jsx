import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 bg-transparent">
      <div className="flex items-center">
        <p className="text-2xl font-bold">Only Pans</p>
      </div>
      <div className="flex items-center space-x-4 font-medium">
        <Link to="/" className="text-lg">Home</Link>
        <Link to="/add" className="text-lg">My Recipes</Link>
        <Link to="/add" className="text-lg">Favorites</Link>
        <Link to="/add" className="text-lg">Login</Link>
      </div>
    </nav>
  );
}
