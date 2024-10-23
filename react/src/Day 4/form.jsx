
const ReactForm = () => {
  return (
    <div>
      <form className="form container">
        <div className="input">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div className="input">
          <label htmlFor="age">Age</label>
          <input type="number" id="age" />
        </div>
        <div className="input">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" />
        </div>
        <div className="input">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
}
export default ReactForm