
const BASE_URL = process.env.REACT_APP_BASE_URL;

const fetchProducts = async (limit, offset) => {
  console.log("fetch hit")
  console.trace()
  try {
    const res = await fetch(

      `http://localhost/admin?limit=${limit}&offset=${offset}`,
      
      `${BASE_URL}/admin?limit=${limit}&offset=${offset}`,

      {
        mode: "cors",
        cache: "no-cache",
        method: "get",
        headers: { "Content-Type": "application/json" },
      }
    );
      console.log("fetch done")
    const data = await res.json();
    console.log(data, res);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchProducts;
