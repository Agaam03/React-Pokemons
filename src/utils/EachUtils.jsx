import { Children } from "react";
import "../components/PokemonList/PokemonList.css";

const EachUtils = ({ datalist, render }) => {
  if (datalist.length == 0) {
    return <div className="alert">Data Tidak Ditemukan</div>;
  }
  if (typeof render !== "function") {
    console.log("Render Harus Fuction");
    return null;
  }

  return Children.toArray(datalist.map((item, index) => render(item, index)));
};

export default EachUtils;
