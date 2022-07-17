import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useDropzone } from "react-dropzone";
import Select from "react-select";
import tw from "tailwind-styled-components";
import { BsPlusLg } from "react-icons/bs";
import productSlice from "././../../store/product";
import axios from "axios";
// import requestAPI from "../../Request";

const Form = () => {
  const categoryOptions = [
    { value: "Hobi", label: "Hobi", color: "#D0D0D0" },
    { value: "Kendaraan", label: "Kendaraan" },
    { value: "Baju", label: "Baju" },
    { value: "Elektronik", label: "Elektronik" },
    { value: "Kesehatan", label: "Kesehatan" },
  ];

  const customStyles = {
    control: (styles) => ({
      ...styles,
      borderRadius: "16px",
      padding: "6px 8px",
      border: "1px solid #D0D0D0",
      boxShadow: "none",
      "&:hover": { border: "1px solid #D0D0D0" },
    }),
    option: (styles, state) => ({
      ...styles,
      backgroundColor: state.isSelected ? "#E2D4F0" : "none",
      "&:hover": { backgroundColor: "#E2D4F0" },
      "&:focus": { backgroundColor: "#E2D4F0" },
    }),
    multiValue: (styles) => ({
      ...styles,
      backgroundColor: "#E2D4F0",
    }),
    multiValueLabel: (styles) => ({
      ...styles,
      color: "#4B1979",
    }),
    multiValueRemove: (styles) => ({
      ...styles,
      color: "#4B1979",
      "&:hover": {
        color: "#4B1979",
        backgroundColor: "#E2D4F0",
      },
    }),
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      setPhotos([
        ...photos,
        {
          photo: acceptedFiles[0],
          url: window.URL.createObjectURL(acceptedFiles[0]),
        },
      ]);
    },
  });

  const [category, setCategory] = useState([]);
  const [photos, setPhotos] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const product = useSelector((state) => state.product.data);
  console.log(product);

  useEffect(() => {
    if (product) {
      setCategory(product.categories);
      setPhotos(() => {
        product.product_images.map((img) => {
          return {
            photo: img,
            url: window.URL.createObjectURL(img),
          };
        });
      });
    }
  }, []);

  console.log(category);

  const inputName = useRef();
  const inputPrice = useRef();
  const inputCategory = useRef();
  const inputDescription = useRef();

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    const action = event.nativeEvent.submitter.name;
    const formData = new FormData();

    const submittedProduct = {
      nama: inputName.current.value,
      harga: inputPrice.current.value,
      deskripsi: inputDescription.current.value,
    };
    console.log(submittedProduct);

    for (let key in submittedProduct) {
      formData.append(key, submittedProduct[key]);
    }

    photos.forEach((photo) => {
      formData.append("product_images", photo.photo, photo.photo.name);
    });

    category.forEach((cat) => {
      formData.append("categories[]", cat.value);
    });

    if (action === "add") {
      try {
        await axios.post("https://binar-second-hand.herokuapp.com/api/v1/product", formData, {
          headers: { 
            Authorization: localStorage.getItem("accessToken") 
          },
        });
        navigate("/product/productlist");
      } catch (error) {
        console.log(error);
      }
    } else {
      var data = {
        nama: formData.get("nama"),
        harga: formData.get("harga"),
        deskripsi: formData.get("deskripsi"),
        category: category,
        product_images: formData.get("product_images"),
      };

      dispatch(productSlice.actions.addProduct(data));
      navigate("/product/productpreview");
    }
  };

  return (
    <div className="flex w-full lg:w-1/2">
      <form
        onSubmit={formSubmitHandler}
        className="w-full flex flex-col gap-4 text-sm lg:text-base"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Nama Produk</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={inputName}
            placeholder="Nama Produk"
            className="px-4 py-3 border border-solid border-gray-300 rounded-2xl focus:outline-purple4"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="price">Harga Produk</label>
          <input
            type="text"
            name="price"
            id="price"
            ref={inputPrice}
            placeholder="Rp 0,00"
            className="px-4 py-3 border border-solid border-gray-300 rounded-2xl focus:outline-purple4"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="nama">Kategori</label>
          <div className="relative w-full">
            <Select
              name="kategori"
              id="kategori"
              options={categoryOptions}
              styles={customStyles}
              ref={inputCategory}
              placeholder="Pilih Kategori"
              isMulti
              required
            ></Select>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="description">Deskripsi</label>
          <textarea
            name="description"
            id="description"
            ref={inputDescription}
            placeholder="Contoh: Jalan Ikan Hiu 33"
            className="px-4 py-3 border border-solid border-gray-300 rounded-2xl focus:outline-purple4"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="fotoProduk">Foto Produk</label>
          <StyledDiv {...getRootProps()}>
            <input {...getInputProps()} />
            {photos.length < 4 && (
              <p className="font-medium font-main">
                {photos.length > 0 &&
                  photos.map((x, index) => (
                    <div key={index}>
                      <BsPlusLg
                        onClick={() => {
                          let arr = [...photos];
                          let index = arr.indexOf(x);
                          if (index !== -1) {
                            arr.splice(index, 1);
                            setPhotos(arr);
                          }
                        }}
                        className="text-lg"
                      />
                    </div>
                  ))}
              </p>
            )}
          </StyledDiv>
        </div>
        <div className="w-full flex flex-row gap-2 mt-2 mb-4">
          <div className="basis-1/2">
            <Link to="/product/productpreview">
              <button
                type="submit"
                formAction={"preview"}
                name="preview"
                className="w-full bg-purple4 hover:bg-purple5 py-3 px-4 rounded-2xl font-medium text-sm text-white text-center cursor-pointer transition ease-in-out duration-300"
              >
                Preview
              </button>
            </Link>
          </div>
          <div className="basis-1/2">
            <button
              type="submit"
              formAction={"add"}
              name="add"
              className="w-full bg-purple4 hover:bg-purple5 py-3 px-4 rounded-2xl font-medium text-sm text-white text-center cursor-pointer transition ease-in-out duration-300"
            >
              Terbitkan
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

const StyledDiv = tw.div`
  text-neutral2
  rounded-md
  border-2
  border-dashed
  border-neutral2 
  p-8 
  w-fit
  cursor-pointer
`;

export default Form;
