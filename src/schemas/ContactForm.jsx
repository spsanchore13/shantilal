import * as yup from "yup";

export const contactFormSchema = yup.object({
  name: yup.string().min(3).max(20).required("Please Enter Your Name"),
  email: yup.string().email().required("Please Enter Your Email"),
  message: yup.string().max(250).required("Please Enter Your Message"),
});
