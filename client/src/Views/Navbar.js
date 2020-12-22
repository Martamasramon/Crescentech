import React, { Fragment } from 'react';

const Navbar = () => {
  // Add class to change login to logout
  const authLinks = (
    <ul className="nav navbar-nav navbar-right">
      <li id="home"><a href="/">HOME</a></li>
      <li id="contact"><a href="/contact">CONTACT US</a></li>
      <li id="history"><a href="/history">HISTORY</a></li>
      <li id="login"><a href="/login">LOG OUT</a></li>
    </ul>
  );

  const guestLinks = (
    <ul className="nav navbar-nav navbar-right">
      <li id="home"><a href="/">HOME</a></li>
      <li id="contact"><a href="/contact">CONTACT US</a></li>
      <li id="login"><a href="/login">LOG IN</a></li>
    </ul>
  );

  return (
    <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <p className="navbar-brand">Fusarium Detection</p>
        </div>
        <Fragment>{0 ? authLinks : guestLinks}</Fragment>
      </div>
    </nav>
  );
};

export default Navbar;
