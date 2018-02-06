import React from 'react'
import { Redirect } from 'react-router-dom'

// Material UI imports
import Paper from 'material-ui/Paper'
import ThumbUpIcon from 'material-ui/svg-icons/action/thumb-up'

const courses = [
	{
		title: "C#",
		rating: "15",
		date: "12/21/18",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non augue quis dolor congue lacinia in pretium nunc. Pellentesque commodo vehicula leo, nec pretium libero consequat varius. Aliquam varius tellus quis magna dignissim, non molestie mauris rutrum. In viverra nunc odio, id gravida erat faucibus id.",
	},
	{
		title: "Swift",
		rating: "62",
		date: "11/30/15",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non augue quis dolor congue lacinia in pretium nunc. Pellentesque commodo vehicula leo, nec pretium libero consequat varius. Aliquam varius tellus quis magna dignissim, non molestie mauris rutrum. In viverra nunc odio, id gravida erat faucibus id.",
	},
	{
		title: "Ruby",
		rating: "55",
		date: "1/23/18",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non augue quis dolor congue lacinia in pretium nunc. Pellentesque commodo vehicula leo, nec pretium libero consequat varius. Aliquam varius tellus quis magna dignissim, non molestie mauris rutrum. In viverra nunc odio, id gravida erat faucibus id.",
	},
	{
		title: "JavaScript",
		rating: "85",
		date: "11/11/18",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non augue quis dolor congue lacinia in pretium nunc. Pellentesque commodo vehicula leo, nec pretium libero consequat varius. Aliquam varius tellus quis magna dignissim, non molestie mauris rutrum. In viverra nunc odio, id gravida erat faucibus id.",
	},
	{
		title: "C#",
		rating: "15",
		date: "12/21/18",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non augue quis dolor congue lacinia in pretium nunc. Pellentesque commodo vehicula leo, nec pretium libero consequat varius. Aliquam varius tellus quis magna dignissim, non molestie mauris rutrum. In viverra nunc odio, id gravida erat faucibus id.",
	},
	{
		title: "Swift",
		rating: "62",
		date: "11/30/15",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non augue quis dolor congue lacinia in pretium nunc. Pellentesque commodo vehicula leo, nec pretium libero consequat varius. Aliquam varius tellus quis magna dignissim, non molestie mauris rutrum. In viverra nunc odio, id gravida erat faucibus id.",
	},
	{
		title: "Ruby",
		rating: "55",
		date: "1/23/18",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non augue quis dolor congue lacinia in pretium nunc. Pellentesque commodo vehicula leo, nec pretium libero consequat varius. Aliquam varius tellus quis magna dignissim, non molestie mauris rutrum. In viverra nunc odio, id gravida erat faucibus id.",
	},
	{
		title: "JavaScript",
		rating: "85",
		date: "11/11/18",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non augue quis dolor congue lacinia in pretium nunc. Pellentesque commodo vehicula leo, nec pretium libero consequat varius. Aliquam varius tellus quis magna dignissim, non molestie mauris rutrum. In viverra nunc odio, id gravida erat faucibus id.",
	},
]

// Component Style
import style from './style.less'

class CourseList extends React.Component {
	constructor(props) {
		super();
		this.state = {
		}
  }

  render (){
		return (
	  	<div className={style.courseList}>
				{courses.map((course, index) => {
					return (
						<Paper key={index} className={style.listItem}>
							<div className={style.listItemTitle}>
								<h3>{course.title}</h3>
								<h5><ThumbUpIcon className={style.upvoteIconStyle} />{course.rating} Likes</h5>
							</div>
							<h5 className={style.listItemDate}>{course.date}</h5>
							<p className={style.listItemDescription}>{course.description}</p>
						</Paper>
					)
				})}
	  	</div>
	  )
	}
}

export default CourseList
