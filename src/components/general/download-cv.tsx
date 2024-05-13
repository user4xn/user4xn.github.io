'use client';

import Button from '@/components/general/button';

const DownloadCV = () => {
  return (
    <Button onClick={() => window?.open('/files/CV-WILDAN KURNIA CANDRA.pdf', '_blank')}>
      Download CV
    </Button>
  );
};

export default DownloadCV;
