"use client";

import { impressumData } from "@/mocks/impressum";

export default function Impressum() {
  return (
    <div className='py-6'>
      <div className='container mx-auto px-6'>
        <h2 className='mb-12 text-center text-4xl font-semibold text-gray-800'>
          Impressum
        </h2>
        <div className='mx-3'>
          <div className='mb-6 w-full px-3 md:mb-6 md:w-1/2'>
            <h3 className='mb-3 text-2xl font-semibold text-gray-800'>Angaben gemäß § 5 TMG</h3>
            <p className='text-gray-600'>{impressumData.name}</p>
            <p className='text-gray-600'>{impressumData.address}</p>
          </div>
          <div className='mb-6 w-full px-3 md:mb-6'>
            <h3 className='mb-3 text-2xl font-semibold text-gray-800'>
              Kontakt
            </h3>
            <p className='text-gray-600'>{impressumData.contact}</p>
          </div>
          <div className='mb-6 w-full px-3 md:mb-6'>
            <h3 className='mb-3 text-2xl font-semibold text-gray-800'>
              Umsatzsteuer-ID
            </h3>
            <p className='text-gray-600'>{impressumData.vatId}</p>
          </div>
          <div className='mb-6 w-full px-3 md:mb-6'>
            <h3 className='mb-3 text-2xl font-semibold text-gray-800'>
              Haftungshinweis
            </h3>
            <p className='text-gray-600'>
               {impressumData.information}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
