import NavComponent from "./components/NavigationBar/NavComponent";
import SideBarComponent from "./components/SideBarComponent/SideBarComponent";
export default function Home() {
  return (
    <>
      <NavComponent />
      <div className="md:h-[calc(100vh-72px)] flex p-2 ">
        <aside className="md:w-[280px] bg-white dark:bg-black border-r-2 border-r-gray-100 dark:border-r-gray-400 border-solid px-2 hidden md:block">
          <SideBarComponent />
        </aside>
        <main className="w-full md:w-[calc(100%-280px)] bg-white dark:bg-black">
          <div className="h-full rounded-[10px] p-5 "></div>
        </main>
      </div>
    </>
  );
}
