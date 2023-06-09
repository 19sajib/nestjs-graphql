import { Field, ID, InputType } from '@nestjs/graphql';
import { IsDateString, MinLength } from 'class-validator';
import { IsUUID } from 'class-validator'

@InputType()
export class CreateLessonInput {
  @MinLength(3)
  @Field()
  name: string;

  @IsDateString()
  @Field()
  startDate: string;

  @IsDateString()
  @Field()
  endDate: string;

  @IsUUID('4', { each: true })
  @Field(() => [ID], { defaultValue: [] })
  students: string[]
}
