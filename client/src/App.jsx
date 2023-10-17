import "./App.css";

function App() {
  return (
    <main className="p-3 max-w-2xl m-auto">
      <header className="flex items-center justify-between my-4">
        <a href="" className="text-bold text-3xl text-gray-600">
          Blog
        </a>
        <nav className="flex gap-3 text-gray-600">
          <a href="">Login</a>
          <a href="">Register</a>
        </nav>
      </header>
      <div className="grid grid-cols-test gap-4 mb-4">
        <div>
          <img
            src="https://bazis.ca/wp-content/uploads/2020/06/skyline-sailing-summer-city-life-downtown-lifestyle-city-view-toronto-harbourfront-lake-ontario_t20_NGbYwp-scaled.jpg"
            alt=""
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </h2>
          <p className="text-gray-400 text-sm font-semibold mt-1">
            <a href="" className="text-gray-700 pr-3">
              Name
            </a>
            <time>31/10/2023 03:00</time>
          </p>
          <p className="leading-7 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing. Hic, eum!
            Debitis quis facere officiis omnis. Ex corporis dolores libero quasi
            eius nemo aliquid autem, velit dolore, repudiandae quam, veniam
            voluptatem?
          </p>
        </div>
      </div>

      <div className="grid grid-cols-test gap-4 mb-4">
        <div>
          <img
            src="https://bazis.ca/wp-content/uploads/2020/06/skyline-sailing-summer-city-life-downtown-lifestyle-city-view-toronto-harbourfront-lake-ontario_t20_NGbYwp-scaled.jpg"
            alt=""
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </h2>
          <p className="text-gray-400 text-sm font-semibold mt-1">
            <a href="" className="text-gray-700 pr-3">
              Name
            </a>
            <time>31/10/2023 03:00</time>
          </p>
          <p className="leading-7 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing. Hic, eum!
            Debitis quis facere officiis omnis. Ex corporis dolores libero quasi
            eius nemo aliquid autem, velit dolore, repudiandae quam, veniam
            voluptatem?
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
