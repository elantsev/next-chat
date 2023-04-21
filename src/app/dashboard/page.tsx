import Button from '@/components/ui/Button';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';

interface PageProps {}

const Page = async ({}) => {
  const session = await getServerSession(authOptions);

  return (
    <>
      {JSON.stringify(session)}
      <Button>hello</Button>
    </>
  );
};

export default Page;
