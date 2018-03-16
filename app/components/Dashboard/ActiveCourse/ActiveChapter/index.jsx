import React from 'react'

// Material UI imports
import FlatButton from 'material-ui/FlatButton'
import LeftIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-left'
import RightIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-right'

// Component Style
import style from './style.less'

// Material UI Styles
const muiStyle = {
  labelStylePreviousButton: {
    color: '#a4a4a4'
  },
  labelStyleNextButton: {
    color: '#37BDD5'
  }
}

class ActiveChapter extends React.Component {
  constructor(props) {
    super()
    this.state = {}
  }

  render() {
    return (
      <div className={style.activeChapter}>
        <div className={style.header}>
          <FlatButton
            label="Previous"
            labelStyle={muiStyle.labelStylePreviousButton}
            className={style.previousButton}
            icon={<LeftIcon className={style.leftIconStyle} />}
          />

          <FlatButton
            label="Next"
            labelStyle={muiStyle.labelStyleNextButton}
            className={style.nextButton}
            labelPosition="before"
            icon={<RightIcon className={style.rightIconStyle} />}
          />
        </div>

        <div className={style.contentContainer}>
          <h3>Course Title</h3>
        </div>

        <div className={style.footer}>
          <FlatButton
            label="Previous"
            labelStyle={muiStyle.labelStylePreviousButton}
            className={style.previousButton}
            icon={<LeftIcon className={style.leftIconStyle} />}
          />

          <FlatButton
            label="Next"
            labelStyle={muiStyle.labelStyleNextButton}
            className={style.nextButton}
            labelPosition="before"
            icon={<RightIcon className={style.rightIconStyle} />}
          />
        </div>
      </div>
    )
  }
}

export default ActiveChapter
