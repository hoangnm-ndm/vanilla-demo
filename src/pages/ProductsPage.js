import { getProducts } from "../services/product.services";

export default async function ProductsPage() {
  const data = await getProducts();
  console.log(data);
  return `
  <div>
    ${data
      .map(
        (item) => `
      <div class="product-card>
      <h2>${item.name || "Đang cập nhật!"}</h2>
      <div>Mô tả: ${item.desc || "Đang cập nhật"}</div>
      <div>Giá: ${item.price || "Đang cập nhật"}</div>
      <button class="btn-act" onclick="addToCart(${
        item.id
      })">Thêm vào giỏ hàng</button>
      </div>
    `
      )
      .join("")}
  </div>
  `;
}
