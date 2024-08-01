'use client';

import Title from '@/app/shared/atoms/Title';
import WorkshopOnboardingType from '@/app/widget/workshops/ui/workshop-onboarding-type';
import useWorkshopRegistered from '../../../widget/workshops/api/useWorkshopRegistered';
import WorkshopList from '@/app/widget/workshops/ui/workshop-list';
import RejectionNotice from '@/app/widget/workshops/ui/workshop-rejection-notice';
import Header from '@/app/shared/modules/header';

const WorkshopOnboardingPage = () => {
  const { data } = useWorkshopRegistered();

  return (
    <div className='px-4'>
      <Header className='pt-3 pb-7'>
        <div className='w-full flex gap-1 justify-between items-center'>
          <Header.Title size='medium'>공방 선택</Header.Title>
        </div>
      </Header>
      {data && <RejectionNotice workshopList={data.rejection} />}
      <Title size='large' classNames='mt-4'>
        이용할 공방을 선택해주세요
      </Title>
      {data && <WorkshopList workshopList={data.approval} status='approval' />}
      {data && <WorkshopList workshopList={data.pending} status='pending' />}

      <WorkshopOnboardingType />
    </div>
  );
};

export default WorkshopOnboardingPage;
