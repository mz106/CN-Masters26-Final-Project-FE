
const BASE_URL = process.env.REACT_APP_BASE_URL;

const fetchProducts = async (limit, offset) => {
  try {
    const res = await fetch(
      `${BASE_URL}/admin?limit=${limit}&offset=${offset}`,
      {
        mode: "cors",
        cache: "no-cache",
        method: "get",
        headers: { "Content-Type": "application/json" },
      }
    );

    const data = await res.json();
    console.log(data, res);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchProducts;
