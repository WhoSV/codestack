import React from 'react';

// Material UI imports
import IconButton from 'material-ui/IconButton';
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
import { addToFavorite, getOpenCourse } from './actions';

class Courses extends React.Component {
  constructor(props) {
    super();
    this.state = {
      dialogAlert: false,
      courseName: '',
      surveyCourseId: null
    };
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

    this.setState({
      dialogAlert: true,
      courseName: course.name,
      surveyCourseId: course.id
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

  confirmPassSurvey() {
    localStorage.surveyCourseId = this.state.surveyCourseId;
    localStorage.course_name = this.state.courseName;
    this.props.goToSurvey();
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
                    <div key={index} className={style.votesContainer}>
                      <FlatButton
                        label="Add to Favorite"
                        style={{ color: '#4a90e2' }}
                        primary={true}
                        className={style.favoriteIconStyle}
                        onTouchTap={this.addFavorite.bind(this, course)}
                      />
                    </div>
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
