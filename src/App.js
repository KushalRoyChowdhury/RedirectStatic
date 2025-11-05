import { useEffect, useState } from "react";

const App = () => {

  const appName = process.env.REACT_APP_NAME.trim() || "This service";
  const appUrl = process.env.REACT_APP_URL.trim() || '/';
  const redirectTimer = parseInt(process.env.REACT_APP_TIME.trim() || 5);


  const [counter, setCounter] = useState(redirectTimer);

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = appUrl;
    }, redirectTimer * 1000);

    const interval = setInterval(() => {
      setCounter(counter => counter - 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-md w-full">
        <div className="text-6xl font-bold text-gray-700 dark:text-gray-400 mb-2">301</div>

        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
          {appName} has permanently moved
        </h1>

        {counter === 0 ? (<p>Redirecting...</p>) : (<p>Redirecting in {counter} seconds...</p>)}

        <a href={appUrl} className="inline-block mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white dark:text-gray-100 font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Go to new {appName}
        </a>

        <p className="mt-4 text-sm text-gray-500 dark:text-gray-600">
          If you're not redirected automatically, click the button above.
        </p>
      </div>
    </div>
  );
};

export default App;
