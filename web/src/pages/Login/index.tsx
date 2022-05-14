import { Navigate } from 'react-router-dom';
import { useAuthGoogle } from '../../hooks/useAuthGoogle';
import googleSVG from '../../assets/google.svg';

export const Login = () => {
  const { signInGoogle, signed } = useAuthGoogle();

  async function handleLoginFromGoogle() {
    await signInGoogle();
  }

  if (!signed) {
    return (
      <div className="w-full h-full flex items-center justify-center flex-wrap absolute px-4 sm:px-0">
        <div className="w-80 h-80  sm:w-96 sm:h-96 bg-brand-500 rounded-md flex items-center justify-center">
          <button
            onClick={handleLoginFromGoogle}
            className="flex gap-3 bg-white px-4 sm:px-12 py-2 rounded-md shadow-[0px 0px 2.41919px rgba(0, 0, 0, 0.084), 0px 2.41919px 2.41919px rgba(0, 0, 0, 0.168] "
          >
            <img
              src={googleSVG}
              alt="Google"
              className="w-6 h-6 sm:w-8 sm:h-8"
            />
            <span className="text-center text-brand-500 font-bold text-lg sm:text-xl">
              Entrar com o Google
            </span>
          </button>
        </div>
      </div>
    );
  } else {
    return <Navigate to="/" />;
  }
};
