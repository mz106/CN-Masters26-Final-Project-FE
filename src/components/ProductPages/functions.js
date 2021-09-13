
const fetchProducts = async (page, limit, offset) => {
    
      console.log("fetchProducts reached")
      // console.log(key, page, limit)
    try {
      
      const res = await fetch(`http://localhost/admin?page=${page}&limit=${limit}&offset=${offset}`, {
        mode: "cors",
        method: "get",
        headers: { "Content-Type": "application/json" }
      });
      console.log("http hit", res)
      return res.json();
      
    } catch (error) {
      console.error(error);
    }
    console.log("fetchProducts end")
    
  };
  
  module.exports = {
      fetchProducts
  };