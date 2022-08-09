import { createContext, useState } from "react";

export const PostRoleContext = createContext();

const inicialState = {
  id: "",
  postRole: "",
  description: "",
};

export function PostRoleProvider({ children }) {
  const [postRole, setPostRole] = useState(inicialState);
  const [postRoles, setPostRoles] = useState([]);

  return (
    <PostRoleContext.Provider value={{ postRole, postRoles, setPostRoles, setPostRole }}>
      {children}
    </PostRoleContext.Provider>
  );
}
