import React from 'react'

// Import components
import Sidebar from './Sidebar'
import ActiveChapter from './ActiveChapter'

// Component Style
import style from './style.less'

class ActiveCourse extends React.Component {
  constructor(props) {
    super()
    this.state = {}
  }

  render() {
    return (
      <div className={style.activeCourse}>
        <div className={style.container}>
          <div className={style.sidebar}>
            <Sidebar/>
          </div>

          <div className={style.activeChapter}>
            <ActiveChapter/>
          </div>
        </div>
      </div>
    )
  }
}

export default ActiveCourse
