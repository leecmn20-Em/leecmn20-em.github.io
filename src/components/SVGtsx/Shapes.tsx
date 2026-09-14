type RectangleProps = {
  x: number;
  width: number;
  y: number;
  height: number;
  fill?: string;
  stroke?: string;
};

export function Rectangle({
  x,
  y,
  width,
  height,
  fill = "none",
  stroke = "black",
}: RectangleProps) {
  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      fill={fill}
      stroke={stroke}
    />
  );
}

type EllipseProps = {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  fill?: string;
  stroke?: string;
};

export function Ellipse({
  cx,
  cy,
  rx,
  ry,
  fill = "none",
  stroke = "black",
}: EllipseProps) {
  return (
    <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={fill} stroke={stroke} />
  );
}
