import axios from "axios";
import { useEffect, useState } from "react";
export function useGetToDos() {
  const [data, setData] = useState([]);
  const [loading, setIsloading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    if (data.length === 0) {
      axios.get('/api/todo').then(({ data }) => {
        setIsloading(false)
        setData(data)
      }).catch(error =>
        setError(error.message))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])
  return { data, loading, error }

}