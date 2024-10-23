const Home = () => {

      const lightMode = false;


  return (
    <div className="container">
      This is Home Page
      <p className={`${lightMode ? "bg-light" : "bg-dark"} container`}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem officiis
        qui velit nulla autem at quod excepturi. Unde quibusdam, deserunt cumque
        nemo tempora animi vero pariatur expedita sed odit repellat.
      </p>
    </div>
  );
}
export default Home