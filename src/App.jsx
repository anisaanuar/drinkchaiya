import './App.css'
import chaiyaDisplay from './assets/chaiya-spices.png'

function App() {
  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="nav-left">
          <a href="#home" className="nav-link">Home</a>
          <a href="#inspiration" className="nav-link">Our Inspiration</a>
          <a href="#products" className="nav-link">Products</a>
        </div>
        <div className="nav-right">
          <a href="#login" className="nav-link">Log in</a>
          <button className="search-btn" aria-label="Search">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </button>
        </div>
      </nav>
      
      <main className="main-content">
        <div className="hero-section">
          <h1 className="brand-title">Chai-ya</h1>
          <p className="brand-subtitle">The world's first luxury chai</p>
          <img src={chaiyaDisplay} alt="Chaiya Bottle" className="chaiya-display" />
          <button className="waitlist-btn">Sign up for the waitlist</button>
        </div>
      </main>
    </div>
  )
}

export default App
