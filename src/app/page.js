import NavComponent from "./components/NavigationBar/NavComponent";

export default function Home() {
  return (
    <>
      <NavComponent />
      <div className="bg-blue-50 dark:bg-black h-[calc(100vh-72px)] flex ">
        <aside className="w-[280px]  border-red-500 border-2"></aside>
        <main className="w-[calc(100%-280px)] border-blue-500 border-2">
        </main>
      </div>
    </>
  );
}
