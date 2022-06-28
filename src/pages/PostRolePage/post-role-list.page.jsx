import { useNavigate } from "react-router-dom";
import CustomAccordion from "../../components/Accordion/custom-accordion.component";
import AddButton from "../../components/Button/add-buttom.component";
import CustomList from "../../components/List/custom-list.component";
import MenuCard from "../../components/MenuCard/menu-card.component";

const PostRoleList = () => {
    let navigate = useNavigate();
  return (
    <>
    <MenuCard  itemRight={<AddButton onClick={() => navigate('new')} />} />
      <CustomAccordion title="CEO">
        <CustomList />
      </CustomAccordion>
      <CustomAccordion title="Programador">
        <CustomList />
      </CustomAccordion>
      <CustomAccordion title="Desginer">
        <CustomList />
      </CustomAccordion>
    </>
  );
};

export default PostRoleList;
