
const BASE_URL = process.env.REACT_APP_BASE_URL;

const fetchProducts = async (limit, offset, cat) => {
  
  try {
    const res = await fetch(

      `${BASE_URL}/admin?limit=${limit}&offset=${offset}&cat=${cat}`,

      {
        mode: "cors",
        cache: "no-cache",
        method: "get",
        headers: { "Content-Type": "application/json" },
      }
    );
      console.log("fetch done")
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchProducts;
