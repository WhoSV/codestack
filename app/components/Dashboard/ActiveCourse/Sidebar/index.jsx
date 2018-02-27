import React from 'react'

// Component Style
import style from './style.less'

const chapterList = [
	{
		title: "Introduction",
	},
	{
		title: "Chapter 1",
	},
	{
		title: "Chapter 2",
	},
	{
		title: "Chapter 3",
	},
	{
		title: "Chapter 4",
	},
	{
		title: "Chapter 5",
	},
]

class Sidebar extends React.Component {
	constructor(props) {
		super()
		this.state = {
		}
		this.navigateToChapter = this.navigateToChapter.bind(this)
  }

	navigateToChapter(){
		console.log("go to chapter");
	}

  render (){
		return (
			<div className={style.sidebar}>
	      <h4 className={style.title}>Learn C#</h4>

				{chapterList.map((chapter, index) => {
					return (
						<a key={index} className={style.chapterContainer} onClick={this.navigateToChapter}>
							{chapter.title}
						</a>
					)
				})}
			</div>
	  )
	}
}

export default Sidebar
