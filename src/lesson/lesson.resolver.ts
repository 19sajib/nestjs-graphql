import { Query, Resolver } from '@nestjs/graphql';
import { LessonType } from './lesson.type';

@Resolver((of) => LessonType)
export class LessonResolver {
  @Query((returns) => LessonType)
  lesson() {
    return {
      id: 'as12233',
      name: 'CS Class',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    };
  }
}
