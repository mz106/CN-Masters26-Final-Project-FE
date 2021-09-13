
const fetchProducts = async (limit, offset) => {
    
      console.log("fetchProducts reached")
      // console.log(key, page, limit)
    try {
      
      const res = await fetch(`http://localhost/admin?limit=${limit}&offset=${offset}`, {
        mode: "cors",
        method: "get",
        headers: { "Content-Type": "application/json" }
      });
      console.log("http hit", res)
      const data = await res.json();
      console.log(data)
      return data;
      
    } catch (error) {
      console.error(error);
    }
    console.log("fetchProducts end")
    
  };
  
  module.exports = {
      fetchProducts
  };