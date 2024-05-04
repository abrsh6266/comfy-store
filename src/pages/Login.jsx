import { FormInput, SubmitBtn } from "../components";
import { Form, Link } from "react-router-dom";
export const action =
  (store) =>
  async ({ request }) => {
    console.log(store);
    const formData = request.formData(request);
    const data = Object.fromEntries(formData);
    try {
      const response = await customFetch.post("/auth/local", data);
      toast.success("successfully logged in");
      return redirect("/");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "please double check your credentials";

      toast.error(errorMessage);
      return null;
    }
  };

const Login = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 gap-y-4 shadow-lg flex flex-col bg-base-100 p-4"
      >
        <h4 className="text-center  text-3xl font-bold">Login</h4>
        <FormInput
          type={"email"}
          label={"email"}
          name={"identifier"}
          defaultValue={"test@test.com"}
        />
        <FormInput
          type={"password"}
          label={"password"}
          defaultValue={"secret"}
          name={"password"}
        />
        <div className="mt-4">
          <SubmitBtn text={"login"} />
        </div>
        <button type="button" className="btn btn-secondary btn-block ">
          Guest User
        </button>
        <p className="text-center">
          Not a member yet?{" "}
          <Link
            to={"/register"}
            className="ml-2 link link-hover link-primary capitalize"
          >
            Register
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Login;
