import Image from "next/image";
import { landingFeatures } from "@/mocks/contentData";

const FeatureCard = () => {
  return (
    <div>
      <p className='mb-12 mt-16 text-center text-4xl font-bold'>
        Wie funktioniert ClubVerse?
      </p>
      <div className='mx-auto w-[92%]'>
        {landingFeatures.map((feature) => (
          <div
            key={feature.id}
            className={`flex w-full items-center space-x-8  px-16 ${feature.reverse ? "flex-row-reverse px-8" : ""}`}
          >
            <div className='w-[60%]'>
              <p className='text-medium uppercase text-gray-500'>
                {feature.category}
              </p>
              <p className='pb-3 pt-1 text-3xl font-medium'>{feature.title}</p>
              <p className='text-gray-700'>{feature.description}</p>
            </div>
            <div className={`w-[40%] ${feature.reverse && "pr-8"}`}>
              <Image
                src={feature.imageSrc}
                alt={feature.imageAlt}
                className='opacity-75 grayscale-[50%]'
                width={460}
                height={500}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCard;
