import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchCurrentUser } from "../../redux/slices/authSlice";
import axiosInstance from "../../utils/axiosInstance";
import styles from "./SignInModal.module.css";
import CloseIcon from "../../assets/Photo/Union.png";
import EyeOpenIcon from "../../assets/Photo/eyelook.png";
import EyeClosedIcon from "../../assets/Photo/eyeoff.png";
import EditIcon from "../../assets/Photo/EditIcon.png";
import SMSImage from "../../assets/Photo/SMS.png";
import {
  toInternational,
  isValidPhone,
  isValidEmail,
  isValidPassword,
} from "./utils";
import {
  sendSmsCode,
  verifySmsCode,
  registerEmail,
  verifyEmail,
  setPassword as apiSetPassword,
  sendLoginSmsCode,
  confirmLoginCode,
  createUserProfile,
} from "./api";

function SignInModal({ onClose }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [step, setStep] = useState("enterPhone");

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [smsSent, setSmsSent] = useState(false);
  const [smsCode, setSmsCode] = useState("");
  const [publicUUID, setPublicUUID] = useState("");

  const [emailSent, setEmailSent] = useState(false);
  const [emailCode, setEmailCode] = useState("");
  const [emailUUID, setEmailUUID] = useState("");

  const [confirmSent, setConfirmSent] = useState(false);
  const [confirmCode, setConfirmCode] = useState("");
  const [loginToken, setLoginToken] = useState("");

  const [firstNameUa, setFirstNameUa] = useState("");
  const [lastNameUa, setLastNameUa] = useState("");
  const [patronymicUa, setPatronymicUa] = useState("");
  const [firstNameEn, setFirstNameEn] = useState("");
  const [lastNameEn, setLastNameEn] = useState("");
  const [patronymicEn, setPatronymicEn] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [agreed, setAgreed] = useState(false);

  const stop = (e) => e.stopPropagation();
  const handlePhoneChange = (e) => setPhone(e.target.value.replace(/\D/g, ""));

  // ----- РЕЄСТРАЦІЯ -----
  const handlePhoneSubmit = async () => {
    setError("");
    if (!phone) return setError("Вкажіть номер телефону");
    if (!isValidPhone(phone))
      return setError(
        "Номер телефону повинен містити тільки цифри (9–10 символів)"
      );
    if (!agreed) return setError("Підтвердіть згоду");

    setLoading(true);
    try {
      await sendSmsCode(toInternational(phone));
      setSmsSent(true);
      setStep("sms");
    } catch (e) {
      if (e.status === 409) {
        await sendLoginSmsCode(toInternational(phone));
        setConfirmSent(true);
        setStep("confirmPhone");
      } else {
        setError(e.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleVerifySms = async () => {
    setError("");
    if (!smsCode) return setError("Введіть код із SMS");
    setLoading(true);
    try {
      const uuid = await verifySmsCode(toInternational(phone), smsCode);
      setPublicUUID(uuid);
      setStep("enterEmail");
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEmailSubmit = async () => {
    setError("");
    if (!email) return setError("Вкажіть email");
    if (!isValidEmail(email))
      return setError("Некоректний email. Використовуйте лише латиницю та @");
    setLoading(true);
    try {
      await registerEmail(email);
      setEmailSent(true);
      setStep("verifyEmail");
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyEmail = async () => {
    setError("");
    if (!emailCode) return setError("Введіть код із листа");
    setLoading(true);
    try {
      const uuid = await verifyEmail(email, emailCode, publicUUID);
      setEmailUUID(uuid);
      setStep("setPassword");
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async () => {
    setError("");
    if (!password) return setError("Введіть пароль");
    if (password !== confirmPassword) return setError("Паролі не співпадають");
    if (!isValidPassword(password))
      return setError("Пароль недостатньо складний");

    setLoading(true);
    try {
      await apiSetPassword(emailUUID || publicUUID, password);
      await dispatch(fetchCurrentUser());
      onClose();
      navigate("/");
    } catch (e) {
      setError(e.message || "Сталася помилка при збереженні пароля");
    } finally {
      setLoading(false);
    }
  };

  // ----- ЛОГІН -----
  const handleLogin = async () => {
    setError("");
    if (!phone) return setError("Вкажіть номер телефону");
    setLoading(true);
    try {
      await sendLoginSmsCode(toInternational(phone));
      setConfirmSent(true);
      setStep("confirmPhone");
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleConfirmPhone = async () => {
  setError("");
  if (!confirmCode) return setError("Введіть код підтвердження");
  setLoading(true);

  try {
    const token = await confirmLoginCode(toInternational(phone), confirmCode);
    setLoginToken(token);

    let profile = null;
    try {
      const resp = await axiosInstance.get("/api/v1/userProfile/get", {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
      });
      profile = resp.data;
    } catch (err) {
      if (err.response?.status !== 404) {
        throw err;
      }
    }

    const hasAllFields = profile && [
      "firstNameUa", "lastNameUa", "patronymicUa",
      "firstNameEn", "lastNameEn", "patronymicEn",
      "birthDate"
    ].every(key => !!profile[key]);

    if (hasAllFields) {
      await dispatch(fetchCurrentUser());
      onClose();
      navigate("/");
    } else {
      setStep("profile");
    }

  } catch (e) {
    setError(e.response?.data?.message || e.message);
  } finally {
    setLoading(false);
  }
};


  const handleProfileSubmit = async () => {
    setError("");
    if (
      !firstNameUa ||
      !lastNameUa ||
      !patronymicUa ||
      !firstNameEn ||
      !lastNameEn ||
      !patronymicEn ||
      !birthDate
    ) {
      return setError("Заповніть всі поля профілю");
    }
    setLoading(true);
    try {
      const profilePayload = {
        firstNameUa,
        lastNameUa,
        patronymicUa,
        firstNameEn,
        lastNameEn,
        patronymicEn,
        birthDate,
      };
      await createUserProfile(profilePayload, loginToken);
      await dispatch(fetchCurrentUser());
      onClose();
      navigate("/");
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };
  // ----- UI Helpers -----

  const formatPhoneDisplay = (raw) => {
    const digits = raw.replace(/\D/g, "");
    let local = digits.length > 10 ? digits.slice(-10) : digits;
    if (local.length === 9) local = "0" + local;
    if (local.length === 10) {
      const [a, b, c, d] = [
        local.slice(0, 3),
        local.slice(3, 6),
        local.slice(6, 8),
        local.slice(8, 10),
      ];
      return `+38 (${a}) ${b} ${c} ${d}`;
    }
    return raw;
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      {step === "enterEmail" && (
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
      )}

      {step === "verifyEmail" && (
        <div className={styles.verifyWrapper} onClick={stop}>
          <div className={styles.closeContainer}>
            <button className={styles.closeButton} onClick={onClose}>
              <img src={CloseIcon} alt="Закрити" className={styles.closeIcon} />
            </button>
          </div>
          <div className={styles.contentContainer} onClick={stop}>
            <h2 className={styles.title}>Підтвердження Email</h2>
            <p className={styles.subtitle}>
              Введіть код, який надійшов на {email}
            </p>
            <div className={styles.inputContainer}>
              <div className={styles.inputGroup}>
                <span className={styles.inputLabel}>Код підтвердження</span>
                <input
                  type="text"
                  placeholder="123456"
                  value={emailCode}
                  onChange={(e) => setEmailCode(e.target.value)}
                  className={styles.inputField}
                />
              </div>
              {error && <div className={styles.errorText}>{error}</div>}
            </div>
            <img src={SMSImage} alt="SMS" className={styles.smsImage2} />
            <div className={styles.buttonContainer}>
              <button
                onClick={handleVerifyEmail}
                disabled={loading}
                className={styles.actionButton}
              >
                {loading ? "Перевірка..." : "Підтвердити Email"}
              </button>
            </div>
          </div>
        </div>
      )}

      {step === "sms" && (
        <div className={styles.frame895} onClick={stop}>
          <div className={styles.closeWrapper}>
            <button className={styles.closeButton} onClick={onClose}>
              <img src={CloseIcon} alt="Закрити" className={styles.closeIcon} />
            </button>
          </div>

          <div className={styles.contentWrapper}>
            <h2 className={styles.registerTitle}>Підтвердіть телефон</h2>
            <p className={styles.registerSubtitle}>
              Код буде відправлено на номер +380{phone}.<br />
              Будь ласка, очікуйте SMS з кодом протягом 2 хвилин.
            </p>
            <img
              src={SMSImage}
              alt="SMS illustration"
              className={styles.smsImage}
            />

            {error && <div className={styles.errorText}>{error}</div>}

            {!smsSent ? (
              <button
                onClick={handleSendSms}
                disabled={loading}
                className={styles.continueButton}
              >
                {loading ? "Надсилання..." : "Надіслати SMS-код"}
              </button>
            ) : (
              <>
                <div className={styles.inputWrapper}>
                  <span className={styles.label}>Код із SMS</span>
                  <input
                    type="text"
                    placeholder="0000"
                    value={smsCode}
                    onChange={(e) => setSmsCode(e.target.value)}
                    className={styles.codeInput}
                  />
                </div>
                <button
                  onClick={handleVerifySms}
                  disabled={loading}
                  className={styles.continueButton}
                >
                  {loading ? "Перевірка..." : "Підтвердити код"}
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {step === "setPassword" && (
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
      )}

      {step === "login" && (
        <div className={styles.frame887} onClick={stop}>
          <div className={styles.frame867}>
            <button className={styles.closeButton} onClick={onClose}>
              <img src={CloseIcon} alt="Закрити" className={styles.icon} />
            </button>
          </div>
          <div className={styles.frame883}>
            <h2 className={styles.modalTitle2}>Вхід</h2>

            <div className={styles.step2Container}>
              <label className={styles.label}>Номер телефону</label>
              <div className={styles.passwordWrapper}>
                {showPhoneEditable ? (
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={styles.input}
                  />
                ) : (
                  <input
                    type="text"
                    value={formatPhoneDisplay(phone)}
                    readOnly
                    className={styles.input}
                  />
                )}
                <span
                  className={styles.eyeIcon}
                  onClick={() => setShowPhoneEditable((v) => !v)}
                >
                  <img
                    src={EditIcon}
                    alt={
                      showPhoneEditable ? "Зберегти номер" : "Редагувати номер"
                    }
                  />
                </span>
              </div>
            </div>

            <div className={styles.step2Container}>
              <label className={styles.label}>Пароль Finostra</label>
              <div className={styles.passwordWrapper}>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  className={styles.input}
                />
                <span
                  className={styles.eyeIcon}
                  onClick={() => setShowPassword((v) => !v)}
                >
                  <img
                    src={showPassword ? EyeOpenIcon : EyeClosedIcon}
                    alt={showPassword ? "Приховати пароль" : "Показати пароль"}
                  />
                </span>
              </div>
            </div>

            {error && <div className={styles.errorText}>{error}</div>}

            <div className={styles.submitWrapper}>
              <button
                onClick={handleLogin} // ← тут зміна
                disabled={loading}
                className={styles.submitButton}
              >
                {loading ? "Увійти..." : "Увійти"}
              </button>
            </div>
          </div>
        </div>
      )}

      {step === "confirmPhone" && (
        <div className={styles.frame895} onClick={stop}>
          <div className={styles.closeWrapper}>
            <button className={styles.closeButton} onClick={onClose}>
              <img src={CloseIcon} alt="Закрити" className={styles.closeIcon} />
            </button>
          </div>
          <div className={styles.contentWrapper}>
            <h2 className={styles.registerTitle}>Підтвердження номера</h2>
            <p className={styles.registerSubtitle}>
              Код підтвердження надіслано на {formatPhoneDisplay(phone)}.
            </p>
            <img
              src={SMSImage}
              alt="SMS illustration"
              className={styles.smsImage}
            />
            {error && <div className={styles.errorText}>{error}</div>}
            <div className={styles.inputWrapper}>
              <span className={styles.label}>Код підтвердження</span>
              <input
                type="text"
                placeholder="0000"
                value={confirmCode}
                onChange={(e) => setConfirmCode(e.target.value)}
                className={styles.codeInput}
              />
            </div>
            <button
              onClick={handleConfirmPhone}
              disabled={loading}
              className={styles.continueButton}
            >
              {loading ? "Перевірка..." : "Підтвердити"}
            </button>
          </div>
        </div>
      )}

      {step === "profile" && (
        <div className={styles.profileWrapper} onClick={stop}>
          <h2>Заповніть профіль</h2>
          <input
            placeholder="Ім'я (укр)"
            value={firstNameUa}
            onChange={(e) => setFirstNameUa(e.target.value)}
          />
          <input
            placeholder="Прізвище (укр)"
            value={lastNameUa}
            onChange={(e) => setLastNameUa(e.target.value)}
          />
          <input
            placeholder="По батькові (укр)"
            value={patronymicUa}
            onChange={(e) => setPatronymicUa(e.target.value)}
          />
          <input
            placeholder="First Name (en)"
            value={firstNameEn}
            onChange={(e) => setFirstNameEn(e.target.value)}
          />
          <input
            placeholder="Last Name (en)"
            value={lastNameEn}
            onChange={(e) => setLastNameEn(e.target.value)}
          />
          <input
            placeholder="Patronymic (en)"
            value={patronymicEn}
            onChange={(e) => setPatronymicEn(e.target.value)}
          />
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
          {error && <p className={styles.error}>{error}</p>}
          <button
            onClick={handleProfileSubmit}
            disabled={loading}
            className={styles.continueButton}
          >
            {loading ? "Завантаження..." : "Зберегти профіль"}
          </button>
        </div>
      )}

      {step === "enterPhone" && (
        <div className={styles.frame837} onClick={stop}>
          <div className={styles.frame867}>
            <button className={styles.closeButton} onClick={onClose}>
              <img src={CloseIcon} alt="Закрити" className={styles.icon} />
            </button>
          </div>
          <div className={styles.frame868}>
            <h2 className={styles.modalTitle}>Вхід / Реєстрація</h2>
            <div className={styles.stepContainer}>
              <div className={styles.step1Container}>
                <div className={styles.container}>
                  <div className={styles.title}>Номер телефону</div>
                  <div className={styles.wrapper_phoneInfo}>
                    <div className={styles.wrapper_blockCode}>
                      <img src="/icons/flag_ukraine25.svg" alt="Ukraine Flag" />
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
                    <label htmlFor="agree" className={styles.confirmationText}>
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
            </div>
            <div className={styles.Frame953}>
              <div className={styles.submitWrapper}>
                <button
                  onClick={handlePhoneSubmit}
                  disabled={loading}
                  className={styles.submitButton}
                >
                  {loading ? "Перевірка..." : "Продовжити"}
                </button>
              </div>
              <div className={styles.qrWrapper}>
                <div className={styles.qrImage}></div>
                <p className={styles.qrText}>QR-код для входу через смартфон</p>
              </div>
            </div>
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
          </div>
        </div>
      )}
    </div>
  );
}

export default SignInModal;
