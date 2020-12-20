import React, {useState} from "react";

function LogIn() {
    const [contact, setContact] = useState({
      email: "",
      password: "",
      stars:""
    });

    function update(event) {
      const { name, value } = event.target;
      setContact((prevData) => {
        if (name === "email") {
          return {
            email: value,
            password: prevData.password,
            stars: prevData.stars
          };
        } else {
          let newStars = ""
          if(value.length>prevData.password.length){
            newStars = prevData.stars + "*";
          } else {
            newStars = (prevData.stars).slice(0,(prevData.stars).length-1);
          }
          return {
            email: prevData.email,
            password: value,
            stars: newStars
          };
        }
      });
    }

    return (
        <div>
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
              name="password"
              placeholder="Password"
              value={contact.stars}
            />
            <button>Log in</button>
          </form>

          <p><a href="/forgotpass">Forgot password</a></p>
          <p>Don't have an account? <a href="/signup">Sign Up</a></p>
        </div>

    );

}

export default LogIn;
