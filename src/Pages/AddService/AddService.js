import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddService.css";

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    axios.post("http://localhost:5000/services", data).then((res) => {
      //   console.log(res);
      if (res.data.insertedId) {
        alert("added successfully");
        reset();
      }
    });
  };

  return (
    <div className="add-service">
      <h1>Please add a service</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="name"
          {...register("firstName", { required: true, maxLength: 20 })}
        />
        <textarea placeholder="description" {...register("description")} />
        <input placeholder="price" type="number" {...register("price")} />
        <input placeholder="Img url" {...register("img")} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddService;
