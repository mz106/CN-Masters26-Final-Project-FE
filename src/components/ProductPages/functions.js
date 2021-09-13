
const fetchProducts = async (limit, offset) => {
      
    try {
      
      const res = await fetch(`http://localhost/admin?limit=${limit}&offset=${offset}`, {
        mode: "cors",
        cache: 'no-cache',
        method: "get",
        headers: { "Content-Type": "application/json" }
      });
      
      const data = await res.json();
      console.log(data, res)
      return data;
      
    } catch (error) {
      console.error(error);
    }

  };
  
  module.exports = {
      fetchProducts
  };