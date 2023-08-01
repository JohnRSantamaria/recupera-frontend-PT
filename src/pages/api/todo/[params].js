import axios from "axios";
export default async function handler(req, res) {
  const { method, query, body } = req;
  const URL = "http://127.0.0.1:8000/tasks/api/v1/tasks/"

  if (method === "PATCH") {
    try {
      const { params } = query
      const data = body
      const response = await axios.patch(`${URL}${params}/`, data)
      res.status(response.status).json(response.statusText)
    } catch (error) {
      console.log(error)
      res
        .status(error.reponse?.status || 500)
        .json(error.reponse?.data || {});
    }
  }
  if (method === "DELETE") {
    try {
      const { params } = query
      const response = await axios.delete(`${URL}${params}`)

      console.log(response)
      res.status(response.status).json(response.statusText)
    } catch (error) {
      console.log(error)
      res
        .status(error.reponse?.status || 500)
        .json(error.reponse?.data || {});
    }
  }
}