import "./App.css";
import Button from "./components/button";
import JokeComponent from "./components/joke";
import Loading from "./components/Loading";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [action, setAction] = useState(true);

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    setTimeout(() => {
      axios
        .get("https://icanhazdadjoke.com/", {
          headers: {
            Accept: "application/json",
          },
        })
        .then((res) => {
          if (isMounted) {
            setData(res.data);
            setIsLoading(false);
          }
        })
        .catch((err) => {
          console.error("Error fetching data", err);
          setIsLoading(false);
        });
    }, 1000);
    return () => {
      isMounted = false;
    };
  }, [action]);

  const handleButtonAction = () => {
    setAction(!action);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-96 h-auto p-8 bg-white rounded-md shadow-md">
        <h1 className="text-3xl font-medium mb-4">Joke 😂</h1>
        <div className="mb-4">
          {isLoading ? (
            <Loading />
          ) : (
            <JokeComponent jokeData={data?.joke} />
          )}
        </div>
        <Button handleAction={handleButtonAction} />
      </div>
    </div>
  );
}

export default App;
