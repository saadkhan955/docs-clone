import { Editor } from "./editor";
import { Toolbar } from "./toolbar";

const DocumentIdPage = () => {
  return (
    <div className="min-h-screen bg-[#fafbfd]">
      <Toolbar />
      <Editor />
    </div>
  );
}

export default DocumentIdPage;