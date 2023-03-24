import React, { useState } from "react";
import tinh_tp from "../data/tinh_tp.json";
import quanHuyen from "../data/quan_huyen.json";
import allData from "../data/data.json";
import { useFormik } from "formik";

export default function Home() {
  const dataArrayQuanHuyen = Object.values(quanHuyen);

  const dataArrayTinhThanh = Object.values(tinh_tp);

  const data1 = allData.map((item1) => {
    const item2 = dataArrayTinhThanh.find((item2) => item2.code === item1.city);
    return { ...item1, ...item2 };
  });
  const data2 = data1.map((item1) => {
    const item2 = dataArrayQuanHuyen.find(
      (item2) => item2.code === item1.district
    );
    return { ...item1, ...item2 };
  });
  const [dataTinhThanh, setDataTinhThanh] = useState(null);
  const dataSpace = [
    { key: "0- 20", value: "Dưới 20m2" },
    { key: "20-30", value: "20 - 30 m2" },
    { key: "30-40", value: "30 - 40 m2" },
    { key: "40-50", value: "40 - 50 m2" },
    { key: "50-60", value: "50 - 60 m2" },
    { key: "60-70", value: "60 - 70 m2" },
  ];

  let [dataFilter, setDataFilter] = useState(data2);

  const dataPrice = [
    { key: "0-1000000", value: "Dưới 1 triệu" },
    { key: "1000000-2000000", value: "1 triệu - 2 triệu" },
    { key: "2000000-3000000", value: "2 triệu - 3 triệu" },
    { key: "3000000-5000000", value: "3 triệu - 5 triệu" },
    { key: "5000000-7000000", value: "5 triệu - 7 triệu" },
    { key: "7000000-10000000", value: "7 triệu - 10 triệu" },
  ];

  const formik = useFormik({
    // Dùng để set dữ liệu mặc định từ 1 cái props của redux và sẽ ko render lại input
    enableReinitialize: true,
    initialValues: {
      tinhThanh: "",
      khoangGia: "",
      quanHuyen: "",
      dienTich: "",
    },
    onSubmit: (value) => {
      const databByDing = data2.filter(
        (item) =>
          item.city === value.tinhThanh &&
          item.district === value.quanHuyen &&
          item.price > +value.khoangGia.split("-")[0] &&
          item.price <= +value.khoangGia.split("-")[1] &&
          +item.area > +value.dienTich.split("-")[0] &&
          +item.area <= +value.dienTich.split("-")[1]
      );

      setDataFilter(databByDing);
    },
  });

  const handleChangeTinhThanh = (event) => {
    formik.setFieldValue("tinhThanh", event.target.value);

    const filteredDistricts = Object.keys(quanHuyen)
      .filter((key) => quanHuyen[key].parent_code === event.target.value)
      .map((key) => quanHuyen[key]);
    console.log(filteredDistricts);
    setDataTinhThanh(filteredDistricts);
  };

  const handleChangequanHuyen = (event) => {
    formik.setFieldValue("quanHuyen", event.target.value);
  };

  const handleChangeKhoangGia = (event) => {
    formik.setFieldValue("khoangGia", event.target.value);
  };

  const handleChangeDienTich = (event) => {
    formik.setFieldValue("dienTich", event.target.value);
  };
  console.log(dataFilter);
  return (
    <div className="home container w-11/12 mx-auto">
      <form
        className=" flex justify-start content-center bg-yellow-300  "
        style={{ padding: "20px" }}
        onSubmit={formik.handleSubmit}
      >
        <div className="mx-5">
          <h1>Tỉnh thành</h1>
          <select
            name="tinhThanh"
            onChange={handleChangeTinhThanh}
            id="tinhThanh"
          >
            <option value="">Chọn tỉnh thành</option>
            {Object.keys(tinh_tp).map((key, index) => {
              return (
                <option key={index} value={tinh_tp[key].code}>
                  {tinh_tp[key].name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="mx-5">
          <h1>Quận huyện</h1>
          <select
            onChange={handleChangequanHuyen}
            name="quanHuyen"
            id="quanHuyen"
          >
            <option value=" ">Chọn quận huyện</option>
            {dataTinhThanh &&
              dataTinhThanh?.map((key, index) => {
                return (
                  <option key={index} value={key.code}>
                    {key.name}
                  </option>
                );
              })}
          </select>
        </div>
        <div className="mx-5">
          <h1>Khoảng giá</h1>
          <select onChange={handleChangeKhoangGia} id="khoangGia">
            <option value="">Chọn khoảng giá</option>
            {dataPrice.map((price, index) => {
              return (
                <option key={index} value={price.key}>
                  {price.value}
                </option>
              );
            })}
          </select>
        </div>
        <div className="mx-5">
          <h1>Diện tích</h1>
          <select onChange={handleChangeDienTich} id="dienTich">
            <option value="">Chọn diện tích</option>
            {dataSpace.map((space, index) => {
              return (
                <option key={index} value={space.key}>
                  {space.value}
                </option>
              );
            })}
          </select>
        </div>
        <button
          className="bg-orange-500  px-4 mt-4   "
          style={{ borderRadius: "10px" }}
          type="submit"
        >
          Lọc tin
        </button>
      </form>
      <div className="w-2/5 mx-auto">
        {" "}
        {dataFilter?.map((item) => {
          return (
            <div
              className="card flex justify-between content-center"
              style={{ width: "50rem", padding: "20px" }}
            >
              <img
                src={item.thumbnail}
                className="card-img-top"
                alt="..."
                width={100}
              />
              <div className="card-body">
                <h5 className="card-title text-red-700 text-xl">
                  {item.title}
                </h5>
                <div className="">
                  {" "}
                  <p className="text-green-800">{item.price} triệu/tháng</p>
                </div>
                <div className="flex">
                  {" "}
                  <p className="mr-2">
                    {" "}
                    diện tích : <span className=" text-xl">{item.area}</span>
                  </p>
                  <p>
                    Địa chỉ :
                    <span className=" text-xl">{item.path_with_type}</span>
                  </p>
                </div>
                <p className="card-text">{item.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
