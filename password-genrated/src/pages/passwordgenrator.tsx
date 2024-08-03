import { useCallback, useState, useEffect, useRef } from "react";

const Passwordgenrator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState<number>(0);
  const [chractor, setChractor] = useState(false);
  const [number, setNumber] = useState(false);
  const passwrodRef = useRef(null);
  const passwordGenrator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (chractor) str += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    for (let i = 0; i < length; i++) {
      let passGenrater = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(passGenrater);
    }
    setPassword(pass);
  }, [number, chractor, length, setPassword]);

  useEffect(() => {
    passwordGenrator();
  }, [number, chractor, length, setPassword]);

  const copyPassword = useCallback(() => {
    passwrodRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div>
      <div className="flex flex-row justify-center items-center bg-slate-300 w-svw h-svh">
        <div className="pass_container w-2/4 rounded-2xl p-10  h-auto bg-orange-400">
          <h1 className="text-white text-center mb-5">Password Genrator</h1>
          <div className="w-full h-10 flex px-4 relative">
            <input
              ref={passwrodRef}
              type="text"
              value={password}
              readOnly
              className="text w-full h-full rounded-2xl pl-4"
            />
            <button
              onClick={() => copyPassword()}
              className="w-16 h-full text-white bg-blue-600 absolute right-4 rounded-2xl"
            >
              Copy
            </button>
          </div>
          <div className="flex flex-row mt-5 w-full justify-between">
            <div className="button__container flex flex-row">
              <input
                type="range"
                name=""
                id=""
                min={6}
                max={100}
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
                className="range__button mr-2"
              />
              <label htmlFor="#" className="textStyle">
                {" "}
                : Length {length}
              </label>
            </div>
            <div className="number__container flex flex-row">
              <input
                type="checkbox"
                defaultChecked={number}
                onChange={() => setNumber(!number)}
                name=""
                className="mr-3"
                id=""
              />
              <label htmlFor="#" className="textStyle">
                {" "}
                : Number
              </label>
            </div>
            <div className="number__container flex flex-row">
              <input
                type="checkbox"
                name=""
                defaultChecked={chractor}
                onChange={() => setChractor(!chractor)}
                className="mr-3"
                id=""
              />
              <label htmlFor="#" className="textStyle">
                {" "}
                : Chrector
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Passwordgenrator;
