import { TextField } from "@mui/material";
import { useProducts } from "../../context/products/ProductsContextProvider";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchParams } from "react-router-dom";

const SearchProduct = () => {
  const [searchParams, setsearchParams] = useSearchParams();
  const [searchVal, setSearchVal] = useState(searchParams.get("q") || "");
  const { getProducts, setPage } = useProducts();

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    setsearchParams({
      ...currentParams,
      q: searchVal,
    });
    getProducts();
    setPage(1);
  }, [searchVal]);

  return (
    <div >
      <TextField
        InputProps={{
          startAdornment: <SearchIcon sx={{ color: "white" }} />,
        }}
        onChange={(e) => setSearchVal(e.target.value)}
        placeholder="Search..."
        sx={{ color: "white", border: "3px solid",borderColor: "lime"  }}
        id="outlined-basic"
        variant="outlined"
      />
    </div>
  );
};

export default SearchProduct;
