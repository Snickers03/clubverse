import CreateOrganisation from "./CreateOrganisation";
import SearchOrganisation from "./SearchOrganisation";

const EnterOrganisation = () => {
  return (
    <div className='mx-auto mt-12 w-2/5'>
      <SearchOrganisation />
      <p className='mb-2 mt-60 font-medium'>Oder</p>
      <CreateOrganisation />
    </div>
  );
};

export default EnterOrganisation;
