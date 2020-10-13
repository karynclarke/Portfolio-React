import React from 'react';

function Project(props) {
	const projectsArray = [
		{
			imgSrc: './assets/ScreenshotWorkdayScheduler.png',
			imgAlt: 'WorkDayScheduler',
			title: 'Daily Planner',
			link: 'https://karynclarke.github.io/Workday-Scheduler/',
			linkText: 'Work Day Scheduler'
		},
		{
			imgSrc: './assets/ScreenshotCodingQuiz.png',
			imgAlt: 'CodingQuiz',
			title: 'Bootcamp Coding Quiz',
			link: 'https://karynclarke.github.io/bootcamp-quiz/ ',
			linkText: 'Bootcamp Coding Quiz'
		},
		{
			imgSrc: './assets/wxdashboard.jpg',
			imgAlt: 'Weather Dashboard',
			title: 'Weather Dashboard',
			link: 'https://karynclarke.github.io/Workday-Scheduler/',
			linkText: 'Weather Dashboard'
		},

		{
			imgSrc: './assets/NoteTakerScreenshot.png',
			imgAlt: 'Note Taker',
			title: 'Note Taker',
			link: 'https://serene-taiga-27292.herokuapp.com/',
			linkText: 'Note Taker'
		},

		{
			imgSrc: './assets/burgerScreenshot.jpg',
			imgAlt: 'Eat Burger',
			title: 'Eat-Da-Burger',
			link: 'https://shielded-cliffs-03581.herokuapp.com/',
			linkText: 'Burger Ordering App'
		},
		//fix
		{
			imgSrc: './assets/ScreenshotSearchReps.png',
			imgAlt: 'SearchMyRepts',
			title: 'Government Representative Search',
			link: ' https://carlosissac.github.io/project1contactmyreps/',
			linkText: 'Search My Reps Group Project'
		}
	];

	return (
		<>
			{projectsArray.map(item => (
				<div className="col-3">
					<div className="card">
						<img className="card-img-top" style={{height:100}} src={item.imgSrc} alt={item.imgAlt}></img>
						<div className="card-body ">
							<h4 className="card-title ">{item.title}</h4>
							<a href={item.link} className="btn btn-primary stretched-link ">
								{item.linkText}
							</a>
						</div>
					</div>
				</div>
			))}
		</>
	);
}

export default Project;

