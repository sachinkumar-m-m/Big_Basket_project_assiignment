import React, { useState, useEffect } from "react";
import axios from "axios";

function CategoryApi(token) {
  const [category, setCategory] = useState([]);
  const [callback,setCallback]=useState(false);

  useEffect(() => {
    
      // read products
      const getCategory = async () => {
        const res = await axios.get(`/api/v1/category/getAll`);
        setCategory(res.data.categories);
      };
      getCategory()
    
  }, [setCallback]);

  return {
    categories: [category, setCategory],
    callback:[callback,setCallback]
  };
}

export default CategoryApi;
