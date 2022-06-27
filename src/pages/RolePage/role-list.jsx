import CustomAccordion from "../../components/Accordion/custom-accordion.component";
import EmployeerList from "../../components/EmployeerList/employeer-list.component";

const RoleList = () => {
  return (
    <>
      <CustomAccordion title="Super Administrador">
        <EmployeerList />
      </CustomAccordion>
      <CustomAccordion title="Administradores">
        <EmployeerList />
      </CustomAccordion>
      <CustomAccordion title="Colaboradores">
        <EmployeerList />
      </CustomAccordion>
    </>
  );
};

export default RoleList;
