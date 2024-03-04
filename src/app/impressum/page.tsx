"use client";

import { useState, useEffect } from 'react';

interface ImpressumData {
  name: string;
  address: string;
  contact: string;
  vatId: string;
  register: string;
  registerNumber: string;
}

const getImpressumData = async (): Promise<ImpressumData> => {
  return {
    name: 'Beispiel GmbH',
    address: 'Beispielstraße 123\n12345 Beispielstadt\nDeutschland',
    contact: 'E-Mail: info@beispiel.de\nTelefon: +49 (0) 123 456789',
    vatId: 'DE123456789',
    register: 'Amtsgericht Beispielstadt',
    registerNumber: 'HRB 12345',
  };
};

export default function Impressum() {
  const [data, setData] = useState<ImpressumData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getImpressumData();
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-12">
          Impressum
        </h2>
        <div className="flex flex-wrap -mx-3">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Name</h3>
            <p className="text-gray-600">{data?.name}</p>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Anschrift</h3>
            <p className="text-gray-600">{data?.address}</p>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Kontakt</h3>
            <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: data?.contact || '' }} />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Umsatzsteuer-ID
            </h3>
            <p className="text-gray-600">{data?.vatId}</p>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Handelsregister
            </h3>
            <p className="text-gray-600">
              {data?.register} {data?.registerNumber}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}