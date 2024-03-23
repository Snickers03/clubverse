import { impressumData } from "@/mocks/legalData";

export default function Impressum() {
  return (
    <div>
      <h2 className='pb-6 text-center text-4xl font-semibold text-gray-800'>
        Impressum
      </h2>
      <div>
        <div className='space-y-3'>
          <h3 className='text-2xl font-semibold text-gray-800'>
            Angaben gemäß § 5 TMG
          </h3>
          <div>
            <p className='text-gray-600'>{impressumData.name}</p>
            <p className='text-gray-600'>{impressumData.address}</p>
          </div>
        </div>

        <div className='space-y-2 pt-3'>
          <h3 className='text-2xl font-semibold text-gray-800'>Kontakt</h3>
          <p className='text-gray-600'>{impressumData.contact}</p>
        </div>

        <div className='space-y-2 pt-3'>
          <h3 className='text-2xl font-semibold text-gray-800'>
            Umsatzsteuer-ID
          </h3>
          <p className='text-gray-600'>{impressumData.vatId}</p>
        </div>

        <div className='w-full space-y-2 pt-3'>
          <h3 className='text-2xl font-semibold text-gray-800'>
            Haftungshinweis
          </h3>
          <p className='text-gray-600'>{impressumData.information}</p>
        </div>
      </div>
    </div>
  );
}
