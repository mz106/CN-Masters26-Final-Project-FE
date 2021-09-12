
const fetchProducts = async (event) => {
    
      
    try {
      
      const res = await fetch(`http://localhost/admin/`, {
        mode: "cors",
        method: "get",
        headers: { "Content-Type": "application/json" }
      });
      
      return res.json();
    //   setProducts(data);
      
      // for (let product of products) {
      //   console.log(product.name)
      // }
      
      
      
    } catch (error) {
      console.error(error);
    }
    console.log("fetchProducts end")
    
  };
  
  module.exports = {
      fetchProducts
  };