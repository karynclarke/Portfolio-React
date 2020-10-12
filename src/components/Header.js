import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function Header() {
	// from portfolio 
	return (
		<>
					<nav className="navbar navbar-expand-lg navbar-dark bg-light">
					<div className="navbar-brand mb-1 h1"> Karyn Clarke </div>
					{/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button> */}
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="nav navbar-nav navbar-right">
							<li className="nav-item">
								<a className="nav-link" href="index.html">
									About
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="newportfolio.html">
									Portfolio
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="contact.html">
									Contact
								</a>
							</li>
						</ul>
					</div>
				</nav>
		</>
	);
}

export default Header;
