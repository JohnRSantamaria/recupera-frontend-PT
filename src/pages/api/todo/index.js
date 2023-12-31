import axios from "axios";
export default async function handler(req, res) {
  const { method, body } = req;
  const URL = "http://127.0.0.1:8000/tasks/api/v1/tasks/"

  if (method === "POST") {
    try {
      const data = body
      const response = await axios.post(URL, data)
      res.status(response.status).json(response.statusText)
    } catch (error) {
      res
        .status(error.reponse?.status || 500)
        .json(error.reponse?.data || {});
    }
  }
  if (method === "GET") {
    try {
      const { data } = await axios.get(URL)
      return res.status(200).json(data);
    } catch (error) {
      res
        .status(error.reponse?.status || 500)
        .json(error.reponse?.data || {});
    }
  }

}