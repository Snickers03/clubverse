import Image from "next/image";
import { landingFeatures } from "@/mocks/contentData";

const FeatureCard = () => {
  return (
    <div>
      <p className='title mb-12 mt-16 text-center'>
        Wie funktioniert ClubVerse?
      </p>
      <div className='mx-auto w-full md:w-[92%]'>
        {landingFeatures.map((feature) => (
          <div
            key={feature.id}
            className={`flex w-full items-center space-x-8  md:px-8 lg:px-16 ${feature.reverse ? "flex-row-reverse md:px-8" : ""}`}
          >
            <div className='w-[60%]'>
              <p className='md:text-medium text-sm uppercase text-gray-500'>
                {feature.category}
              </p>
              <p className='pb-3 pt-1 text-xl font-medium md:text-3xl'>
                {feature.title}
              </p>
              <p className='content'>{feature.description}</p>
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
