import { headers } from "next/headers";
import { UserAgent } from "@/views/userAgent";

const UserAgentRoot = () => {
  const headersList = headers();
  const userAgent = headersList.get("user-agent") || ""; // Get user agent from server-side headers

  return <UserAgent userAgentData={userAgent} />;
};

export default UserAgentRoot;
