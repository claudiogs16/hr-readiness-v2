import MenuCard from "../../components/MainCard/menu-card.component";
import InputSearch from "../../components/TextField/input-search.component";
import PostRoleListMenu from "./post-role-list-menu";
import EmployeerList from "../../components/EmployeerList/employeer-list.component";
import CustomAccordion from "../../components/Accordion/custom-accordion.component";

const PostRoleList = () => {
  return (
    <>
      <MenuCard itemLeft={<InputSearch />} itemRight={<PostRoleListMenu />} />
      <CustomAccordion title="CEO">
        <EmployeerList />
      </CustomAccordion>
      <CustomAccordion title="Programador">
        <EmployeerList />
      </CustomAccordion>
      <CustomAccordion title="Designer">
        <EmployeerList />
      </CustomAccordion>
    </>
  );
};

export default PostRoleList;
