import { StudentEntity } from '../student/student.entity';

export const convertGqlStudent = (studentEntity: StudentEntity) => {
  return {
    id: studentEntity.id,
    firstName: studentEntity.firstName,
    lastName: studentEntity.lastName,
  };
};
