import { Component } from 'react';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CourseListThead from '../../components/course-list/course-list-thead';
import CourseListTbody from '../../components/course-list/course-list-tbody';
import { fetchCourses } from '../../actions';


export class CourseListIndex extends Component<any,object> {
  componentDidMount( ){
    this.props.fetchCourses();
  }
  
  render() {
    if( !this.props.courses ){
      return null;
    }
    return (
      <div className="container">
        <h1>Courses
        <Link to="courses/add" className="btn btn-primary" style={{float: 'right'}}>
          Add Course
        </Link>
        </h1>
        <table className="table table-bordered table-striped table-hover">  
          <CourseListThead />
			    <CourseListTbody courses={this.props.courses}/>
  		  </table>
      </div>
    );
  }
}

function mapStateToProps( {courses = null} ){
  return { courses };
}

function mapDispatchToProps( dispatch: any ){
  return { fetchCourses: ()=> dispatch(fetchCourses()) }
}


export default connect( mapStateToProps, mapDispatchToProps )(CourseListIndex);