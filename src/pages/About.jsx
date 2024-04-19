const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl ">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse nesciunt
        rerum consectetur voluptate, soluta temporibus impedit officiis.
        Suscipit autem exercitationem pariatur magni delectus ratione tenetur
        cum! Aliquid ratione a quia voluptas voluptate vel aperiam dicta
        tenetur? Quidem iure ab voluptate?
      </p>
    </>
  );
};
export default About;
