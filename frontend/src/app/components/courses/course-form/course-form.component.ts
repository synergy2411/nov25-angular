import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICourse } from '../../../model/course-model';
import { CourseService } from '../../../services/course.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.css',
})
export class CourseFormComponent {
  course = {
    title: '',
    duration: 0,
    logo: '',
  };

  constructor(private courseService: CourseService, public router: Router) {}

  onSubmit() {
    console.log(this.course);
    this.courseService
      .create({
        title: this.course.title,
        duration: this.course.duration,
        logo: this.course.logo,
        id: '',
      })
      .subscribe((createdCourse) => {
        this.router.navigate(['/courses'], { queryParams: { isAdded: true } });
      });
  }
}
