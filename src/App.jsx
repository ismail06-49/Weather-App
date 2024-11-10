import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import Header from './components/Header'
import ThemeProvider from './context/ThemeContetxt'
import Main from './components/Main'
import WeatherProvider from './context/WeatherContext'

function App() {

  return (
    <ThemeProvider>
      <WeatherProvider>
        <div className='app w-100'>
          <Header />
          <Main />
        </div>
      </WeatherProvider>
    </ThemeProvider>
  )
}

export default App
