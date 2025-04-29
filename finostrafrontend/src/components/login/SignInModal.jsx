import React, { useState } from "react";
import styles from "./SignInModal.module.css";
import CloseIcon from "../../assets/Photo/Union.png";
import EyeOpenIcon from "../../assets/Photo/eyeoff.png";
import EyeClosedIcon from "../../assets/Photo/eyeoff.png";

const checkPhoneExists = (phone) =>
  new Promise((resolve) => setTimeout(() => resolve(phone.endsWith("0")), 500));
const loginWithPassword = (phone, password) =>
  new Promise((resolve, reject) =>
    setTimeout(
      () =>
        password === "1234"
          ? resolve(true)
          : reject(new Error("Невірний пароль")),
      500
    )
  );
const registerUser = (phone, email, password) =>
  new Promise((resolve) =>
    setTimeout(() => {
      console.log(`Зареєстровано ${phone}, email=${email}`);
      resolve(true);
    }, 500)
  );

function SignInModal({ onClose }) {
  const [step, setStep] = useState("enterPhone");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const stop = (e) => e.stopPropagation();

  // Валідація
  const isValidPhone = (value) => /^\d{9,10}$/.test(value);
  const isValidEmail = (value) =>
    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value);
  const passwordRules = {
    length: /^(?=.{6,15}$).+$/,
    letter: /[A-Za-z]/,
    digits: /(.*\d){2,}/,
    noSpecial: /^[^@#$^:;\\/”)?*]+$/,
  };
  const isValidPassword = (value) =>
    passwordRules.length.test(value) &&
    passwordRules.letter.test(value) &&
    passwordRules.digits.test(value) &&
    passwordRules.noSpecial.test(value);

  // Обробники
  const handlePhoneChange = (e) => {
    const digits = e.target.value.replace(/\D/g, "");
    setPhone(digits);
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handlePhoneSubmit = async () => {
    setError("");
    if (!phone) return setError("Вкажіть номер телефону");
    if (!isValidPhone(phone))
      return setError(
        "Номер телефону повинен містити тільки цифри (9-10 символів)"
      );
    if (!agreed) return setError("Підтвердіть згоду");

    setLoading(true);
    try {
      const exists = await checkPhoneExists(phone);
      setStep(exists ? "login" : "enterEmail");
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    setError("");
    if (!password) return setError("Введіть пароль");
    setLoading(true);
    try {
      await loginWithPassword(phone, password);
      alert("Успішний вхід");
      onClose();
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEmailSubmit = () => {
    setError("");
    if (!email) return setError("Вкажіть email");
    if (!isValidEmail(email))
      return setError("Некоректний email. Використовуйте лише латиницю та @");
    setStep("setPassword");
  };

  const handleRegister = async () => {
    setError("");
    if (!password || !confirmPassword)
      return setError("Заповніть усі поля пароля");
    if (password !== confirmPassword) return setError("Паролі не співпадають");
    if (!isValidPassword(password))
      return setError(
        "Пароль має бути 6-15 символів, містити мінімум 1 букву та 2 цифри, без спеціальних символів"
      );
    if (!agreed) return setError("Підтвердіть згоду");

    setLoading(true);
    try {
      await registerUser(phone, email, password);
      alert("Реєстрація успішна");
      onClose();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      {step === "enterEmail" ? (
        <div className={styles.frame900} onClick={stop}>
          <div className={styles.frame900Header}>
            <button className={styles.closeButton} onClick={onClose}>
              <img src={CloseIcon} alt="Закрити" className={styles.icon} />
            </button>
          </div>
          <div className={styles.frame897}>
            <h2 className={styles.registerTitle}>Реєстрація</h2>
            <p className={styles.registerSubtitle}>
              Для завершення реєстрації введіть свій Email
            </p>
          </div>
          <div className={styles.frame898}>
            <div className={styles.frame890}>
              <span className={styles.labelPhone}>Номер телефону</span>
              <div className={styles.fieldDisplay}>+380 {phone}</div>
            </div>
            <div className={styles.frame891}>
              <span className={styles.labelEmail}>Email</span>
              <div className={styles.frame889}>
                <input
                  type="email"
                  placeholder="youremail@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.emailInput}
                />
              </div>
            </div>
          </div>
          {error && <div className={styles.errorText}>{error}</div>}
          <button
            onClick={handleEmailSubmit}
            disabled={loading}
            className={styles.continueButton}
          >
            {loading ? "Перевірка..." : "Продовжити"}
          </button>
        </div>
      ) : step === "setPassword" ? (
        <div className={styles.frame908} onClick={stop}>
          <div className={styles.frame900Header}>
            <button className={styles.closeButton} onClick={onClose}>
              <img src={CloseIcon} alt="Закрити" className={styles.icon} />
            </button>
          </div>
          <div className={styles.frame897}>
            <h2 className={styles.registerTitle}>Реєстрація</h2>
          </div>
          <div className={styles.frame907}>
            <div className={styles.frame906}>
              <div className={styles.frame905}>
                <div className={styles.frame903}>
                  <label className={styles.inputLabel}>Придумайте пароль</label>
                  {error && <div className={styles.errorText}>{error}</div>}
                  <div className={styles.frame902}>
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className={styles.passwordInput}
                    />
                    <span
                      className={styles.eyeIcon}
                      onClick={() => setShowPassword((v) => !v)}
                    >
                      <img
                        src={showPassword ? EyeOpenIcon : EyeClosedIcon}
                        alt={
                          showPassword ? "Приховати пароль" : "Показати пароль"
                        }
                      />
                    </span>
                  </div>
                  <p className={styles.passwordHint}>
                    Довжина паролю від 6 до 15 символів. Пароль повинен містити
                    мінімум 1 букву та 2 цифри.
                    <br />
                    <span className={styles.passwordHintStrong}>
                      Не рекомендується
                    </span>{" "}
                    використовувати спеціальні символи (@#$^:;/”)?* та інші
                  </p>
                </div>

                <div className={styles.frame904}>
                  <label className={styles.inputLabel}>Повторіть пароль</label>
                  <div className={styles.frame902}>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className={styles.passwordInput}
                    />
                    <span
                      className={styles.eyeIcon}
                      onClick={() => setShowConfirmPassword((v) => !v)}
                    >
                      <img
                        src={showConfirmPassword ? EyeOpenIcon : EyeClosedIcon}
                        alt={
                          showConfirmPassword
                            ? "Приховати пароль"
                            : "Показати пароль"
                        }
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.frame862}>
            <input
              id="agree2"
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <label htmlFor="agree2" className={styles.checkboxLabel}>
              Я ознайомлений (-на) з{" "}
              <span className={styles.highlight}>Умовами</span> та{" "}
              <span className={styles.highlight}>Правилами</span> надання
              банківських послуг.
            </label>
          </div>

          <button
            onClick={handleRegister}
            disabled={loading}
            className={styles.frame657}
          >
            {loading ? "Реєстрація..." : "Продовжити"}
          </button>
        </div>
      ) : (
        <div className={styles.frame887} onClick={stop}>
          <div className={styles.frame867}>
            <button className={styles.closeButton} onClick={onClose}>
              <img src={CloseIcon} alt="Закрити" className={styles.icon} />
            </button>
          </div>
          <div className={styles.frame868}>
            <h2 className={styles.modalTitle}>Вхід / Реєстрація</h2>
            <div className={styles.stepContainer}>
              {step === "enterPhone" && (
                <div className={styles.step1Container}>
                  <div className={styles.container}>
                    <div className={styles.title}>Номер телефону</div>
                    <div className={styles.wrapper_phoneInfo}>
                      <div className={styles.wrapper_blockCode}>
                        <img
                          src="/icons/flag_ukraine25.svg"
                          alt="Ukraine Flag"
                        />
                        <div className={styles.code}>+380</div>
                        <img
                          src="/img/polygon.png"
                          className={styles.poligon}
                          alt="Dropdown"
                        />
                      </div>
                      <div className={styles.lineVertical}></div>
                      <input
                        value={phone}
                        onChange={handlePhoneChange}
                        type="text"
                        placeholder="000 000 00 00"
                        className={styles.phoneNumber}
                      />
                    </div>
                    <div className={styles.checkboxContainer}>
                      <input
                        id="agree"
                        type="checkbox"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                      />
                      <label
                        htmlFor="agree"
                        className={styles.confirmationText}
                      >
                        Продовжуючи, я підтверджую, що згоден (-на) з{" "}
                        <span className={styles.highlight}>Умовами</span> та{" "}
                        <span className={styles.highlight}>Правилами</span>, й
                        ознайомлений (-на) із{" "}
                        <span className={styles.highlight}>
                          Повідомленням про обробку персональних даних у Банку
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              )}
              {step === "login" && (
                <div className={styles.step2Container}>
                  <label className={styles.label}>Пароль</label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className={styles.input}
                  />
                </div>
              )}
            </div>
            {error && <div className={styles.errorText}>{error}</div>}
            <div className={styles.Frame953}>
              <div className={styles.submitWrapper}>
                {step === "enterPhone" && (
                  <button
                    onClick={handlePhoneSubmit}
                    disabled={loading}
                    className={styles.submitButton}
                  >
                    {loading ? "Перевірка..." : "Продовжити"}
                  </button>
                )}
                {step === "login" && (
                  <button
                    onClick={handleLogin}
                    disabled={loading}
                    className={styles.submitButton}
                  >
                    {loading ? "Увійти..." : "Увійти"}
                  </button>
                )}
              </div>
              {step === "enterPhone" && (
                <div className={styles.qrWrapper}>
                  <div className={styles.qrImage}></div>
                  <p className={styles.qrText}>
                    QR-код для входу через смартфон
                  </p>
                </div>
              )}
            </div>
            {step === "enterPhone" && (
              <div className={styles.storeLinksContainer}>
                <div className={styles.frame641}>
                  <a
                    href="https://www.apple.com/app-store/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.appleLink}
                  >
                    <div className={styles.appleIcon}>
                      <div className={styles.vector}></div>
                    </div>
                    <div className={styles.frame640}>
                      <div className={styles.available}>Доступно в</div>
                      <div className={styles.appleStore}>Apple Store</div>
                    </div>
                  </a>
                </div>
                <div className={styles.frame833}>
                  <a
                    href="https://play.google.com/store"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.googlePlayLink}
                  >
                    <div className={styles.googlePlayIcon}>
                      <div className={styles.vector}></div>
                    </div>
                    <div className={styles.frame640}>
                      <div className={styles.available}>Доступно в</div>
                      <div className={styles.googlePlay}>Google Play</div>
                    </div>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default SignInModal;
