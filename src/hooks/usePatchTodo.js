import axios from "axios";
export function usePatchToDO() {

  const patch = async (id, data) => {
    try {
      await axios.patch(`/api/todo/${id}`, data)
    } catch (error) {
      console.log(error)
    }
  }

  return { patch }
}