import Link from "next/link";

const DashboardLayoutPage = ({ children }) => {
  return (
    <div>
      <p className="font-semibold">common parts of the dashboard </p>
      <div className="flex-col justify-start">
        <main>{children}</main>
      </div>
      <div>
        <ul>
            <li><Link href='/dashboard'>Dashboard</Link></li>
            <li><Link href="/dashboard/profile">profile</Link></li>
            <li><Link href="/dashboard/revenue">revenue</Link></li>
            
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayoutPage;
