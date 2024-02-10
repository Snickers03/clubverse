import CreateOrganisation from "./CreateOrganisation";
import SearchOrganisation from "./SearchOrganisation";

const JoinOrganisation = () => {
  return (
    <div>
      <div className='mt-4 py-4 text-slate-500'>
        <p>Du bist noch in keiner Organisation.</p>
        <p>Erstelle eine Organisation oder trete einer bei.</p>
      </div>

      <div>
        <SearchOrganisation />
      </div>

      <p className='my-6 font-medium'>ODER</p>

      <CreateOrganisation />
    </div>
  );
};

export default JoinOrganisation;
