import axios from "axios";
import { useState } from "react";
export function usePostToDo() {
  const [status, setStatus] = useState("");

  const sent = async (data) => {
    try {
      const response = await axios.post('/api/todo', data)
      setStatus(response.status)
    } catch (error) {
      setStatus("")
      console.log(error.message)
    }
  }

  return { sent, status }
}