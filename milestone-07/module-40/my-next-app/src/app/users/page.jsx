import Link from "next/link";

export const metadata = {
  title: 'All users',
  description: 'all the users information',
}

const UserPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  console.log(users);
  return (
    <div>
      <h3>This is users page</h3>
      <div className="grid grid-cols-3 gap-6">
        {users.map((user) => (
          <div key={user.id}>
            <div className="card bg-primary text-primary-content ">
              <div className="card-body">
                <h2 className="card-title">{user.name}</h2>
                
                <div className="card-actions justify-end">
                  <Link href={`/users/${user.id}`}><button className="btn">Show more</button></Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPage;
