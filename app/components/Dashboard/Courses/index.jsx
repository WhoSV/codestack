import React from 'react';

// Material UI imports
import IconButton from 'material-ui/IconButton';
import FavoriteIcon from 'material-ui/svg-icons/action/favorite';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

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
    this.state = {
      dialogAlert: false,
      courseName: ''
      // courseList: [
      // {
      //   id: '',
      //   name: '',
      //   teacher: '',
      //   date: '',
      //   status: '',
      //   description: '',
      //   isFavorite: false
      // },
      // {
      //   id: '',
      //   name: '',
      //   teacher: '',
      //   date: '',
      //   status: '',
      //   description: '',
      //   isFavorite: false
      // }
      // ]
    };
  }

  // componentWillMount() {
  //   this.createCourseList();
  // }

  // createCourseList() {
  //   let courseList = this.state.courseList;
  //   let emptyCourse = {
  //     id: '',
  //     name: '',
  //     teacher: '',
  //     date: '',
  //     status: '',
  //     description: '',
  //     isFavorite: false
  //   };
  //   let courses = this.props.courses;
  //   let favorites = this.props.favorites;

  //   if (courses.length > 0) {
  //     // for (let i = 0; i < courses.length; i++) {
  //     //   courseList.push(emptyCourse);
  //     // }
  //     courseList = courses;

  //     console.log(this.props.favorites);
  //     for (let i = 0; i < favorites.length; i++) {
  //       for (let j = 0; j < courseList.length; j++) {
  //         if (
  //           this.props.activeUser === favorites[i].user_id &&
  //           courseList[j].id === favorites[i].course_id
  //         ) {
  //           courseList[j].isFavorite = true;
  //         } else {
  //           courseList[j].isFavorite = false;
  //         }
  //       }
  //     }

  // console.log(courses);
  // console.log(courses);

  // for (let i = 0; i < courses.length; i++) {
  //   // console.log(i);

  //   courseList[i].id = courses[i].id;
  //   courseList[i].name = courses[i].name;
  //   courseList[i].status = courses[i].status;
  //   courseList[i].teacher = courses[i].teacher;
  //   courseList[i].date = courses[i].created_at;
  //   courseList[i].description = courses[i].description;
  //   console.log(courseList);
  // }
  // this.props.courses.map((course, index) => {
  //   // console.log('index ' + index);
  //   // console.log(courseList);
  //   courseList[index].id = course.id;
  //   console.log(courseList[index].id);
  //   courseList[index].name = course.name;
  //   console.log(courseList[index].name);
  // });
  // }

  // console.log(courseList);

  // this.setState({
  //   courseList
  // });
  // }

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

    this.setState({
      dialogAlert: true,
      courseName: course.name
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

  confirmPassSurvey() {
    console.log('pass');
  }

  dialogClose() {
    this.setState({
      dialogAlert: false
    });
  }

  render() {
    const alertActions = [
      <FlatButton
        label="No"
        style={{ color: '#747374' }}
        primary={true}
        onTouchTap={this.dialogClose.bind(this)}
      />,
      <FlatButton
        label="Yes"
        style={{ color: '#30cfd0' }}
        primary={true}
        onTouchTap={this.confirmPassSurvey.bind(this)}
      />
    ];

    return (
      <div className={style.courses}>
        <div className={style.titleBar}>
          <h3>Available Courses</h3>
        </div>

        <div className={style.courseList}>
          {/*} {this.state.courseList.map((course, index) => {
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
                    {(() => {
                      if (course.isFavorite) {
                        return (
                          <div className={style.votesContainer}>
                            <IconButton
                              tooltip="Remove from Favorite"
                              tooltipPosition="bottom-left"
                              touch={true}
                              className={style.favoriteStyle}
                              // onClick={this.removeFavorite.bind(this, favorite)}
                            >
                              <FavoriteIcon
                                className={style.likedfavoriteIconStyle}
                              />
                            </IconButton>
                          </div>
                        );
                      } else {
                        return (
                          <div className={style.votesContainer}>
                            <IconButton
                              tooltip="Add to Favorite"
                              tooltipPosition="bottom-left"
                              touch={true}
                              className={style.favoriteStyle}
                              // onClick={this.addFavorite.bind(this, course)}
                            >
                              <FavoriteIcon
                                className={style.favoriteIconStyle}
                              />
                            </IconButton>
                          </div>
                        );
                      }
                    })()}
                  </div>
                  <h5 className={style.listItemTeacher}>
                    By: {course.teacher}
                  </h5>
                  <h5 className={style.listItemDate}>Date: {course.date}</h5>
                  <p className={style.listItemDescription}>
                    {course.description}
                  </p>
                </div>
              );
            }
          })}*/}
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
                      if (this.props.activeUser === favorite.user_id) {
                        if (course.id === favorite.course_id) {
                          return (
                            <div key={index} className={style.votesContainer}>
                              <IconButton
                                tooltip="Remove from Favorite"
                                tooltipPosition="bottom-left"
                                touch={true}
                                className={style.favoriteStyle}
                                onClick={this.removeFavorite.bind(
                                  this,
                                  favorite
                                )}
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

        {/* Survey Dialog */}
        <Dialog
          className={style.dialog}
          title="Survey"
          actions={alertActions}
          modal={false}
          open={this.state.dialogAlert}
          onRequestClose={this.dialogClose.bind(this)}
        >
          Do you want to pass
          <span className={style.highlight}>{this.state.courseName}</span>
          course survey?
        </Dialog>
      </div>
    );
  }
}

export default Courses;
