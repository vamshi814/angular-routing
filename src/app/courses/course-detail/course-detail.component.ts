import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/Models/course';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit{

  selectedCourse?: Course;
  courseId: number = 0;

  courseService: CourseService = inject(CourseService);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  
  ngOnInit(){

    //  this.courseId = this.activeRoute.snapshot.params['id'];
    // console.log(this.courseId);

    // this.courseService.courses.find((course)=>{
    //   course.id === this.courseId 
    // })
    // ------------------------------------
    // Only reads the value present at initialization
     //this.courseId = +this.activeRoute.snapshot.paramMap.get('id');
    
    // this.activeRoute.paramMap.subscribe(data => {
    //   this.courseId = data.get('id'); // Resolves parameter reactively
    //   console.log(this.courseId);
    // });

    this.activeRoute.params.subscribe((data)=>{
      this.courseId = +data['id'];
      console.log(this.courseId);

      this.selectedCourse = this.courseService.courses.find(course => course.id === this.courseId);
    })
  }
}
