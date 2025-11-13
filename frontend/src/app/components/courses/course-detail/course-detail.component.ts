import { Component, OnDestroy, OnInit } from '@angular/core';
import { ɵNgNoValidate } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CourseService } from '../../../services/course.service';
import { ICourse } from '../../../model/course-model';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css',
})
export class CourseDetailComponent implements OnInit, OnDestroy {
  unsubParams$!: Subscription;
  course!: ICourse;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    // snapshot : Access of URL snapshot
    // const courseId = this.route.snapshot.paramMap.get('courseId');
    // console.log('Course ID : ', courseId);

    // Observable
    // this.unsubParams$ = this.route.params.subscribe((params) => {
    //   this.courseService
    //     .fetchById(params['courseId'])
    //     .subscribe((course) => (this.course = course));
    // });

    this.route.data.subscribe((data) => (this.course = data['course']));
  }

  ngOnDestroy(): void {
    // this.unsubParams$.unsubscribe();
  }
}
