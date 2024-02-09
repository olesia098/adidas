import { Box, Pagination, Stack } from "@mui/material";
import { useProducts } from "../../context/products/ProductsContextProvider";
import { LIMIT } from "../../helpers/consts";
import React from "react";
import { useSearchParams } from "react-router-dom";

export default function ProductPagination() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { page, setPage, pageTotalCount, getProducts } = useProducts();
  React.useEffect(() => {
    getProducts();
  }, [searchParams]);

  React.useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    setSearchParams({
      ...currentParams,
      _page: page.toString(),
      _limit: LIMIT.toString(),
    });
  }, [page]);

  return (
    <div >
         <Box
      sx={{ width: "fit-content", margin: "30px auto", marginBottom: "200px" }}
      display="flex"
      flexDirection="column"
      alignItems="center"
      mt={2}
    >
      <Pagination
      color="secondary"
        page={+page}
        onChange={(e, val) => setPage(val)}
        count={pageTotalCount}
        variant="outlined"
      />
    </Box>
    </div>
  );
}
