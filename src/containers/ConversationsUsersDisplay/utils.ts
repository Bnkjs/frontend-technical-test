import axios from 'axios'

export const fetchAllUsers = async (hook) => {
  
  const getData = async () => {
    const data = await axios.get(
      "http://localhost:3005/users"
    );
     return hook(data.data)
  };
  getData();
}


