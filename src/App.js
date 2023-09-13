import './App.css';
import ImageGallery from './Components/Slider/ImageGallery/ImageGallery';
import Navbar from './Components/Navbar/Navbar';
import Content from './Components/Content/Content';
import TitleCom from './Components/Slider/TitleCom/TitleCom';
import Statistics from './Components/Statistics/Statistics';
import Footer from './Components/Footer/Footer';
import Areas from './Components/Areas/Areas';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Content />
        <Statistics />
        <TitleCom />
        <ImageGallery />
        <Footer />
      </header>
    </div>
  );
}

export default App;
