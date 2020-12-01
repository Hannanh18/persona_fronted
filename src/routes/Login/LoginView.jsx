import React from 'react';
import s from './Login.css';

class LoginView extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>登录</h1>
          <form method="post">
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="usernameOrEmail">
                用户名:
                <input
                  className={s.input}
                  id="username"
                  type="text"
                  name="username"
                  autoFocus // eslint-disable-line jsx-a11y/no-autofocus
                />
              </label>
            </div>
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="password">
                密码:
                <input
                  className={s.input}
                  id="password"
                  type="password"
                  name="password"
                />
              </label>
            </div>
            <div className={s.formGroup}>
              <button className={s.button} type="submit">
                登录
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
};

export default LoginView;
