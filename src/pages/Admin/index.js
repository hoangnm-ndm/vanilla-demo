import { getProducts } from "../../services/product.services";

export default async function AdminPage() {
  const data = await getProducts();

  const deleteProduct = async (id) => {
    const res = await fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    });
    const deletedData = await res.json();
    console.log("Deleted product:", deletedData);
  };

  const productTableHTML = `
  <table>
    <thead>
      <tr>
        <th>Tên sản phẩm</th>
        <th>Mô tả</th>
        <th>Giá</th>
        <th>Thao tác</th>
      </tr>
    </thead>
    <tbody>
      ${data
        .map(
          (item) => `
          <tr>
            <td>${item.name || "Đang cập nhật!"}</td>
            <td>${item.desc || "Đang cập nhật"}</td>
            <td>${item.price || "Đang cập nhật"}</td>
            <td>
              <button class="btn-act" onclick="editHandle(${
                item.id
              })">Cập nhật</button>
              <button class="btn-act" onclick="deleteProduct(${
                item.id
              })">Xoá</button>
            </td>
          </tr>
        `
        )
        .join("")}
    </tbody>
  </table>
`;

  return `
  <div>
    ${productTableHTML}
  </div>
  `;
}
