import clsx from "clsx";

const Button = ({ icon, children, href, containerClassName, onClick }) => {
  return href ? (
    <a
      className={clsx(
        "relative p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassName,
      )}
      href={href}
    >
      TEXT
    </a>
  ) : (
    <button
      className={clsx("relative p-0.5 g5 rounded-2xl shadow-500 group")}
      onClick={onClick}
    >
      TEXT
    </button>
  );
};
export default Button;
