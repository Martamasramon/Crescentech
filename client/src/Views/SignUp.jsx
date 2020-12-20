import React, {useState} from "react";

function SignUp(){

  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    stars:"",
    passwordRepeated: "",
    starsRepeated:""
  });

  function update(event) {
    const { name, value } = event.target;

    setContact((prevData) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevData.lName,
          email: prevData.email,
          password: prevData.password,
          stars: prevData.stars,
          passwordRepeated: prevData.passwordRepeated,
          starsRepeated: prevData.starsRepeated
        };
      } else if (name === "lName") {
        return {
          fName: prevData.fName,
          lName: value,
          email: prevData.email,
          password: prevData.password,
          stars: prevData.stars,
          passwordRepeated: prevData.passwordRepeated,
          starsRepeated: prevData.starsRepeated
        };
      } else if (name === "email"){
        return {
          fName: prevData.fName,
          lName: prevData.lName,
          email: value,
          password: prevData.password,
          stars: prevData.stars,
          passwordRepeated: prevData.passwordRepeated,
          starsRepeated: prevData.starsRepeated
        };
      } else if (name === "password"){
        let newStars = ""
        if(value.length>prevData.password.length){
          newStars = prevData.stars + "*";
        } else {
          newStars = (prevData.stars).slice(0,(prevData.stars).length-1);
        }
        return {
          fName: prevData.fName,
          lName: prevData.lName,
          email: prevData.email,
          password: value,
          stars: newStars,
          passwordRepeated: prevData.passwordRepeated,
          starsRepeated: prevData.starsRepeated
        };
      } else {
        let newStars = ""
        if(value.length>prevData.passwordRepeated.length){
          newStars = prevData.starsRepeated + "*";
        } else {
          newStars = (prevData.starsRepeated).slice(0,(prevData.starsRepeated).length-1);
        }
        return {
          fName: prevData.fName,
          lName: prevData.lName,
          email: prevData.email,
          password: prevData.password,
          stars: prevData.stars,
          passwordRepeated: value,
          starsRepeated: newStars
        };
      }
    });
  }

  return (
      <div>
        <h1>Fill in with your details to make an account</h1>

        <form>
          <input
            onChange={update}
            name="fName"
            placeholder="First Name"
            value={contact.fName}
          />
          <input
            onChange={update}
            name="lName"
            placeholder="Last Name"
            value={contact.lName}
          />
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
          <input
            onChange={update}
            name="passwordRepeated"
            placeholder="Repeat the password"
            value={contact.starsRepeated}
          />
          <button>Sign up</button>
        </form>

        <p>Already have an account? <a href="/login">Log in</a></p>
      </div>

  );

}

export default SignUp;
