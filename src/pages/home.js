import React from 'react';
import ReactDOM from 'react-dom';

//components
import Header from './components/Header';

function Home() {
	return (
		<>
			<Header />

			<div className="container">
				<div className="row">
					<div className="col-md-3">
						<img class="images " img src="assets/karynpic.JPG " alt="Karyn " />
					</div>

					<div className="col-md-9">
						<p>I am a UofO Coding Bootcamp student, learning Full Stack Development at an accelerated pace. My Portfolio shows a variety of homework assignments done in class and a group assigment. When I am not coding, I use my creative and technical abilities daily in my career as TV Newscast Director. I am looking for an opportunity to utilize my experience working with teams, adapting to changing environments, and learning new technologies.</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
