import Link from "next/link";
import { currentUser } from "@clerk/nextjs";

import { Button } from "../ui/button";

const OurMissionCard = async () => {
  const user = await currentUser();

  return (
    <div>
      <p className='mb-12 mt-16 text-center text-4xl font-bold'>
        Unsere Mission
      </p>
      <p className='mx-auto w-1/2 text-gray-600'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
        dignissimos dolore laudantium iusto voluptate adipisci nesciunt omnis
        fugiat, atque doloremque, repellat sunt assumenda a, quia laboriosam
        facere exercitationem tenetur itaque? Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Accusantium dignissimos dolore laudantium
        iusto voluptate adipisci nesciunt omnis fugiat, atque doloremque,
        repellat sunt assumenda a, quia laboriosam facere exercitationem tenetur
        itaque? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Accusantium dignissimos dolore laudantium iusto voluptate adipisci
        nesciunt omnis fugiat, atque doloremque, repellat sunt assumenda a, quia
        laboriosam facere exercitationem tenetur itaque? Lorem ipsum, dolor sit
        amet consectetur adipisicing elit. Accusantium dignissimos dolore
        laudantium iusto voluptate adipisci nesciunt omnis fugiat, atque
        doloremque, repellat sunt assumenda a, quia laboriosam facere
        exercitationem tenetur itaque?
      </p>
      {!user && (
        <Button className='mx-auto my-4 flex w-fit' asChild>
          <Link href={"/sign-in"}>Jetzt deinen Verein registrieren!</Link>
        </Button>
      )}
    </div>
  );
};

export default OurMissionCard;
