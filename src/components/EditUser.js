import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useParams,useNavigate} from 'react-router-dom';
import { useFormik } from "formik";
import * as yup from "yup";

const userValidationSchema = yup.object({
     name: yup.string().required().min(2 , "need a longer name"),
     email: yup.string().required(),
     mobile: yup.number().required().min(10 , "need a longer number").max(13),
     batch: yup.string().required().min(5 , "need a longer batch number").max(10),
})

export function EditUser(props) {

    let params = useParams();
    let navigate = useNavigate();
    // let [name,setName] = useState("");
    // let [email,setEmail] = useState("");
    // let [mobile,setMobile] = useState("");
    // let [batch,setBatch] = useState("");

    const {handleSubmit , values , handleBlur , handleChange , touched , errors , 
      email , mobile , batch , name , setName , setEmail , setMobile , setBatch} = 
    useFormik({
    initialValues: {
     name: "",
     email: "",
     mobile: "",
     batch: "",
    },
    validationSchema: userValidationSchema,
    onSubmit: (useEffect) => {
     console.log("Form Values", useEffect);
     EditUser(useEffect);
    }
 });

    

    // let handleSubmit = ()=>{
      let newData = {name,email,mobile,batch}
      //take a deep clone of the state
      let data = [...props.data.users]
      //replace the data to the new clone
      data.splice(params.id,1,newData)
      //update the state with the new cloned variable
      props.data.setUsers(data)
      navigate('/dashboard')


    // }

    

    useEffect(()=>{
        if(params.id<props.data.users.length)
        {
            setName(props.data.users[params.id].name)
            setEmail(props.data.users[params.id].email)
            setMobile(props.data.users[params.id].mobile)
            setBatch(props.data.users[params.id].batch)
        }
        else
        {
            navigate('/dashboard')
        }
    },[])

  return <div className='mx-auto col-10'>
  <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3">
     <Form.Label>Name</Form.Label>
     <Form.Control 
     name="name"
     value={values.name} 
     onChange={handleChange}
     onBlur={handleBlur}
     type="text" placeholder="Enter Name" 
     variant="outlined"
     error={touched.name && errors.names}
     helperText={touched.name && errors.name ? errors.name : null}/>
   </Form.Group>
   

   <Form.Group className="mb-3" >
     <Form.Label>Email address</Form.Label>
     <Form.Control 
     name="email"
     value={values.email} 
     onChange={handleChange}
     onBlur={handleBlur}
     type="email" placeholder="Enter email" 
     variant="outlined"
     error={touched.email && errors.email}
     helperText={touched.email && errors.email ? errors.email : null}/>
   </Form.Group>
   

   <Form.Group className="mb-3" >
     <Form.Label>Mobile</Form.Label>
     <Form.Control 
     name="mobile"
     value={values.mobile} 
     onChange={handleChange}
     onBlur={handleBlur}
     type="text" placeholder="Enter Mobile" 
     variant="outlined"
     error={touched.mobile && errors.mobile}
     helperText={touched.mobile && errors.mobile ? errors.mobile : null}/>
   </Form.Group>
   

   <Form.Group className="mb-3" >
     <Form.Label>Batch</Form.Label>
     <Form.Control 
     name="batch"
     value={values.batch} 
     onChange={handleChange}
     onBlur={handleBlur}
     type="text" placeholder="Enter Batch" 
     variant="outlined"
     error={touched.batch && errors.batch}
     helperText={touched.batch && errors.batch ? errors.batch : null}/>
   </Form.Group>
   
  
   <Button color="success" type="submit" variant="primary">
     Submit
   </Button>
   {/* <div>
        Values
        <pre>{JSON.stringify(values)}</pre>
        Error
        <pre>{JSON.stringify(errors)}</pre>
        Touched
        <pre>{JSON.stringify(touched)}</pre>
        </div> */}
 </Form>
</div>
}

export default EditUser