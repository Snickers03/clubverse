import CreateOrganisation from "./CreateOrganisation";

const JoinOrganisation = () => {
  return (
    <div>
      <div className='mt-4 py-4 text-slate-500'>
        <p>Du bist noch in keiner Organisation.</p>
        <p>Erstelle eine Organisation oder trete einer bei.</p>
      </div>

      <div>
        <p className='mt-4 text-2xl font-medium'>Organisation Suchen</p>
        {/* // TODO Manu */}
        <p className='py-3'>---</p>
      </div>

      <p className='my-6 font-medium'>ODER</p>

      <CreateOrganisation />
    </div>
  );
};

export default JoinOrganisation;
