export default function Home() {
  return (
    <main className="w-full h-screen flex items-center justify-center space-x-[136px]">
      <div className="text-xl text-right">
        <h1 className="font-ubuntu text-7xl ">shinjo</h1>
        <div className="pt-4">
          <p>Makes it easier to meet up</p>
          <p>all over the world</p>
        </div>
      </div>
      <div className="items-center justify-center">
        <div className="bg-black-text w-96 rounded-lg pt-[60px] pb-7 px-10">
          <form>
            <div>
              <label htmlFor="username" className="text-white-bg">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="bg-[#EBEBEB] h-10 w-full px-2"
              />
            </div>
            <div className="pt-10">
              <label htmlFor="password" className="text-white-bg">
                Password
              </label>
              <input
                type="text"
                id="password"
                name="password"
                className="bg-[#EBEBEB] h-10 w-full px-2"
              />
            </div>
            <div className="w-full flex justify-end pt-10">
              <input type="submit" value="Login" className="bg-[#FFE9CF] rounded py-1 px-3" />
            </div>
          </form>
          <div className="pt-20">
            <button className="text-[#FFE9CF]">Sign in</button>
          </div>
        </div>
      </div>
    </main>
  );
}
