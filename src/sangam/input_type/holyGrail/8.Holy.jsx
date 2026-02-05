//  how to import css file
import './Holy.css';

function HolyGrail() {
  return (
    <div className="container">
      <header className="header">Header</header>

      <div className="middle">
        <nav className="sidebar left">Left Sidebar</nav>
        <main className="content">Main Content</main>
        <aside className="sidebar right">Right Sidebar</aside>
      </div>

      <footer className="footer">Footer</footer>
    </div>
  );
}

export default HolyGrail;
