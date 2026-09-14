type YGOZoneProps = {
  x: number;
  y: number;
  width: number;
  imageSrc?: string;
};

function Zone({ x, y, width, imageSrc }: YGOZoneProps) {
  const height = width * (1185 / 813);
  const rectx = x - 0.5 * width;
  const recty = y - 0.5 * height;
  if (imageSrc) {
    return (
      <image
        href={imageSrc}
        x={rectx}
        y={recty}
        width={width}
        height={height}
      />
    );
  }
  return (
    <rect
      x={rectx}
      y={recty}
      width={width}
      height={height}
      fill="none"
      stroke="black"
    />
  );
}

type YGOFieldProps = {
  cm1?: string;
  cm2?: string;
  cm3?: string;
  cm4?: string;
  cm5?: string;
  cst1?: string;
  cst2?: string;
  cst3?: string;
  cst4?: string;
  cst5?: string;
  cf?: string;
  om1?: string;
  om2?: string;
  om3?: string;
  om4?: string;
  om5?: string;
  ost1?: string;
  ost2?: string;
  ost3?: string;
  ost4?: string;
  ost5?: string;
  of?: string;
  ex1?: string;
  ex2?: string;
};

export function YGOField({
  cm1,
  cm2,
  cm3,
  cm4,
  cm5,
  cst1,
  cst2,
  cst3,
  cst4,
  cst5,
  cf,
  om1,
  om2,
  om3,
  om4,
  om5,
  ost1,
  ost2,
  ost3,
  ost4,
  ost5,
  of,
  ex1,
  ex2,
}: YGOFieldProps) {
  const width = 840;
  const height = 980;
  const cardwidth = 100;
  const x = [60, 180, 300, 420, 540, 660, 780];
  const y = [130, 310, 490, 670, 850];
  return (
    <svg viewBox="0 0 840 980">
      <rect
        x={0}
        y={0}
        width={width}
        height={height}
        fill="lightgrey"
        stroke="black"
      />
      <Zone x={x[1]} y={y[0]} width={cardwidth} imageSrc={ost1} />
      <Zone x={x[2]} y={y[0]} width={cardwidth} imageSrc={ost2} />
      <Zone x={x[3]} y={y[0]} width={cardwidth} imageSrc={ost3} />
      <Zone x={x[4]} y={y[0]} width={cardwidth} imageSrc={ost4} />
      <Zone x={x[5]} y={y[0]} width={cardwidth} imageSrc={ost5} />

      <Zone x={x[1]} y={y[1]} width={cardwidth} imageSrc={om1} />
      <Zone x={x[2]} y={y[1]} width={cardwidth} imageSrc={om2} />
      <Zone x={x[3]} y={y[1]} width={cardwidth} imageSrc={om3} />
      <Zone x={x[4]} y={y[1]} width={cardwidth} imageSrc={om4} />
      <Zone x={x[5]} y={y[1]} width={cardwidth} imageSrc={om5} />

      <Zone x={x[6]} y={y[1]} width={cardwidth} imageSrc={of} />

      <Zone x={x[2]} y={y[2]} width={cardwidth} imageSrc={ex1} />
      <Zone x={x[4]} y={y[2]} width={cardwidth} imageSrc={ex2} />

      <Zone x={x[0]} y={y[3]} width={cardwidth} imageSrc={cf} />

      <Zone x={x[1]} y={y[3]} width={cardwidth} imageSrc={cm1} />
      <Zone x={x[2]} y={y[3]} width={cardwidth} imageSrc={cm2} />
      <Zone x={x[3]} y={y[3]} width={cardwidth} imageSrc={cm3} />
      <Zone x={x[4]} y={y[3]} width={cardwidth} imageSrc={cm4} />
      <Zone x={x[5]} y={y[3]} width={cardwidth} imageSrc={cm5} />

      <Zone x={x[1]} y={y[4]} width={cardwidth} imageSrc={cst1} />
      <Zone x={x[2]} y={y[4]} width={cardwidth} imageSrc={cst2} />
      <Zone x={x[3]} y={y[4]} width={cardwidth} imageSrc={cst3} />
      <Zone x={x[4]} y={y[4]} width={cardwidth} imageSrc={cst4} />
      <Zone x={x[5]} y={y[4]} width={cardwidth} imageSrc={cst5} />
    </svg>
  );
}

type YGOHalfFieldProps = {
  cm1?: string;
  cm2?: string;
  cm3?: string;
  cm4?: string;
  cm5?: string;
  cst1?: string;
  cst2?: string;
  cst3?: string;
  cst4?: string;
  cst5?: string;
  cf?: string;
  ex1?: string;
  ex2?: string;
};

export function YGOHalfField({
  cm1,
  cm2,
  cm3,
  cm4,
  cm5,
  cst1,
  cst2,
  cst3,
  cst4,
  cst5,
  cf,
  ex1,
  ex2,
}: YGOHalfFieldProps) {
  const width = 840;
  const height = 660;
  const cardwidth = 100;
  const x = [60, 180, 300, 420, 540, 660, 780];
  const y = [170, 330, 490];
  return (
    <svg viewBox="0 0 840 660">
      <rect
        x={0}
        y={0}
        width={width}
        height={height}
        fill="lightgrey"
        stroke="black"
      />
      <Zone x={x[2]} y={y[0]} width={cardwidth} imageSrc={ex1} />
      <Zone x={x[4]} y={y[0]} width={cardwidth} imageSrc={ex2} />

      <Zone x={x[0]} y={y[1]} width={cardwidth} imageSrc={cf} />

      <Zone x={x[1]} y={y[1]} width={cardwidth} imageSrc={cm1} />
      <Zone x={x[2]} y={y[1]} width={cardwidth} imageSrc={cm2} />
      <Zone x={x[3]} y={y[1]} width={cardwidth} imageSrc={cm3} />
      <Zone x={x[4]} y={y[1]} width={cardwidth} imageSrc={cm4} />
      <Zone x={x[5]} y={y[1]} width={cardwidth} imageSrc={cm5} />

      <Zone x={x[1]} y={y[2]} width={cardwidth} imageSrc={cst1} />
      <Zone x={x[2]} y={y[2]} width={cardwidth} imageSrc={cst2} />
      <Zone x={x[3]} y={y[2]} width={cardwidth} imageSrc={cst3} />
      <Zone x={x[4]} y={y[2]} width={cardwidth} imageSrc={cst4} />
      <Zone x={x[5]} y={y[2]} width={cardwidth} imageSrc={cst5} />
    </svg>
  );
}
