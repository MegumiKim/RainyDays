import { productArray } from "../../constants/productsList.js";
import { makeProductCatalogue } from "../../components/makeProductCatalogue.js";

productArray.forEach(makeProductCatalogue);
