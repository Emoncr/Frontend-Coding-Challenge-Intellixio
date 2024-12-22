"use client";

import { BackToHome } from "@/components/backToHome/backToHome";

type UserAgentProps = {
  userAgentData: string;
};

export const UserAgent = ({ userAgentData }: UserAgentProps) => {

  return (
    <div>
      <BackToHome />

      {/* showing user agent from server side headers */}
      {userAgentData && (
        <div className="flex font-mono font-semibold text-sm">
          <div className="border p-2">UserAgent</div>

          <div className="border p-2">{userAgentData}</div>
        </div>
      )}

      {!userAgentData && <div>No user agent</div>}
    </div>
  ); 
};

export default UserAgent;
