import { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";

export function useFilter() {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  function filter() {
    const path = location.pathname;
    const urlslice = path.slice(0,11)
    console.log(path[1])
  

    if (path === "/" || path.includes("home")) {
      if (min !== "" && max === "") navigate(`/home/${min}/${1000}`);
      else if (min === "" && max !== "") navigate(`/home/${0}/${max}`);
      else if (min !== "" && max !== "") navigate(`/home/${min}/${max}`);
  
    }
    else if (path.includes("electronic")) {
      if (min !== "" && max === "") navigate(`/category/electronics/${min}/${1000}`);
      else if (min === "" && max !== "") navigate(`/category/electronics/${0}/${max}`);
      else if (min !== "" && max !== "") navigate(`/category/electronics/${min}/${max}`);
    }
    else if (path.includes("jewelery")) {
      if (min !== "" && max === "") navigate(`/category/jewelery/${min}/${1000}`);
      else if (min === "" && max !== "") navigate(`/category/jewelery/${0}/${max}`);
      else if (min !== "" && max !== "") navigate(`/category/jewelery/${min}/${max}`);
    }
    else if (path[1] ==="m"|| path[1] ==="c"   ) {
      if (min !== "" && max === "") navigate(`/category/men/${min}/${1000}`);
      else if (min === "" && max !== "") navigate(`/category/men/${0}/${max}`);
      else if (min !== "" && max !== "") navigate(`/category/men/${min}/${max}`);
    }
    else if (path.includes("women")) {
      if (min !== "" && max === "") navigate(`/category/women/${min}/${1000}`);
      else if (min === "" && max !== "") navigate(`/category/women/${0}/${max}`);
      else if (min !== "" && max !== "") navigate(`/category/women/${min}/${max}`);
    }
    else if (path.includes(urlslice)) {
      if (min !== "" && max === "") navigate(`${urlslice}/${min}/${1000}`);
      else if (min === "" && max !== "") navigate(`${urlslice}/${0}/${max}`);
      else if (min !== "" && max !== "") navigate(`${urlslice}/${min}/${max}`);
    }
  }

  return {
   
    setMin,
    setMax,
    filter
  };
}

