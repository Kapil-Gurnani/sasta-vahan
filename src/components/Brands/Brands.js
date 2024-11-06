import { Image } from "@mui/icons-material";
import { Box } from "@mui/material";
import { brandsConfig } from "./brandsConfig";

const Brands = () => {
  return brandsConfig?.map((brands) => {
    return (
      <Box display={'flex'}>
        {brands.map((brand) => (
          <Box margin={1.5} width={100} height={74.5}>
            <img src={brand.image} height={'100%'} width={'100%'} />
          </Box>
        ))}
      </Box>
    );
  });
};

export default Brands;
