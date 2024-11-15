import Footer from './components/Footer';
import Header from './components/Header';
// import ErrorPage from './components/pages/ErrorPage';
import PlaceholderMain from './components/PlaceholderMain';

export default function App() {
  return (
    <div className="flex flex-col relative h-screen font-sans text-[#333333]">
      <Header />
      <div className="flex flex-grow h-full overflow-scroll">
        <PlaceholderMain />
        {/* <ErrorPage error="Loading content" /> */}
      </div>
      <Footer />
    </div>
  );
}
