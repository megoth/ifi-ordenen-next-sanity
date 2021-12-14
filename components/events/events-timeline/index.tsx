import React, { useEffect, useRef, useState } from "react";
import { EventForListQuery } from "../../../lib/api/history";
import {
  indicatorStyle,
  indicatorValueStyle,
  timelineStyle,
} from "./styles.css";
import useScroll from "../../../hooks/useScroll";
import {
  getOffsetTopFromScrollEvent,
  getViewportHeight,
} from "../../../lib/utils";
import cn from "classnames";

interface Props {
  eventYears: Array<string>;
}

export default function EventsTimeline({ eventYears }: Props) {
  const ref = useRef(null);
  const scrollEvent = useScroll();
  const [fixed, setFixed] = useState<boolean>(false);
  const [height, setHeight] = useState<number>(0);
  const [right, setRight] = useState<number>(0);
  const [top, setTop] = useState<number>(0);

  useEffect(() => {
    const viewportOffsetTop = getOffsetTopFromScrollEvent(scrollEvent);
    const parentElement = ref.current?.parentElement;
    const viewportHeight = getViewportHeight();
    const parentHeight = parentElement.clientHeight;
    const timelineIsTallerThanView = parentHeight > viewportHeight;
    const parentOffsetTop = parentElement?.offsetTop;
    setFixed(viewportOffsetTop > parentOffsetTop && timelineIsTallerThanView);
    setRight(parentElement.offsetLeft);
    const timelineHeight = timelineIsTallerThanView
      ? viewportHeight
      : parentHeight;
    setHeight(timelineHeight);
    const timelineTop = Math.min(
      0,
      parentOffsetTop + parentHeight - viewportOffsetTop - viewportHeight
    );
    setTop(timelineTop);
  }, [scrollEvent]);

  return (
    <div
      className={cn(timelineStyle, {
        fixed,
      })}
      ref={ref}
      style={{ right, height, top }}
    >
      <div className={indicatorStyle}>
        <div className={indicatorValueStyle}>2021</div>
      </div>
    </div>
  );
}
