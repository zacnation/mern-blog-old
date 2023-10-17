export default function LoginPage() {
  return (
    <>
      <h1 className="text-center text-3xl font-semibold pb-5">Log in</h1>
      <form action="" className="max-w-md my-0 mx-auto">
        <input
          type="text"
          className="block w-full border rounded bg-gray-100 mb-1 px-3 py-2"
          placeholder="username"
        />
        <input
          type="password"
          className="block w-full border rounded bg-gray-100 mb-1 px-3 py-2"
          placeholder="password"
        />
        <div className="text-center pt-5">
          <button className="border rounded px-6 py-2 bg-gray-700 text-white">
            Log in
          </button>
        </div>
      </form>
    </>
  );
}
