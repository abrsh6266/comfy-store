import { Outlet } from "react-router-dom";
const HomeLayout = () => {
  return (
    <>
      <nav className="text-4xl text-primary">
        <span>Comfy</span>
      </nav>
      <section className="align-element py-20">
        <Outlet />
      </section>
    </>
  );
};

export default HomeLayout;
