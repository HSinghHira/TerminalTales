import FeaturedArticles from "./Components/FeaturedArticles";
import Header from "./Components/Header";
import RoutesIndex from "./Utilities/Routes";

import { Adsense } from "@ctrl/react-adsense";

const App = () => {
  return (
    <div className="justify-center items-center w-full h-full min-h-screen">
      {/* Header */}
      <div className="flex justify-center items-center mx-6 my-6">
        <Header />
      </div>

      {/* Header Ad */}
      <div className="flex justify-center items-center">
        <Adsense client="ca-pub-2844523573538311" slot="5353085381" />
      </div>

      {/* Featured Articles */}
      <div className="hidden">
        <FeaturedArticles />
      </div>

      {/* Main */}
      <div className="flex justify-center items-center">
        <RoutesIndex />
      </div>

      {/* Footer */}
    </div>
  );
};

export default App;
