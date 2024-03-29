import { Children, PropsWithChildren, ReactElement, ReactNode } from 'react';
import RemainingClassCount from './RemainingClassCount';

export function isValidElement(object: any): object is ReactElement {
  return (
    typeof object === 'object' &&
    object !== null &&
    'type' in object &&
    'props' in object
  );
}

const RemainingClassCountType = (<RemainingClassCount />).type;

function getRemainingClassCount(children: ReactNode) {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter(
      (child) => isValidElement(child) && child.type === RemainingClassCountType
    )
    .slice(0, 2);
}

function getStudentInfo(children: ReactNode) {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter(
      (child) => isValidElement(child) && child.type !== RemainingClassCountType
    )
    .slice(0, 2);
}

const StudentLayout = ({ children }: PropsWithChildren) => {
  const remainingClassCount = getRemainingClassCount(children);
  const studentInfo = getStudentInfo(children);
  return (
    <div className='w-full rounded-lg flex justify-between items-center'>
      <div className='flex items-center gap-2 '>{studentInfo}</div>
      {remainingClassCount && <div>{remainingClassCount}</div>}
    </div>
  );
};

export default StudentLayout;
