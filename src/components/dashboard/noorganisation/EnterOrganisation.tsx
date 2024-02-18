import CreateOrganisation from "./CreateOrganisation";
import SearchOrganisation from "./SearchOrganisation";

const EnterOrganisation = () => {
  return (
    <div>
      <div className='mt-4 py-4 text-center text-slate-500'>
        <p>Du bist noch in keiner Organisation.</p>
        <p>Erstelle eine Organisation oder trete einer bei.</p>
      </div>
      <SearchOrganisation />
      <p className='my-6 text-center font-medium'>ODER</p>
      <CreateOrganisation />
    </div>
  );
};

export default EnterOrganisation;
