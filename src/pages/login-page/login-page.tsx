import { loginAction } from '../../store/user';
import { useRef, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/store/store';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import { AppRoute, Sign } from '../../const';
import { Link } from 'react-router-dom';

type LoginPageProps = {
  sign: typeof Sign;
}

function LoginPage ({sign}: LoginPageProps):JSX.Element {
  const isLogin = true;
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(loginAction({
        email: loginRef.current.value,
        password: passwordRef.current.value
      }));
    }
  };

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 cities. Авторизация</title>
      </Helmet>
      <Header sign={sign} isLogin={isLogin}/>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="" method="post" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" ref={loginRef} type="email" name="email" placeholder="Email" autoComplete='off' required/>
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" ref={passwordRef} type="password" name="password" placeholder="Password" autoComplete='off' required/>
              </div>
              <button className="login__submit form__submit button" type="submit" onClick={() => navigate(AppRoute.Main)}>Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link to={AppRoute.Main} className="locations__item-link">
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
