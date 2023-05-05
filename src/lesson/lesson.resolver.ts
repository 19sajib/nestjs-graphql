import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { LessonType } from './lesson.type';
import { LessonService } from './lesson.service';
import { CreateLessonInput } from './lesson.input';
import { AssignStudnetsToLessonInput } from './assign-studnets-to-lessson-input';
import { StudentService } from 'src/student/student.service';
import { Lesson } from './lesson.entity';

@Resolver((of) => LessonType)
export class LessonResolver {
  constructor(
    private lessonService: LessonService,
    private studentService: StudentService,
  ) {}

  @Query((returns) => LessonType)
  lesson(@Args('id') id: string) {
    return this.lessonService.getLesson(id);
  }

  @Query((returns) => [LessonType])
  lessons() {
    return this.lessonService.getLessons();
  }

  @Mutation((returns) => LessonType)
  createLesson(
    @Args('createLessonInput') createLessonInput: CreateLessonInput,
  ) {
    return this.lessonService.createLesson(createLessonInput);
  }

  @Mutation((retuns) => LessonType)
  assingStudentsToLesson(
    @Args('assignStudnetsToLessonInput')
    assignStudnetsToLessonInput: AssignStudnetsToLessonInput,
  ) {
    const { lessonId, studentIds } = assignStudnetsToLessonInput;
    return this.lessonService.assignStudentsToLesson(lessonId, studentIds);
  }

  @ResolveField()
  async students(@Parent() lessson: Lesson) {
    return this.studentService.getManyStudents(lessson.students);
  }
}
