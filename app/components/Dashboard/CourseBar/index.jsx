import React from 'react';

// Material UI imports
import IconButton from 'material-ui/IconButton';
import ActionArrow from 'material-ui/svg-icons/hardware/keyboard-arrow-right';

// Component Style
import style from './style.less';

// Import static Resources
import { img } from '../../../static';

// Component Actions
import { getOpenCourse } from './actions';

class CourseBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  navigateToCourse(course) {
    getOpenCourse(course.id, data => {
      let link = 'data:application/pdf;base64,' + data;
      var iframe =
        "<iframe width='100%' height='100%' src='" +
        link +
        "' style='border: none; margin: 0; padding: 0;'></iframe>";
      var x = window.open();
      x.document.open();
      x.document.write(iframe);
      x.document.close();
    });
  }

  render() {
    return (
      <div className={style.courseBar}>
        <h3 className={style.title}>Favorite Courses</h3>
        {this.props.favorites.map((favorite, index) => {
          if (this.props.activeUser === favorite.user_id) {
            return this.props.courses.map((course, index) => {
              if (favorite.course_id === course.id) {
                return (
                  <div key={index} className={style.selectedCourseContainer}>
                    <a onClick={this.navigateToCourse.bind(this, course)}>
                      <div className={style.selectedCourseItem}>
                        <div className={style.imgContainer}>
                          <img
                            className={style.defaultIconStyle}
                            src={img.defaultIcon}
                          />
                        </div>
                        <h4>{course.name}</h4>

                        <IconButton
                          tooltip="Open"
                          tooltipPosition="bottom-left"
                          touch={true}
                        >
                          <ActionArrow className={style.arrowButton} />
                        </IconButton>
                      </div>
                    </a>
                  </div>
                );
              }
            });
          }
        })}
      </div>
    );
  }
}

export default CourseBar;
