import { Navigate, Route, Routes } from "react-router-dom";
import { Container } from "../components/Sidebar/style";
import sidebar from "../utils/sidebar";
import { Sidebar } from "../components/Sidebar";

export function Root() {
  return (
    <Container>
      <Routes>
        <Route element={<Sidebar />}>
          {sidebar.map((parent) => {
            console.log(parent);
            const ElementParent = parent.element;
            if (parent?.children) {
              return parent.children.map((child) => {
                const ElementChild = child.element;
                return (
                  <Route
                    key={child.id}
                    path={child.path}
                    element={<ElementChild />}
                  />
                );
              });
            } else
              return (
                <Route
                  key={parent.id}
                  path={parent.path}
                  element={<ElementParent />}
                />
              );
          })}
        </Route>
        <Route path="/" element={<Navigate to={"/analitika"} />} />
        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
    </Container>
  );
}

export default Root;
