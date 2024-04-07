import { useState, useEffect } from "react";

export const useAnimateHome = () => {
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isStartVisible, setIsStartVisible] = useState(false);

  const [titlePosition, setTitlePosition] = useState("center");

  const DEFAULT_TIME_TO_DISPLAY_TITLE = 3000;
  const START_TIME = DEFAULT_TIME_TO_DISPLAY_TITLE + 2000;
  const MOVE_TITLE_TO_TOP_TIME = 200;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTitleVisible(true);
    }, DEFAULT_TIME_TO_DISPLAY_TITLE);

    return () => clearTimeout(timer);
  }, [DEFAULT_TIME_TO_DISPLAY_TITLE]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsStartVisible(true);
    }, START_TIME);

    return () => clearTimeout(timer);
  }, [START_TIME]);

  useEffect(() => {
    if (isStartVisible) {
      setTimeout(() => {
        setTitlePosition("top");
      }, MOVE_TITLE_TO_TOP_TIME);
    }
  }, [isStartVisible]);

  return { isTitleVisible, isStartVisible, titlePosition };
};
