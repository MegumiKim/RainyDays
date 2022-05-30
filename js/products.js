import { productArray } from "./productsList.js";
import { makeProductCatalogue } from "./utils/makeProductCatalogue.js";

productArray.forEach(makeProductCatalogue);
