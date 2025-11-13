import { Component, DoCheck, OnInit } from '@angular/core';
import { ICourse } from '../../model/course-model';
import { CourseService } from '../../services/course.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent implements OnInit {
  courseCollection!: ICourse[];

  constructor(
    private router: Router,
    private courseService: CourseService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.fetchAllCourses();
    this.route.queryParams.subscribe((query) => {
      if (query['courseId']) {
        this.fetchAllCourses();
      }
    });
  }

  private fetchAllCourses() {
    this.courseService
      .fetchAll()
      .subscribe((allCourses) => (this.courseCollection = allCourses));
  }

  onCourseSelected(courseId: string) {
    this.router.navigateByUrl(`/courses/${courseId}`);
  }
}
