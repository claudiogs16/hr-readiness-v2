import CustomAccordion from "../../components/Accordion/custom-accordion.component";
import CustomList from "../../components/List/custom-list.component";

const RoleList = () => {
  return (
    <>
      <CustomAccordion title="Super Administrador">
        <CustomList />
      </CustomAccordion>
      <CustomAccordion title="Administradores">
        <CustomList />
      </CustomAccordion>
      <CustomAccordion title="Colaboradores">
        <CustomList />
      </CustomAccordion>
    </>
  );
};

export default RoleList;
