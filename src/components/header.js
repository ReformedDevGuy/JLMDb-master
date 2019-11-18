import React from 'react';
//import { logo } from '../img/JLMDB.png';

const Header = (props) =>{
	return (

		<section>
			
			 <section>
				<nav className="navbar navbar-default navbar-dark bg-dark">
					<div className="container">
						<div className="navbar-header">
							<a className="navbar-brand" href="/"><img src={require('../img/JLMDB.png')} alt="JLMDb"></img></a>
						</div>
						<div id="navbar" className="navbar-collapse collapse">
							
							<ul className="nav navbar-nav navbar-right">
								<li><span className="loggedInUser">{props.user.email}</span></li>
								<li><a onClick={props.isLogout}>Logout</a></li>
							</ul>
						</div>
					</div>
				</nav> 
			</section>
		</section>
	);
}
export default Header;
