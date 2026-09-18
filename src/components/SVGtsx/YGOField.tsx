type YGOZoneProps = {
  x: number;
  y: number;
  width: number;
  imageSrc?: string;
};

function Zone({ x, y, width, imageSrc }: YGOZoneProps) {
  const height = width * (1185 / 813);
  return (
    <g transform={`translate(${x} ${y})`}>
      {imageSrc ? (
        <image
          href={imageSrc}
          x={-width / 2}
          y={-height / 2}
          width={width}
          height={height}
        />
      ) : (
        <rect
          x={-width / 2}
          y={-height / 2}
          width={width}
          height={height}
          fill="none"
          stroke="black"
        />
      )}
    </g>
  );
}

type YGOSignProps = {
  x: number;
  y: number;
  width: number;
  color?: string;
};

function GraveyardSign({ x, y, width, color = "currentColor" }: YGOSignProps) {
  return (
    <g
      transform={`translate(${x - width / 2} ${y - width / 2}) scale(${width / 32})`}
      fill="none"
      stroke={color}
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-label="묘지"
    >
      <circle cx={16} cy={16} r={15} />
      <path d="M 4 25 C 13 25 16 24 16 16 C 16 8 19 7 28 7" />
    </g>
  );
}

function GraveyardZone({ x, y, width, imageSrc }: YGOZoneProps) {
  const height = width * (1185 / 813);
  return (
    <g transform={`translate(${x} ${y})`}>
      {imageSrc ? (
        <image
          href={imageSrc}
          x={-width / 2}
          y={-height / 2}
          width={width}
          height={height}
        />
      ) : (
        <>
          <rect
            x={-width / 2}
            y={-height / 2}
            width={width}
            height={height}
            fill="none"
            stroke="black"
          />
          <GraveyardSign x={0} y={0} width={width / 2.5} />
        </>
      )}
    </g>
  );
}

function VanishZone({ x, y, width, imageSrc }: YGOZoneProps) {
  const height = width * (1185 / 813);
  return (
    <g transform={`translate(${x} ${y}) rotate(90)`}>
      {imageSrc ? (
        <image
          href={imageSrc}
          x={-width / 2}
          y={-height / 2}
          width={width}
          height={height}
        />
      ) : (
        <>
          <rect
            x={-width / 2}
            y={-height / 2}
            width={width}
            height={height}
            fill="none"
            stroke="black"
          />
          <VanishSign x={0} y={0} width={width / 2.5} />
        </>
      )}
    </g>
  );
}

function VanishSign({ x, y, width, color = "currentColor" }: YGOSignProps) {
  return (
    <g
      transform={`translate(${x - width / 2} ${y - width / 2}) scale(${width / 32})`}
      fill="none"
      stroke={color}
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-label="제외"
    >
      <rect x={7} y={3} width={18} height={26} />
      <path d="M 11 7 L 21 25 M 21 7 L 11 25" />
    </g>
  );
}

function DeckZone({ x, y, width, imageSrc }: YGOZoneProps) {
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
    <>
      <rect
        x={rectx}
        y={recty}
        width={width}
        height={height}
        fill="none"
        stroke="black"
      />
      <ellipse
        cx={x}
        cy={y}
        rx={width / 5}
        ry={height / 5}
        fill="none"
        stroke="black"
      />
    </>
  );
}

type HandProps = {
  x: number;
  y: number;
  width: number;
  cardWidth: number;
  images?: string[];
};

function Hand({ x, y, width, cardWidth, images }: HandProps) {
  if (!images?.length) {
    return null;
  }

  const handCardWidth = Math.min(cardWidth, width / images.length);
  const handX = Array.from(
    { length: images.length },
    (_, index) => x + (index - (images.length - 1) / 2) * handCardWidth,
  );

  return (
    <g>
      {images.map((imageSrc, index) => (
        <Zone
          key={index}
          x={handX[index]}
          y={y}
          width={handCardWidth}
          imageSrc={imageSrc}
        />
      ))}
    </g>
  );
}

function getFieldRows(
  rowCount: number,
  cardWidth: number,
  hasTopHand: boolean,
  hasBottomHand: boolean,
) {
  const cardHeight = cardWidth * (1185 / 813);
  const rowSpacing = 180;
  const rowGap = rowSpacing - cardHeight;
  const handGap = (1190 - (cardHeight + 4 * rowSpacing)) / 2;
  const topGap = hasTopHand ? handGap : rowGap;
  const bottomGap = hasBottomHand ? handGap : rowGap;
  const y = Array.from(
    { length: rowCount },
    (_, index) => topGap + cardHeight / 2 + index * rowSpacing,
  );
  const height = topGap + cardHeight + (rowCount - 1) * rowSpacing + bottomGap;

  return { y, height, topGap, bottomGap };
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
  cg?: string;
  cv?: string;
  cd?: string;
  ced?: string;
  ch?: string[];
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
  og?: string;
  ov?: string;
  od?: string;
  oed?: string;
  oh?: string[];
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
  cg,
  cv,
  cd,
  ced,
  ch,
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
  og,
  ov,
  od,
  oed,
  oh,
  ex1,
  ex2,
}: YGOFieldProps) {
  const width = 1020;
  const cardwidth = 100;
  const vanishOffset = (cardwidth * (1185 / 813) - cardwidth) / 2;
  const x = [60, 210, 360, 510, 660, 810, 960];
  const { y, height, topGap, bottomGap } = getFieldRows(
    5,
    cardwidth,
    !!oh?.length,
    !!ch?.length,
  );
  return (
    <svg viewBox={`0 0 ${width} ${height}`}>
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
      <GraveyardZone x={x[0]} y={y[1]} width={cardwidth} imageSrc={og} />
      <VanishZone
        x={x[0] + vanishOffset}
        y={y[2] - vanishOffset}
        width={cardwidth}
        imageSrc={ov}
      />
      <DeckZone x={x[0]} y={y[0]} width={cardwidth} imageSrc={od} />
      <DeckZone x={x[6]} y={y[0]} width={cardwidth} imageSrc={oed} />

      <Zone x={x[2]} y={y[2]} width={cardwidth} imageSrc={ex1} />
      <Zone x={x[4]} y={y[2]} width={cardwidth} imageSrc={ex2} />

      <Zone x={x[0]} y={y[3]} width={cardwidth} imageSrc={cf} />
      <GraveyardZone x={x[6]} y={y[3]} width={cardwidth} imageSrc={cg} />
      <VanishZone
        x={x[6] - vanishOffset}
        y={y[2] + vanishOffset}
        width={cardwidth}
        imageSrc={cv}
      />
      <DeckZone x={x[6]} y={y[4]} width={cardwidth} imageSrc={cd} />
      <DeckZone x={x[0]} y={y[4]} width={cardwidth} imageSrc={ced} />

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
      <Hand
        x={width / 2}
        y={topGap / 2}
        width={width - 20}
        cardWidth={cardwidth * 0.8}
        images={oh}
      />
      <Hand
        x={width / 2}
        y={height - bottomGap / 2}
        width={width - 20}
        cardWidth={cardwidth * 0.8}
        images={ch}
      />
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
  cg?: string;
  cv?: string;
  cd?: string;
  ced?: string;
  ch?: string[];
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
  cg,
  cv,
  cd,
  ced,
  ch,
  ex1,
  ex2,
}: YGOHalfFieldProps) {
  const width = 1020;
  const cardwidth = 100;
  const vanishOffset = (cardwidth * (1185 / 813) - cardwidth) / 2;
  const x = [60, 210, 360, 510, 660, 810, 960];
  const { y, height, bottomGap } = getFieldRows(
    3,
    cardwidth,
    false,
    !!ch?.length,
  );
  return (
    <svg viewBox={`0 0 ${width} ${height}`}>
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
      <GraveyardZone x={x[6]} y={y[1]} width={cardwidth} imageSrc={cg} />
      <VanishZone
        x={x[6] - vanishOffset}
        y={y[0] + vanishOffset}
        width={cardwidth}
        imageSrc={cv}
      />
      <DeckZone x={x[6]} y={y[2]} width={cardwidth} imageSrc={cd} />
      <DeckZone x={x[0]} y={y[2]} width={cardwidth} imageSrc={ced} />

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
      <Hand
        x={width / 2}
        y={height - bottomGap / 2}
        width={width - 20}
        cardWidth={cardwidth * 0.8}
        images={ch}
      />
    </svg>
  );
}
