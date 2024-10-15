import { Student } from '../entities/Student.ts';
import { BaseService } from './base/baseService.ts';

export class StudentService extends BaseService<Student> {

    constructor(repository) {
        super(repository);
    }

}
