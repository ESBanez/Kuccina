import React from "react";
import "../sass/CreateMeal.scss"
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';


function CreateMeal(closeModal){

  const handleSubmit = () => {
    
  }

  const formik = useFormik({
    initialValues: {
      title: "",  //Lalagyan din ng values yung title, thumb, inst
      thumbnail: "",
      instructions: "",
    },

    validationSchema: Yup.object({
      title: Yup.string()
        .required("Title field is required.")
        .min(3, "Title must be at least 3 characters long."),
      thumbnail: Yup.mixed()
        .required("Please upload an image."),
      instructions: Yup.string()
        .required("Instruction field is required."),
    }),
    
    onSubmit: (value) => {
      console.log(value)
    }
  })

 

  const handleCancel = () => {
    closeModal(false);
  };
    return (
      <>
        <div className="modalBackground">
          <div className="modalContainer">
            <div className="titleCloseBtn">
              <Link className="btn btn-outline-dark" onClick={() => closeModal(false)}>X</Link>
            </div>
            <div className="title">
              <h5>Create Meal</h5>
            </div>
            <div className="body">
              <form className="w-100" onSubmit={formik.handleSubmit}>
                <div className="mb-3 row form-group">
                  <label htmlFor="title" className="form-label col-3">Meal: </label>
                  <div className="col-9">
                   <input
                   type="text"
                   className="form-control"
                   id="title"
                   placeholder="e.g. Adobo"
                   value={formik.values.title}
                   onChange={formik.handleChange}
                   />
                   {
                    formik.errors.title && <span className="text-danger">{formik.errors.title}</span>
                   }
                  </div>
                </div>

                <div className="mb-3 row form-group">
                  <label htmlFor="thumbnail" className="form-label col-3">Photo: </label>
                  <div className="col-9">
                   <input 
                   type="file"
                   className="form-control"
                   id="thumbnail" 
                   accept="image/*"
                   value={formik.values.thumbnail}
                   onChange={formik.handleChange}
                   />
                   {
                    formik.errors.thumbnail && <span className="text-danger">{formik.errors.thumbnail}</span>
                   }

                  </div>
                </div>

                <div className="mb-3 row form-group">
                  <label htmlFor="instructions" className="form-label col-3">Instructions: </label>
                  <div className="col-9">
                    <textarea className="form-control"
                      id="instructions"
                      rows="8"
                      placeholder="write instructions here..."
                      value={formik.values.instructions}
                      onChange={formik.handleChange}
                      ></textarea>
                      {
                        formik.errors.instructions && <span className="text-danger">{formik.errors.instructions}</span>
                      }
                  </div>
                </div>
                <br/><br/><br/><br/>
                <div className="footer">
                  <Link type="close" className="btn btn-danger mx-5 px-4" onClick={() => closeModal(false)}>Cancel</Link>
                  <button type="submit" className="btn btn-success mx-5 px-4"  data-toggle="modal" data-target="#test2">Submit</button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default CreateMeal;
  