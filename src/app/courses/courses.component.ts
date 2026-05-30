import { Component, inject, OnInit } from '@angular/core';
import { CourseService } from '../Services/course.service';
import { Course } from '../Models/course';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit{

  courseService: CourseService = inject(CourseService);
  AllCourses: Course[] = this.courseService.courses;

  searchString!: string;
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(){
    this.AllCourses = this.activeRoute.snapshot.queryParams['search'];
    console.log(this.searchString);
  }
}
