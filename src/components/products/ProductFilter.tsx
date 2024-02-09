import { LIMIT, genders} from "../../helpers/consts";
import { useProducts } from "../../context/products/ProductsContextProvider";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";

const ProductFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [gender, setGender] = useState(
    searchParams.get("gender") || "all"
  );
  const { getProducts, setPage } = useProducts();

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    console.log(gender);

    if (gender === "all") {
      const { _page, q } = currentParams;

      searchParams.delete("gender");
      setSearchParams({
        _limit: LIMIT.toString(),
        _page: (_page || 1).toString(),
        q: q || "",
      });
    } else {
      setSearchParams({
        ...currentParams,
        gender,
      });
    }
    setPage(1);
    getProducts();
  }, [gender]);

  return (
    <Box sx={{ width: "fit-content", margin: "30px auto" }}>
      <ToggleButtonGroup
        onChange={(e, value) => value && setGender(value[0])}
        aria-label="text button group"
      >
        {genders.map((woman) => (
          <ToggleButton key={woman.id} value={woman.value}>
            {woman.title}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Box>
  );
};

export default ProductFilter;
