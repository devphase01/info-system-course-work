const GetStartedPage = () => {
  return (
    <div className="h-[calc(100vh-80px)] relative overflow-hidden bg-anti-flash">
      <img src="/assets/hero.png" alt="hero-section" className="absolute w-[550px] bottom-[5%] left-[5%] z-0 opacity-90" />

      <div className="text-center absolute left-1/2 top-[calc(50%-80px)] -translate-x-1/2 -translate-y-1/2 z-[5] bg-dark-liver/80 rounded-[16px] p-[30px] w-full max-w-[900px]">
        <h1 className="text-[72px] tracking-[-1px] font-roboto-500 text-white w-full mb-[16px]">Find Solutions That work</h1>
        <p className="text-white mb-[24px] text-[18px]">
          Our service is designed to help you solve your business problems with effective strategies created by our expert managers. Approve or reject the strategies based on your needs and preferences.
        </p>

        <button className="px-[18px] py-[12px] w-[300px] text-[18px] font-roboto-500 text-white bg-stale-blue rounded-[4px]">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default GetStartedPage;