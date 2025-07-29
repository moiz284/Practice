// import UserAnalytics from "./@users/page";
// import Revenue from "./@revenue/page";
// import Notifications from "./@notifications/page";
import Revenue from "./@revenue/page";

export default function RootLayout({
  children,
  users,
  revenue,
  notifications,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <div>
      <div> {children} </div>
      <div>{users}</div>
      <div> {revenue} </div>
      <div> {notifications} </div>
    </div>
  );
}
