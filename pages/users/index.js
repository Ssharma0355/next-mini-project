import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";

const Index = ({ users = [] }) => {
  const router = useRouter();

  return (
    <Layout title="Users Details">
      <div className="container">
        <h1>All Users Details</h1>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Username</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => router.push(`/users/${user.id}`)}
                  >
                    Show Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Index;

export async function getStaticProps() {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return {
      props: {
        users: data,
      },
      revalidate: 60, // ISR: Regenerate page every 60 seconds
    };
  } catch (error) {
    console.error("Error fetching users:", error);
    return {
      props: {
        users: [],
      },
    };
  }
}
