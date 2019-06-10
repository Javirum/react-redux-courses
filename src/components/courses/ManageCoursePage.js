import React from "react";
import { connect } from "react-redux";
import {loadCourses} from "../../redux/actions/courseAction";
import {loadAuthors} from "../../redux/actions/authorAction";
import PropTypes from "prop-types";

class ManageCoursePage extends React.Component {
  componentDidMount() {
    const { courses, authors, loadCourses, loadAuthors } = this.props;

    if (courses.length === 0) {
      loadCourses().catch(error => {
        alert("Loading courses failed" + error);
      });
    }

    if (authors.length === 0) {
      loadAuthors().catch(error => {
        alert("Loading authors failed" + error);
      });
    }
  }

  render() {
    return (
      <>
        <h2>Manage Course</h2>
      </>
    );
  }
}

ManageCoursePage.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.IsRequired,
  loadAuthors: PropTypes.func.IsRequired
}

function mapStateToProps(state) {
  return {
    courses: state.courses
    authors: state.authors
  };
}

const mapDispatchToProps = {
      loadCourses,
      loadAuthors
    }


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageCoursePage);
