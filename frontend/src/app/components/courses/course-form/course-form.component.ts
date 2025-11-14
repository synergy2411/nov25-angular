import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICourse } from '../../../model/course-model';
import { CourseService } from '../../../services/course.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.css',
})
export class CourseFormComponent implements OnInit {
  course = {
    title: '',
    duration: 0,
    logo: '',
  };

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => (this.course = data['course']));
  }

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
