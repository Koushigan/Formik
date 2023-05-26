import { useFormik } from "formik";
import * as yup from "yup";

const formValidationSchema = yup.object({
    email: yup.string().min(5 , "need a bigger email").required("why not fill this email"),
    password: yup.string().min(8 , "need a bigger password")
    .max(12 , "Too much password").required("why not fill this password"),
})

export function BasicForm() {
    const {handleSubmit , values , handleBlur , handleChange , touched , errors} = 
       useFormik({
       initialValues: {
        email: "",
        password: "",
       },
       validationSchema: formValidationSchema,
       onSubmit: (values) => {
        console.log("Form Values", values)
       }
    });
    return (
    <form onSubmit={handleSubmit}>
        <input 
        name="email"
        value={values.email} 
        onChange={handleChange}
        onBlur={handleBlur}
        type="email" 
        placeholder="username"
        />
        {touched.email && errors.email ? errors.email : null}
        <input 
        name="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        type="text" 
        placeholder="password"
        />
        {touched.password && errors.password ? errors.password : null}
        <button type="submit">Submit</button>
        {/* Error */}
        {/* <pre>{JSON.stringify(formik.errors)}</pre> */}
        {/* Touched */}
        {/* <pre>{JSON.stringify(formik.touched)}</pre> */}
    </form>
    )
}


// export function BasicForm() {
//     const formik = useFormik({
//        initialValues: {
//         email: "",
//         password: "",
//        },
//        validationSchema: formValidationSchema,
//        onSubmit: (values) => {
//         console.log("Form Values", values)
//        }
//     });
//     return (
//     <form onSubmit={formik.handleSubmit}>
//         <input 
//         name="email"
//         value={formik.values.email} 
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         type="email" 
//         placeholder="username"
//         />
//         {formik.touched.email && formik.errors.email ? formik.errors.email : null}
//         <input 
//         name="password"
//         value={formik.values.password}
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         type="text" 
//         placeholder="password"
//         />
//         {formik.touched.password && formik.errors.password ? formik.errors.password : null}
//         <button type="submit">Submit</button>
//         {/* Error */}
//         {/* <pre>{JSON.stringify(formik.errors)}</pre> */}
//         {/* Touched */}
//         {/* <pre>{JSON.stringify(formik.touched)}</pre> */}
//     </form>
//     )
// }