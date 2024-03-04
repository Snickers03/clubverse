import Image from "next/image";

const FeatureCard = () => {
  return (
    <div>
      <p className='mb-12 mt-16 text-center text-4xl font-bold'>
        Wie funktioniert ClubVerse?
      </p>
      <div className='mx-auto flex items-center space-x-8 px-16'>
        <div className='w-1/2'>
          <p className='text-medium uppercase text-gray-500'>Verwaltung</p>
          <p className='pb-3 pt-1 text-3xl font-medium'>Mitglieder verwalten</p>
          <p className='text-gray-700'>
            Verwalte Mitglieder und Aktivitäten zentral auf einer Plattform, um
            deinen Verein effizient und mit minimalem Aufwand zu führen.
          </p>
        </div>
        <Image
          src={"/landing/features/manage.jpg"}
          alt='Picture of the author'
          className='opacity-75 grayscale-[50%]'
          width={460}
          height={500}
        />
      </div>
      <div className='mx-auto flex items-center space-x-8 px-16'>
        <Image
          src={"/landing/features/connect.jpg"}
          alt='Picture of the author'
          className='opacity-75 grayscale-[50%]'
          width={460}
          height={500}
        />
        <div className='w-1/2'>
          <p className='text-medium uppercase text-gray-500'>Spenden</p>
          <p className='pb-3 pt-1 text-3xl font-medium'>
            Spendenaktionen erstellen
          </p>
          <p className='text-gray-700'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            maiores, quidem suscipit reprehenderit quo voluptates, error fugit
            doloremque quaerat corporis asperiores! Dolores consequuntur esse
            iure non cumque dolorum itaque ratione.
          </p>
        </div>
      </div>
      <div className='mx-auto flex items-center space-x-8 px-16'>
        <div className='w-1/2'>
          <p className='text-medium uppercase text-gray-500'>Verwaltung</p>
          <p className='pb-3 pt-1 text-3xl font-medium'>Events planen</p>
          <p className='text-gray-700'>
            Gestalte die Zukunft deines Vereins durch Vernetzung, teile
            Erfahrungen und initiiere Projekte, um die Gemeinschaft zu stärken.
          </p>
        </div>
        <Image
          src={"/landing/features/register.jpg"}
          alt='Picture of the author'
          className='opacity-75 grayscale-[50%]'
          width={460}
          height={500}
        />
      </div>
      {/* <div className='grid grid-cols-3 gap-2'>
        {clubVerseSteps.map((step) => (
          <div key={step.id}>
            <Image
              src={step.image}
              alt='Picture of the author'
              width={500}
              height={500}
              className='h-40 w-full rounded-t-md object-cover'
            />
            <p className='py-3 text-center text-2xl font-bold'>{step.title}</p>
            <p className='px-4 text-justify text-gray-500'>
              {step.description}
            </p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default FeatureCard;
