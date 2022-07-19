import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useDropzone } from "react-dropzone";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import tw from "tailwind-styled-components";
import { BsPlusLg } from "react-icons/bs";
import productSlice from "././../../store/product";
import axios from "axios";

// Style for Preview
const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};

// React Select Animation
const animatedComponents = makeAnimated();

const Form = (props) => {

  // React select style
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

  // React Dropzone settings
  const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps} = useDropzone({
    maxFiles: 4,
    accept: {
      'image/*': []
    },
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });
  
  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          alt=""
          // Revoke data uri after image is loaded
          onLoad={() => { URL.revokeObjectURL(file.preview) }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, []);

  // Dropzone End =============================================

  const [categories, setCategories] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const product = useSelector((state) => state.product.data);
  console.log(product);

  console.log(categories);

  const inputName = useRef();
  const inputPrice = useRef();
  const inputCategories = useRef();
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

    for (let data in submittedProduct) {
      formData.append(data, submittedProduct[data]);
    }

    files.forEach((file) => {
      formData.append("product_photos", file, file.name);
      console.log(file);
    });

    categories.forEach((cat) => {
      formData.append("categories[]", cat.value);
    });

    if (action === "add") {
      try {
        await axios.post(
          "https://binar-second-hand.herokuapp.com/api/v1/product",
          formData,
          {
            headers: {
              Authorization: localStorage.getItem("accessToken"),
            },
          }
        );
        alert("Success add product");
        navigate("/product/productlist");
      } catch (error) {
        alert(error.message);
      }
    } else {
      var data = {
        nama: formData.get("nama"),
        harga: formData.get("harga"),
        deskripsi: formData.get("deskripsi"),
        category: categories,
        product_images: formData.get("product_images"),
      };
      dispatch(productSlice.actions.addProduct(data));
      console.log(data)
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
              components={animatedComponents}
              options={categoryOptions}
              styles={customStyles}
              ref={inputCategories}
              onChange={(item) => setCategories(item)}
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
            placeholder="Deskripsikan Produk Anda"
            className="px-4 py-3 border border-solid border-gray-300 rounded-2xl focus:outline-purple4"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="fotoProduk">Foto Produk</label>
          <section >
            <Dropzone {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} />
              <p className="font-medium font-main">
                <BsPlusLg className="text-lg" />
              </p>
            </Dropzone>
            <aside style={thumbsContainer}>
              {thumbs}
            </aside>
          </section>
          <aside className="text-xs italic">
            <h4>Max. 4 images</h4>
          </aside>
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

const Dropzone = tw.div`
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
