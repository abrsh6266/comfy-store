import { Form, Link } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";

export const action = async()=>{
return null
}


const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormInput
          type={"text"}
          label={"username"}
          name={"username"}
          defaultValue={""}
        />
        <FormInput
          type={"email"}
          label={"email"}
          name={"email"}
          defaultValue={""}
        />
        <FormInput
          type={"password"}
          label={"password"}
          name={"password"}
          defaultValue={""}
        />
        <div className="mt-4">
          <SubmitBtn text={"register"} />
        </div>
        <p className="text-center">
          Already a member?
          <Link className="'ml-2 link link-hover link-primary capitalize" to={'/login'}>
            login
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Register;
