'use client';

import { ReservationCreateContext } from '@/app/_provider/reservation-create-provider';
import useSteps, { Step } from '@/app/shared/modules/stepper/lib/use-steps';

import CloseButton from '@/app/shared/atoms/close-button';
import Header from '@/app/shared/modules/header';

import StepStudent from '@/app/widget/reservations/ui/step-student';
import StepClassTime from '@/app/widget/reservations/ui/step-class-time';
import StepWorkType from '@/app/widget/reservations/ui/step-work-type';
import useFormFill from '@/app/shared/modules/stepper/lib/use-form-fill';
import Stepper from '@/app/shared/modules/stepper';
import { Reservation } from '@/app/lib-temp/definition';

const ReservationsCreatePage = () => {
  const { form } = useFormFill(ReservationCreateContext);

  const RESERVATION_STEPS: Step<Reservation>[] = [
    {
      order: 0,
      isMount: true,
      data: 'student_id',
      component: <StepStudent context={ReservationCreateContext} />,
    },
    {
      order: 1,
      isMount: false,
      data: 'reservation_date',
      component: <StepClassTime />,
    },
    {
      order: 2,
      isMount: false,
      data: 'work_type',
      component: <StepWorkType />,
    },
  ];
  // const { handlePrev } = useSteps(RESERVATION_STEPS);

  return (
    <div className='pt-3 pb-10 bg-white'>
      <Header className='px-4'>
        <div className='w-full flex gap-1 justify-between items-center'>
          <div className='flex gap-1 items-center'>
            <Header.Title size='medium'>수업 등록</Header.Title>
          </div>
          <CloseButton />
        </div>
      </Header>
      <Stepper steps={RESERVATION_STEPS} form={form} />
    </div>
  );
};

export default ReservationsCreatePage;
