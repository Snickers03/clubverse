import CreateOrganisation from "./CreateOrganisation";

const EnterOrganisation = () => {
  return (
    <div>
      <div className='mt-4 py-4 text-center text-slate-500'>
        <p>Du bist noch in keiner Organisation.</p>
        <p>Erstelle eine Organisation oder trete einer bei.</p>
      </div>

      <div>
        <p className='mt-4 text-2xl font-medium'>Organisation Suchen</p>
        {/* // TODO Manu */}
        <p className='py-3'>---</p>
      </div>

      <p className='my-6 text-center font-medium'>ODER</p>

      <CreateOrganisation />
    </div>
  );
};

export default EnterOrganisation;
