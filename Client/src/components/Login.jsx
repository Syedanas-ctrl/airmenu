import { useState } from "react";
import { selectCurrUser, setCurrUser } from "./slices/currUserSlice";
import { useSelector, useDispatch } from "react-redux";
import { addAccount } from "./slices/AccountsSlice";
const Login = () => {
  const dispatch = useDispatch();
  const [passengerSeat, setPassengerSeat] = useState(0);
  const [passengerPwd, setPassengerPwd] = useState("");
  const [wrongPwd, setWrongPwd] = useState(false);
  const currUser = useSelector(selectCurrUser);
  const handleAuth = () => {
    if (passengerPwd === "pass" && !isNaN(passengerSeat) && passengerSeat > 0) {
      setWrongPwd(false);
      dispatch(setCurrUser(passengerSeat));
      dispatch(addAccount(passengerSeat));
    } else {
      setWrongPwd(true);
    }
  };

  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="Pattern"
            src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </aside>

        <main
          aria-label="Main"
          className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
        >
          <div className="max-w-xl lg:max-w-3xl">
            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            Anas Airlines
            </h1>

            <p className="mt-4 leading-relaxed text-gray-500">
              Imagine sitting in Anas airlines and your seat number is 21
              (password: pass)
            </p>
            {wrongPwd && (
              <p className="mt-4 leading-relaxed text-red-500">
                Invalid seat no or Password
              </p>
            )}

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 grid grid-cols-6 gap-6"
            >
              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">
                  Seat no
                </label>

                <input
                  type="number"
                  value={passengerSeat}
                  onChange={(e) => setPassengerSeat(e.target.value)}
                  className="mt-1 w-full rounded-md border-gray-600 border-2 px-2 py-2 focus:outline-none bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>

                <input
                  type="password"
                  value={passengerPwd}
                  placeholder="please enter 'pass' as password"
                  onChange={(e) => setPassengerPwd(e.target.value)}
                  className="mt-1 w-full rounded-md border-gray-600 font-bold  border-2 px-2 py-2 focus:outline-none  bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                  type="submit"
                  onClick={handleAuth}
                  className="inline-block shrink-0 transition py-2 px-9 bg-[#434586] text-white hover:bg-white border-2 border-[#434586] hover:text-[#434586] font-medium focus:outline-none focus:ring active:text-blue-500"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};
export default Login;
