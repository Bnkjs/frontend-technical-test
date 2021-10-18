import axios from 'axios'

export const fetchAllMessages = async (hook,id) => {
  
  const getData = async () => {
    const data = await axios.get(
      `http://localhost:3005/messages/${id}`
    );
     return hook(data.data)
  };
  getData();
}


