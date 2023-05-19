import React from "react";

export function Practice() {
  let isLoggedIn = false;
  return (
    <div>
      `{" "}
      <div>Welcome {isLoggedIn ? <span> User</span> : <span> Guest</span>}</div>
      `
    </div>
  );
}
