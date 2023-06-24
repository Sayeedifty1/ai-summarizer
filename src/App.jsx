import './App.css';
import Hero from './Components/Hero';
import Demo from './components/Demo';
const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient"/>
        
        <div className="app">
          <Hero></Hero>
          <Demo></Demo>
        </div>
      </div>
    </main>
  )
}

export default App