import './assets/main.css';
import './App.css';
import Layout from './Layout';
import OptionCard from './components/OptionCard';

function App() {
  return (
    <div className="App">
        <div className="space-y-3 divide-y divide-red-700">
        <Layout>
            <div className="py-16 xl:py-12 flex flex-row justify-center flex-wrap">
                <OptionCard cardDetails="This is the book's card"/>
                <OptionCard cardDetails="This is the tv shows' card"/>
            </div>
        </Layout>
        <div>
            Footer
        </div>
      </div>
    </div>
  );
}

export default App;
