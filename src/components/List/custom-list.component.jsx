import Box from '@mui/material/Box';
import List from '@mui/material/List';
import CustomListItem from './custom-list-item';
import PersonIcon from '@mui/icons-material/Person';



const CustomList = ({title}) => {

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          <CustomListItem description="Item 1" icon={<PersonIcon />} />
          <CustomListItem description="Item 2" icon={<PersonIcon />} />
          <CustomListItem description="Item 3" icon={<PersonIcon />} />
          <CustomListItem description="Item 4" icon={<PersonIcon />} />
          <CustomListItem description="Item 5" icon={<PersonIcon />} />
        </List>
      </nav>
      
    </Box>
  );
};

export default CustomList;
