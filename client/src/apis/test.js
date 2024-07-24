import axios from "axios";

export const getTest = async () => {
  try {
    const response = await axios.get('/test/list');
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'getTest 실패');
  }
}