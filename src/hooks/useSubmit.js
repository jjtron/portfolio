import {useState} from "react";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (url, data) => {
    setLoading(true);
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
           'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const result = await response.json();
      if (result.success) {
        setResponse({
          type: 'success',
          message: `Thanks for your submission ${data.firstName}, we will get back to you shortly!`,
        })
      } else {
        setResponse({
          type: 'error',
          message: 'Something went wrong. Please try again later.',
        })
      }
    } catch (error) {
      setResponse({
        type: 'error',
        message: 'Something went wrong, please try again later.',
      })
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
}

export default useSubmit;
