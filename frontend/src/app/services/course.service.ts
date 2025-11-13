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

  fetchById(courseId: string) {
    return this.http.get<ICourse>(`${this.baseURL}/${courseId}`);
  }

  create(course: ICourse) {}

  deleteById(courseId: string) {
    return this.http.delete(`${this.baseURL}/${courseId}`);
  }

  update(course: ICourse) {}
}
