"use client";

import { impressumData } from "@/mocks/impressum";

export default function Impressum() {
  return (
    <div className='bg-gray-100 py-12'>
      <div className='container mx-auto px-6'>
        <h2 className='mb-12 text-center text-4xl font-semibold text-gray-800'>
          Impressum
        </h2>
        <div className='mx-3 flex flex-wrap'>
          <div className='mb-6 w-full px-3 md:mb-6 md:w-1/2'>
            <h3 className='mb-3 text-2xl font-semibold text-gray-800'>Name</h3>
            <p className='text-gray-600'>{impressumData.name}</p>
          </div>
          <div className='mb-6 w-full px-3 md:mb-6 md:w-1/2'>
            <h3 className='mb-3 text-2xl font-semibold text-gray-800'>
              Anschrift
            </h3>
            <p className='text-gray-600'>{impressumData.address}</p>
          </div>
          <div className='mb-6 w-full px-3 md:mb-6 md:w-1/2'>
            <h3 className='mb-3 text-2xl font-semibold text-gray-800'>
              Kontakt
            </h3>
            <p className='text-gray-600'>{impressumData.contact}</p>
          </div>
          <div className='mb-6 w-full px-3 md:mb-6 md:w-1/2'>
            <h3 className='mb-3 text-2xl font-semibold text-gray-800'>
              Umsatzsteuer-ID
            </h3>
            <p className='text-gray-600'>{impressumData.vatId}</p>
          </div>
          <div className='mb-6 w-full px-3 md:mb-6 md:w-1/2'>
            <h3 className='mb-3 text-2xl font-semibold text-gray-800'>
              Handelsregister
            </h3>
            <p className='text-gray-600'>
              {impressumData.register} {impressumData.registerNumber}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
