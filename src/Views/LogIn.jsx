import React, {Component} from "react";

class LogIn extends Component {

  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function update(event) {
    const { name, value } = event.target;

    setContact((prevData) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevData.lName,
          email: prevData.email
        };
      } else if (name === "lName") {
        return {
          fName: prevData.fName,
          lName: value,
          email: prevData.email
        };
      } else {
        return {
          fName: prevData.fName,
          lName: prevData.lName,
          email: value
        };
      }
    });
  }

  render() {
    return (
        <div className="container">
          <h1>Let's get you signed in!</h1>

          <form>
            <input
              onChange={update}
              name="email"
              placeholder="Email"
              value={contact.email}
            />

            <input
              onChange={update}
              name="lName"
              placeholder="Last Name"
              value={contact.lName}
            />

            <button>Submit</button>

            <p><a>Forgot password</a></p>
          </form>

          <p>Don't have an account? <a href="/signup">Sign Up</a></p>
        </div>

    );
  }
}

export default LogIn;
