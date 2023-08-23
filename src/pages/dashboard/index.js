import DashboardContainer from "@/containers/templates/Dashboard";
import { getAllDocs } from "@/utils/todotasksUtil";

const MyApp = ({ todos }) => {
  return <DashboardContainer todos={todos} />;
};

export async function getServerSideProps() {
  const todos = await getAllDocs(); // Fetch todos from your API
  console.log("todos", todos);
  return {
    props: {
      todos,
    },
  };
}

export default MyApp;
