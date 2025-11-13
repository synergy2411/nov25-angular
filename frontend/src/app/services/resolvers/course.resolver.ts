import { ResolveFn } from '@angular/router';
import { ICourse } from '../../model/course-model';
import { inject } from '@angular/core';
import { CourseService } from '../course.service';

export const courseResolver: ResolveFn<ICourse> = (route, state) => {
  const courseService = inject(CourseService);

  const courseId = route.paramMap.get('courseId');
  return courseService.fetchById(courseId!);
};

// ng g resolver services/resolvers/course
