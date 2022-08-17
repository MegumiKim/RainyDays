export function createVariations(product) {
  const element = createElement("form", "size", undefined);

  const variations = product.variations;
  variations.forEach((variation) => {
    const id = variation.id;
    const size = variation.attributes[0].value;
    const radioButton = createElement("input", "size_p", undefined);
    radioButton.id = id;
    radioButton.name = "size";
    radioButton.type = "radio";
    console.log(radioButton.id);
    const label = createElement("label", "size_label", size);
    label.for = radioButton.id;
    element.append(radioButton, label);

    radioButton.addEventListener("change", function () {
      console.log(size);
    });
  });

  return element;
}
