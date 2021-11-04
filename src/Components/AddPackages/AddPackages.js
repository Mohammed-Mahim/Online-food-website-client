import React from "react";
import { useForm } from "react-hook-form";
import "./AddPackages.css";

const AddPackages = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('https://protected-taiga-21434.herokuapp.com/products',{
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
        .then(res => res.json()) 
        .then(result => {
          if(result.insertedId){
            alert("Package added");
            reset();
          }
        })
    };
  return (
    <div id="addPackages my-5">
      <h2 className="my-4 text-center">Please Add Packages</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
        {...register("name")}
        placeholder="Package Title"
        className="p-2 m-2 "
        />
        <br />
        <input
        {...register("description")}
        placeholder="Description"
        className="p-2 m-2"
        />
        
        <br />
        <input
        {...register("rating")}
        placeholder="Overall Rating"
        className="p-2 m-2"
        />
        <br />

        <input
        {...register("image", { required: true })}
        placeholder="Image Link"
        className="p-2 m-2"
        />
        <br />

        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" value="Add" className="btn__regular" />
    </form>
    </div>
  );
};

export default AddPackages;