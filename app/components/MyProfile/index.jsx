import React from 'react';

// Material UI imports
import IconButton from 'material-ui/IconButton';
import ActionArrow from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import ActionEdit from 'material-ui/svg-icons/image/edit';
import SadIcon from 'material-ui/svg-icons/social/sentiment-dissatisfied';
import ChartIcon from 'material-ui/svg-icons/editor/insert-chart';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import LinearProgress from 'material-ui/LinearProgress';

// Import components
import Navbar from '../Navbar';

// Component Style
import style from './style.less';

// Import static icons
import { img } from '../../static';

// Material UI Styles
const muiStyle = {
  dialogTitleStyle: {
    color: '#30CFD0'
  }
};

// Component Actions
import {
  getUser,
  getCourses,
  deleteCourse,
  getOpenCourse,
  getSurveys
} from './actions';

class MyProfile extends React.Component {
  constructor(props) {
    super();
    this.state = {
      id: '',
      name: '',
      role: '',
      courses: [],
      course: {},
      surveys: [],
      dialogDelete: false,
      dialogStatistics: false
    };
  }

  componentWillMount() {
    this.state.id = localStorage.id;
    this.activeUser();
    this.updateCourses();
    this.updateStatistics();
  }

  updateCourses() {
    getCourses(data => {
      this.setState({
        courses: data
      });
    });
  }

  updateStatistics() {
    getSurveys(data => {
      this.setState({
        surveys: data
      });
    });
  }

  activeUser() {
    getUser(this.state.id, data => {
      this.setState({
        id: data.id,
        name: data.full_name,
        role: data.role
      });
    });
  }

  dialogClose() {
    this.setState({
      dialogDelete: false,
      dialogStatistics: false
    });
  }

  confirmDeleteContent() {
    deleteCourse(this.state.course.id, res => {
      this.setState({
        dialogDelete: false,
        course: {}
      });
      this.updateCourses();
    });
  }

  deleteCourse(course) {
    this.setState({
      dialogDelete: true,
      course: course
    });
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

  navigateToEditCourse(course) {
    localStorage.courseId = course.id;
    this.props.history.push('/editcourse');
  }

  navigateToStatistics(course) {
    let firstStats = 0;
    let secondStats = 0;
    let thirdStats = 0;
    let fourthStats = 0;
    let fifthStats = 0;
    let counter = 0;

    this.state.surveys.map((survey, index) => {
      if (survey.course_id === course.id) {
        firstStats = firstStats + survey.first;
        secondStats = secondStats + survey.second;
        thirdStats = thirdStats + survey.third;
        fourthStats = fourthStats + survey.fourth;
        fifthStats = fifthStats + survey.fifth;
        counter++;
      }
    });

    firstStats = firstStats * 10 / counter;
    secondStats = secondStats * 10 / counter;
    thirdStats = thirdStats * 10 / counter;
    fourthStats = fourthStats * 10 / counter;
    fifthStats = fifthStats * 10 / counter;

    if (
      !firstStats &&
      !secondStats &&
      !thirdStats &&
      !fourthStats &&
      !fifthStats
    ) {
      this.setState({
        noStats: true
      });
    } else {
      this.setState({
        noStats: false
      });
    }

    this.setState({
      dialogStatistics: true,
      firstStats: firstStats,
      secondStats: secondStats,
      thirdStats: thirdStats,
      fourthStats: fourthStats,
      fifthStats: fifthStats,
      courseName: course.name + ' Course Statistics'
    });
  }

  render() {
    const deleteActions = [
      <FlatButton
        label="Cancel"
        style={{ color: '#747374' }}
        primary={true}
        onTouchTap={this.dialogClose.bind(this)}
      />,
      <FlatButton
        label="Delete"
        style={{ color: '#ff0000' }}
        primary={true}
        onTouchTap={this.confirmDeleteContent.bind(this)}
      />
    ];

    const statisticsAction = [
      <FlatButton
        label="OK"
        style={{ color: '#37bdd5' }}
        primary={true}
        onTouchTap={this.dialogClose.bind(this)}
      />
    ];

    return (
      <div className={style.myProfile}>
        <Navbar {...this.props} />

        <div className={style.headerStyle}>
          <img className={style.imgStyle} src={img.defaultUser} />
          <h2>{this.state.name}</h2>
          <h4>{this.state.role}</h4>
        </div>

        {/* Only student can see this container */}
        <div className={style.coursesContainer}>
          <h2>Favorite Courses</h2>
          <div className={style.courses}>
            {this.state.courses.map((course, index) => {
              return (
                <div key={index} className={style.selectedCourseContainer}>
                  <div className={style.selectedCourseItem}>
                    <h4 className={style.courseNameStyle}>
                      <img
                        className={style.defaultIconStyle}
                        src={img.defaultIcon}
                      />
                      {course.name}
                    </h4>

                    <IconButton
                      onClick={this.navigateToCourse.bind(this, course)}
                      tooltip="Open"
                      tooltipPosition="bottom-left"
                      touch={true}
                    >
                      <ActionArrow className={style.arrowButton} />
                    </IconButton>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* only teacher can see this container */}
        <div className={style.coursesContainer}>
          <div>
            <h2>Added Courses</h2>
          </div>
          <div className={style.courses}>
            {this.state.courses.map((course, index) => {
              return (
                <div key={index} className={style.selectedCourseContainer}>
                  <div className={style.selectedCourseItem}>
                    <h4 className={style.courseNameStyle}>
                      <img
                        className={style.defaultIconStyle}
                        src={img.defaultIcon}
                      />
                      {course.name}
                    </h4>
                    <IconButton
                      onClick={this.navigateToStatistics.bind(this, course)}
                      tooltip="Statistics"
                      tooltipPosition="bottom-left"
                      touch={true}
                    >
                      <ChartIcon className={style.chartButton} />
                    </IconButton>

                    <IconButton
                      onClick={this.navigateToEditCourse.bind(this, course)}
                      tooltip="Edit"
                      tooltipPosition="bottom-left"
                      touch={true}
                    >
                      <ActionEdit className={style.editButton} />
                    </IconButton>

                    <IconButton
                      onClick={this.deleteCourse.bind(this, course)}
                      tooltip="Delete"
                      tooltipPosition="bottom-left"
                      touch={true}
                    >
                      <ActionDelete className={style.deleteButton} />
                    </IconButton>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Delete Content Dialog */}
        <Dialog
          className={style.dialog}
          title="Delete Course"
          actions={deleteActions}
          modal={false}
          open={this.state.dialogDelete}
          onRequestClose={this.dialogClose.bind(this)}
        >
          Do you realy want to delete
          <span className={style.highlight}>{this.state.course.name}</span>
          ?
        </Dialog>

        {/* Statistics Dialog */}
        <Dialog
          className={style.dialog}
          title={this.state.courseName}
          titleStyle={muiStyle.dialogTitleStyle}
          actions={statisticsAction}
          modal={false}
          open={this.state.dialogStatistics}
          onRequestClose={this.dialogClose.bind(this)}
        >
          {(() => {
            if (!this.state.noStats) {
              return (
                <div>
                  <h5>This dialog shows averrage statistics.</h5>
                  <ol>
                    <li>
                      Where course objectives clear?
                      <div className={style.progressContainer}>
                        <LinearProgress
                          mode="determinate"
                          className={style.progress}
                          value={this.state.firstStats}
                        />
                        <h4>{this.state.firstStats}%</h4>
                      </div>
                    </li>
                    <li>
                      Were the course textnotes clear and well written?
                      <div className={style.progressContainer}>
                        <LinearProgress
                          mode="determinate"
                          className={style.progress}
                          value={this.state.secondStats}
                        />
                        <h4>{this.state.secondStats}%</h4>
                      </div>
                    </li>
                    <li>
                      Where the assignments appropriate for the level of this
                      class?
                      <div className={style.progressContainer}>
                        <LinearProgress
                          mode="determinate"
                          className={style.progress}
                          value={this.state.thirdStats}
                        />
                        <h4>{this.state.thirdStats}%</h4>
                      </div>
                    </li>
                    <li>
                      Have this course increased my interest in the subject?
                      <div className={style.progressContainer}>
                        <LinearProgress
                          mode="determinate"
                          className={style.progress}
                          value={this.state.fourthStats}
                        />
                        <h4>{this.state.fourthStats}%</h4>
                      </div>
                    </li>
                    <li>
                      Is this course corresponded to my expectations?
                      <div className={style.progressContainer}>
                        <LinearProgress
                          mode="determinate"
                          className={style.progress}
                          value={this.state.fifthStats}
                        />
                        <h4>{this.state.fifthStats}%</h4>
                      </div>
                    </li>
                  </ol>
                </div>
              );
            } else {
              return (
                <div className={style.noStatsStyle}>
                  <SadIcon className={style.sadIcon} />
                  <h4>Sorry, insufficient surveys passed to show statistics</h4>
                </div>
              );
            }
          })()}
        </Dialog>
      </div>
    );
  }
}

export default MyProfile;
