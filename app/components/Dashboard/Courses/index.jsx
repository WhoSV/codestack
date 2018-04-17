import React from 'react';

// Material UI imports
import IconButton from 'material-ui/IconButton';
import FavoriteIcon from 'material-ui/svg-icons/action/favorite';

// Material UI Styles
const muiStyle = {
  underlineStyle: {
    border: '0.5px solid #30CFD0'
  },
  submitButton: {
    minWidth: 50,
    width: 50
  },
  submitButtonLabelStyle: {
    padding: 0
  }
};

// Component Style
import style from './style.less';

// Import static Resources
import { img } from '../../../static';

// Component Actions
import { addToFavorite, deleteFavorite, getOpenCourse } from './actions';

class Courses extends React.Component {
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

  addFavorite(course) {
    const userId = this.props.activeUser;
    const courseId = course.id;

    if (userId && courseId) {
      let formData = {
        user_id: userId,
        course_id: courseId
      };

      addToFavorite(formData, () => {
        this.props.updateDashboard();
      });
    }
  }

  removeFavorite(favorite) {
    deleteFavorite(favorite.id, res => {
      this.props.updateDashboard();
    });
  }

  render() {
    return (
      <div className={style.courses}>
        <div className={style.titleBar}>
          <h3>Available Courses</h3>
        </div>

        <div className={style.courseList}>
          {this.props.courses.map((course, index) => {
            if (course.status === 'ACTIVE') {
              return (
                <div key={index} className={style.listItem}>
                  <div className={style.listItemTitle}>
                    <a
                      className={style.courseTitle}
                      onClick={this.navigateToCourse.bind(this, course)}
                    >
                      <h3>
                        <img
                          className={style.defaultIconStyle}
                          src={img.defaultIcon}
                        />
                        {course.name}
                      </h3>
                    </a>
                    {this.props.favorites.map((favorite, index) => {
                      // console.log(favorite);
                      // console.log(course.id);
                      if (
                        course.id === favorite.course_id &&
                        this.props.activeUser === favorite.user_id
                      ) {
                        return (
                          <div key={index} className={style.votesContainer}>
                            <IconButton
                              tooltip="Remove from Favorite"
                              tooltipPosition="bottom-left"
                              touch={true}
                              className={style.favoriteStyle}
                              onClick={this.removeFavorite.bind(this, favorite)}
                            >
                              <FavoriteIcon
                                className={style.likedfavoriteIconStyle}
                              />
                            </IconButton>
                          </div>
                        );
                      } else {
                        return (
                          <div key={index} className={style.votesContainer}>
                            <IconButton
                              tooltip="Add to Favorite"
                              tooltipPosition="bottom-left"
                              touch={true}
                              className={style.favoriteStyle}
                              onClick={this.addFavorite.bind(this, course)}
                            >
                              <FavoriteIcon
                                className={style.favoriteIconStyle}
                              />
                            </IconButton>
                          </div>
                        );
                      }
                    })}
                  </div>
                  <h5 className={style.listItemTeacher}>
                    By: {course.teacher}
                  </h5>
                  <h5 className={style.listItemDate}>
                    Date: {course.created_at}
                  </h5>
                  <p className={style.listItemDescription}>
                    {course.description}
                  </p>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default Courses;
