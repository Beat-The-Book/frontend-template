import SWRTest from "../components/SWRTest";
import ZustandCounter from "../components/ZustandCounter";
import ReduxCounter from "../components/ReduxCounter";
import TailwindTest from "../components/TailwindTest";

export default function Home() {
  return (
    <div>
      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <TailwindTest />
        <SWRTest />
        <ZustandCounter />
        <ReduxCounter />
      </main>
    </div>
  );
}
