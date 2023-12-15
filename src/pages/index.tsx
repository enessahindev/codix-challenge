import Challenge from "./components/Challenge";

export default function Home() {
  return (
    <main>
      <Challenge />
      <div>
        <p className="flex justify-center items-center">
          <button className="bg-black hover:bg-red-600 text-white h-[34px] rounded-[45px] px-3 transition-all duration-300 mt-10">
            <a href="http://github.com/enessahindev">Github</a>
          </button>
        </p>
      </div>
    </main>
  );
}
