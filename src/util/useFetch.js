import { useEffect, useState } from "react";
import queryString from "query-string";

const useFetch = (url, options) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const query = queryString.stringify(options);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await fetch(`${url}${query}`);
        const resp = await data.json();
        setData(resp);
        setLoading(false);
      } catch (e) {
        setError(e);
        setLoading(false);
      }
    })();
  }, [query, url]);

  return [data, loading, error];
};

export default useFetch;
