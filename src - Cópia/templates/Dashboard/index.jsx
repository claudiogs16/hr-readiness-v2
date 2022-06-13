import AppMenuBar from "./AppMenuBar";

const Dashboard = (props) => {
  return (
    <header>
      <AppMenuBar />
      <section>{props.children}</section>
    </header>
  );
};

export default Dashboard;
