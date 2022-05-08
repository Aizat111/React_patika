import PropTypes from "prop-types";
import './App.css';
import Header from "./components/header";
import User from "./components/user";

function App() {
  return (
    <div>
      <h3>Hello World</h3>
      User is:
      <User name="Aizat" surname="Esenbekova" isLoggedIn={true} age={21} friends={["Anisa","Nurjan","Duygu"]}/>
      
    </div>
  );
}

User.propTypes={
  name: PropTypes.string.isRequired,
  surname: PropTypes.string,
  isLoggedIn: PropTypes.bool.isRequired,
  age:PropTypes.oneOfType([PropTypes.number,PropTypes.string]),
  friends: PropTypes.array,
};

User.defaultProps={
  name:" İsimsiz",
  age:12,
};

export default App;
