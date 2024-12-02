interface DocumentsLayoutProps {
  children: React.ReactNode;
}

const DocumentsLayout = ({ children }: DocumentsLayoutProps) => {
  return (
    <div className="flex flex-col gap-y-4">
      <nav className="w-full bg-slate-400">Documents Navbar</nav>
      {children}
    </div>
  );
}

export default DocumentsLayout;