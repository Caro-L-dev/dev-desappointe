// AnimateHome.tsx
import { useAnimateHome } from "@/hooks/useAnimateHome";

import { Start } from "../start/Start";

import styles from "./AnimateHome.module.css";

export const AnimateHome = () => {
  const { isTitleVisible, isStartVisible, titlePosition, startPosition } =
    useAnimateHome();

  return (
    <div className="flex flex-col items-center justify-center">
      <h1
        style={{ fontFamily: "var(--hometitle-font)" }}
        className={`text-5xl font-black mt-[25rem] ${
          isTitleVisible ? styles.titleVisible : styles.titleHidden
        } ${titlePosition === "top" ? styles.titleTop : styles.titleCenter}`}
      >
        Dev désappointé 💻☠️
      </h1>

      <div
        data-testid="start-component"
        className={`${
          isStartVisible ? styles.startVisible : styles.startHidden
        } ${startPosition === "top" ? styles.startTop : styles.startCenter}`}
      >
        {isStartVisible && <Start />}
      </div>
    </div>
  );
};
