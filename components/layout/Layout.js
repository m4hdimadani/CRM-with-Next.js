import Link from "next/link";

function Layout({ children }) {
  return (
    <>
      <header className="header">
        <h2>Mahdi CRM</h2>
        <Link href="/add-customer">Add Customer</Link>
      </header>
      <div className="main">{children}</div>
      <footer className="footer">
        <a href="#" target="_blank" rel="noreferrer">
          M4hdimadani
        </a>{" "}
        Next.js course | CRM Project &copy;
      </footer>
    </>
  );
}

export default Layout;
