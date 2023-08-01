import axios from "axios";

export function useDeleteToDo() {

  const Delete = async (id) => {
    try {
      const response = await axios.delete(`/api/todo/${id}`)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  return { Delete }
}

