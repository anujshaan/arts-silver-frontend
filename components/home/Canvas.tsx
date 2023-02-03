
const Canvas = () => {
  return (
    <div className="max-w-6xl border-t-2 mx-auto py-20 px-6">
      <h3 className="text-4xl mb-6 font-semibold">Canvas</h3>
      <div className="flex flex-wrap items-center justify-between gap-6">
        <div className="w-56 h-72 border-2">
          <img src="" alt="This is Image" />
        </div>
        <div className="w-56 h-72 border-2">
          <img src="" alt="This is Image" />
        </div>
        <div className="w-56 h-72 border-2">
          <img src="" alt="This is Image" />
        </div>
        <div className="w-56 h-72 border-2">
          <img src="" alt="This is Image" />
        </div>
      </div>
      <div className="w-full text-center mt-8">
        <button className="p-4 px-24 rounded-lg bg-gray-600 hover:bg-black text-white font-bold">more</button>
      </div>
    </div>
  )
}

export default Canvas