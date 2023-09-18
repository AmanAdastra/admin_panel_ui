import NavComponent from "./components/NavigationBar/NavComponent";
import SideBarComponent from "./components/SideBarComponent/SideBarComponent";
export default function Home() {
  return (
    <>
      <NavComponent />
      <div className="h-[calc(100vh-72px)] flex ">
        <aside className="w-[280px] bg-white dark:bg-black ">
            <SideBarComponent/>
        </aside>
        <main className="w-[calc(100%-280px)] bg-white dark:bg-black"> </main>
      </div>
    </>
  );
}
