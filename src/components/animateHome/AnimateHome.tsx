// AnimateHome.tsx
import { useAnimateHome } from "@/hooks/useAnimateHome";

import { Start } from "../start/Start";
import { Title } from "../common/title/Title";

import styles from "./AnimateHome.module.css";

export const AnimateHome = () => {
  const { isTitleVisible, isStartVisible, titlePosition, startPosition } =
    useAnimateHome();

  return (
    <div className="flex flex-col items-center justify-center">
      <span
        className={`mt-[25rem] ${
          isTitleVisible ? styles.titleVisible : styles.titleHidden
        } ${titlePosition === "top" ? styles.titleTop : styles.titleCenter}`}
      >
        <Title children="Dev désappointé" />
      </span>

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
