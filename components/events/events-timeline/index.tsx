import React, { useContext, useEffect, useRef, useState } from "react";
import {
  draggableStyle,
  draggableValueStyle,
  indicatorStyle,
  scrollAreaStyle,
  timelineStyle,
} from "./styles.css";
import useScroll from "../../../hooks/useScroll";
import {
  getOffsetTopFromScrollEvent,
  getViewportHeight,
} from "../../../lib/utils";
import cn from "classnames";
import Draggable from "react-draggable";
import EventsContext from "../../../contexts/eventsContext";

interface Props {
  eventYears: string[];
}

export default function EventsTimeline({ eventYears }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const scrollEvent = useScroll();
  const [fixed, setFixed] = useState<boolean>(false);
  const [height, setHeight] = useState<number>(0);
  const [right, setRight] = useState<number>(0);
  const [top, setTop] = useState<number>(0);
  const { setFocusYear } = useContext(EventsContext);
  const [year, setYear] = useState<string>(eventYears[0]);

  const getYearFromDrag = (y: number) =>
    eventYears[
      Math.min(
        Math.ceil((y / ref.current?.clientHeight) * (eventYears.length + 1)),
        eventYears.length - 1
      )
    ];

  const onDrag = (_, indicator) => setYear(getYearFromDrag(indicator.y));

  const onDragStop = (_, indicator) =>
    setFocusYear(getYearFromDrag(indicator.y));

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
      <div className={scrollAreaStyle} />
      <Draggable axis="y" bounds="parent" onStop={onDragStop} onDrag={onDrag}>
        <button className={draggableStyle} type="button">
          <div className={indicatorStyle} />
          {eventYears.map((y) => (
            <div
              className={cn(draggableValueStyle, {
                focus: y === year,
              })}
            >
              {y}
            </div>
          ))}
        </button>
      </Draggable>
    </div>
  );
}
