import Navbar from './Navbar';
import Hero from './Hero'
import Popular from './Popular'
import Release from './Release'
import Category from './Category'
import Watch from './Watch'
import News from './News'
import Footer from './Footer'

function Home() {
  return (
    <div className="App">
      <div className='Navbar'>
        <Navbar />
      </div>
      <div className="Hero">
        <Hero />
      </div>
      <div className="Popular">
        <Popular />
      </div>
      <div className="Release">
        <Release />
      </div>
      <div className="Category">
        <Category />
      </div>
      <div className="Watch">
        <Watch />
      </div>
      <div className="News">
        <News />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}
export default Home;