import { useEffect, useState } from "react";

export default function Fruit() {
  const [product, setProduct] = useState({
    code: "",
    name: "",
    pdate: "",
    tdate: "",
    edate: "",
  });
  useEffect(() => {
    let data = window.location.search
      .slice(1)
      .split("&")
      .map((a) => a.split("="));

    data.map((a) => {
      if (a[0] == "code") {
        setProduct((e) => ({ ...e, code: a[1] }));
      } else if (a[0] == "name") {
        setProduct((e) => ({ ...e, name: a[1] }));
      } else if (a[0] == "pdate") {
        setProduct((e) => ({ ...e, pdate: a[1] }));
      } else if (a[0] == "tdate") {
        setProduct((e) => ({ ...e, tdate: a[1] }));
      } else if (a[0] == "edate") {
        setProduct((e) => ({ ...e, edate: a[1] }));
      }
    });
  }, []);
  return (
    <div className="cont">
      <div className="fruit-data">
        <div className="logo-img">
          <img src="Logo.png" />
        </div>
        <h2>Fruit Details</h2>
        <table>
          <tbody>
            <tr>
              <td>
                <i>code</i>
              </td>
              <td>
                <b>{product.code}</b>
              </td>
            </tr>
            <tr>
              <td>
                <i>name</i>
              </td>
              <td>
                <b>{product.name}</b>
              </td>
            </tr>
            <tr>
              <td>
                <i>packing Date</i>
              </td>
              <td>
                <b>{product.pdate}</b>
              </td>
            </tr>
            <tr>
              <td>
                <i>Trasport Date</i>
              </td>
              <td>
                <b>{product.tdate}</b>
              </td>
            </tr>
            <tr>
              <td>
                <i>Expery Date</i>
              </td>
              <td>
                <b>{product.edate}</b>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
