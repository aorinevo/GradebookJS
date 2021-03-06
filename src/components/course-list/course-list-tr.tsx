import { Component } from 'react';
import * as React from 'react';
import { Link } from 'react-router-dom';

class CourseListTr extends Component<any,any> {
  renderDropDown(id: number){
    return (
      <td>
        <div className="btn-group">
         	<button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
         		<span className="caret"></span>
         	</button>
         	<ul className="dropdown-menu" role="menu">
         		<li className="course-submenu-view"><Link to={`/gradebook/${id}`}>View</Link></li>	
         		<li className="course-submenu-edit"><Link to={`/courses/${id}/edit`}>Edit</Link></li>
         		<li className="course-submenu-export2csv"><Link to="#">Export to CSV</Link></li>								
         		<li className="course-submenu-delete"><Link to={`/courses/${id}/delete`}><span className="text-danger">Delete</span></Link></li>
         	</ul>
         </div>
    	</td>
    );
  }
  
  render() {    
    const { id, name, school, semester, year } = this.props.course;
    return (
      <tr>
        {this.renderDropDown(id)}<td>{id}</td><td>{name}</td><td>{school}</td><td>{semester}</td><td>{year}</td>
      </tr>
    )
  }
}

export default CourseListTr;