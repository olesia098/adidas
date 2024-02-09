import {
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useProducts } from "../../context/products/ProductsContextProvider";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditShopPage = () => {
  const { oneProduct, getOneProduct, editProduct } = useProducts();
  const [product, setProduct] = useState({
    title: "",
    price: 0,
    image: "",
    description: "",
    gender: "",
    bishkek: "",
    astana: "",
    almaty: "",
    moscow: "",
    sale: "",
  });

  const nav = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id!);
  }, []);

  useEffect(() => {
    if (oneProduct) {
      const {
        title,
        price,
        image,
        description,
        gender,
        bishkek,
        astana,
        almaty,
        moscow,
        sale,
      } = oneProduct;

      setProduct({
        title: title || "",
        price: price || 0,
        image: image || "",
        description: description || "",
        gender: gender || "",
        bishkek: bishkek || "",
        astana: astana || "",
        almaty: almaty || "",
        moscow: moscow || "",
        sale: sale || "",
      });
    }
  }, [oneProduct]);

  const handleChange = (e: any) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
    console.log(product);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editProduct(id!, product);
    nav("/shop");
  };

  const [gender, setGender] = React.useState("");

  const handleChangeGender = (event: SelectChangeEvent) => {
    setGender(event.target.value as string);
    setProduct({ ...product, gender: event.target.value as string });
  };

  const [isCheckedBishkek, setIsCheckedBishkek] = useState<boolean>(false);

  const handleCheckboxChangeBishkek = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const checked = event.target.checked;
    setIsCheckedBishkek(checked);
    setProduct({ ...product, bishkek: event.target.value as string });
  };

  const [isCheckedAstana, setIsCheckedAstana] = useState<boolean>(false);

  const handleCheckboxChangeAstana = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const checked = event.target.checked;
    setIsCheckedAstana(checked);
    setProduct({ ...product, astana: event.target.value as string });
  };

  const [isCheckedAlmaty, setIsCheckedAlmaty] = useState<boolean>(false);

  const handleCheckboxChangeAlmaty = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const checked = event.target.checked;
    setIsCheckedAlmaty(checked);
    setProduct({ ...product, almaty: event.target.value as string });
  };

  const [isCheckedMoscow, setIsCheckedMoscow] = useState<boolean>(false);

  const handleCheckboxChangeMoscow = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const checked = event.target.checked;
    setIsCheckedMoscow(checked);
    setProduct({ ...product, moscow: event.target.value as string });
  };

  const [isCheckedSale, setIsCheckedSale] = useState<boolean>(false);

  const handleCheckboxChangeSale = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const checked = event.target.checked;
    setIsCheckedSale(checked);
    setProduct({ ...product, sale: event.target.value as string });
  };

  return (
    <div className="bg-gray-200 w-full h-[70vh] flex items-center justify-center">
      <form
        className="bg-white w-2/5 h-4/5 flex flex-col items-center justify-center rounded-lg p-20"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl">Edit form</h2>
        <input
          type="text"
          name="title"
          value={product.title}
          placeholder="Title"
          onChange={handleChange}
        />
        <FormControl fullWidth style={{ width: "100px" }}>
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={gender}
            label="Gender"
            onChange={handleChangeGender}
          >
            <MenuItem value="women">Women</MenuItem>
            <MenuItem value="men">Men</MenuItem>
          </Select>
        </FormControl>

        <FormControlLabel
          control={
            <Checkbox
              // {...label}
              defaultChecked
              color="secondary"
              checked={isCheckedBishkek}
              onChange={handleCheckboxChangeBishkek}
            />
          }
          label="Bishkek"
        />
        <FormControlLabel
          control={
            <Checkbox
              // {...label}
              defaultChecked
              color="secondary"
              checked={isCheckedAstana}
              onChange={handleCheckboxChangeAstana}
            />
          }
          label="Astana"
        />
        <FormControlLabel
          control={
            <Checkbox
              // {...label}
              defaultChecked
              color="secondary"
              checked={isCheckedAlmaty}
              onChange={handleCheckboxChangeAlmaty}
            />
          }
          label="Almaty"
        />
        <FormControlLabel
          control={
            <Checkbox
              // {...label}
              defaultChecked
              color="secondary"
              checked={isCheckedMoscow}
              onChange={handleCheckboxChangeMoscow}
            />
          }
          label="Moscow"
        />

        <input
          type="text"
          name="description"
          value={product.description}
          placeholder="Description"
          onChange={handleChange}
        />
        <input
          type="url"
          name="image"
          value={product.image}
          placeholder="Image"
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          value={product.price}
          placeholder="Price"
          onChange={handleChange}
        />

        <FormControlLabel
          control={
            <Checkbox
              defaultChecked
              color="secondary"
              checked={isCheckedSale}
              onChange={handleCheckboxChangeSale}
            />
          }
          label="Add to sales"
        />

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditShopPage;
