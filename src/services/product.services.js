export const getProducts = async () => {
  const res = await fetch("http://localhost:3000/products", {
    method: "GET",
  });

  const data = res.json();
  return data;
};

// export const deleteProduct = async (id) => {
//   const res = await fetch(`http://localhost:3000/products/${id}`, {
//     method: "DELETE",
//   });

//   const data = res.json();
//   return data;
// };
