import React from 'react';
import Card from './Card';
import {useState} from 'react';
import 'react-toastify/dist/ReactToastify.css'; // import first
import { ToastContainer, toast } from 'react-toastify'; 

const Cards = (props) => {

    let courses = props.courses;
    let category = props.category;
    const [likedCourses, setLikedCourses] = useState([]);
    const getCourses = () => {
        if(category === 'All') {
            let allCourses = [];
            Object.values(courses).forEach( array => {
                array.forEach( (courseData) => {
                    allCourses.push(courseData);
                })
            })
            return allCourses;
        }
else {
    //specific category
    return courses[category];
}

}
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
        {
        getCourses().map( (course) => {
            return <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
        })
    }
    </div>
  )
}

export default Cards