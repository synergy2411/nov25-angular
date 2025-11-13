import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICourse } from '../model/course-model';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private baseURL = 'http://localhost:3000/courses';

  constructor(private http: HttpClient) {}

  fetchAll() {
    return this.http.get<ICourse[]>(this.baseURL);
  }

  fetchById(courseId: string) {}

  create(course: ICourse) {}

  deleteById(courseId: string) {}

  update(course: ICourse) {}
}
