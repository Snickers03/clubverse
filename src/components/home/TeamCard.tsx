import Image from "next/image";
import { teamMembers } from "@/mocks/content";

const TeamCard = () => {
  return (
    <div>
      <p className='mb-12 mt-16 text-center text-4xl font-bold'>Unser Team</p>
      <div className='grid grid-cols-2 gap-2 px-16'>
        {teamMembers.map((member) => (
          <div className='flex' key={member.id}>
            <Image
              src={member.image}
              alt='Picture of the author'
              width={100}
              height={100}
              className=''
            />
            <div className='px-4 pt-2'>
              <p className='text-xl font-medium text-gray-700'>{member.name}</p>
              <p className=' text-gray-500'>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCard;
