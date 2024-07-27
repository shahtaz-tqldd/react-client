import Input from "../../components/ui/input";

const SignIn = () => {
  return (
    <div className="fscreen grid grid-cols-9">
      <div className="col-span-5 fcontain center bg-gray-50">
        <div className="flex flex-col gap-4 w-[400px]">
          <h2>Sign In</h2>
          <Input label="Email" type="email" placeholder="Email" />
          <Input label="Password" placeholder="Password" type="password" />
          <button className="btn mt-5">Sign In</button>
        </div>
      </div>
      <div className="col-span-4 fcontain bg-primary"></div>
    </div>
  );
};

export default SignIn;
