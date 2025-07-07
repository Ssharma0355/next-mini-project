import Layout from "@/components/Layout";
import axios from "axios";

const UserDetails = ({ user = null }) => {
  if (!user) {
    return (
      <Layout title="User Not Found">
        <div className="container">
          <h1>User not found</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={`User Details - ${user.name}`}>
      <div className="container">
        <h1>User Details</h1>
        <div className="card">
          <div className="card-body">
            <h2>{user.name}</h2>
            <p>
              <strong>ID:</strong> {user.id}
            </p>
            <p>
              <strong>Username:</strong> {user.username}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Phone:</strong> {user.phone}
            </p>
            <p>
              <strong>Website:</strong> {user.website}
            </p>
            <p>
              <strong>Company:</strong> {user.company?.name}
            </p>
            <p>
              <strong>Address:</strong> {user.address?.street},{" "}
              {user.address?.city}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserDetails;

export async function getServerSideProps(context) {
  try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${context.params.id}`
    );
    return {
      props: {
        user: data,
      },
    };
  } catch (error) {
    console.error("Error fetching user:", error);
    return {
      props: {
        user: null,
      },
    };
  }
}
