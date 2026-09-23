import type { ReactNode } from "react";

export type YGOCardPlacement = {
  imageSrc: string;
  defense?: boolean;
  faceDown?: boolean;
  extraopponent?: boolean;
};

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

type YGOZoneProps = {
  x: number;
  y: number;
  width: number;
  card?: YGOCardPlacement;
  imageSrc?: string;
  zoneRotation?: number;
  cardRotation?: number;
  children?: ReactNode;
};

function CardZone({
  x,
  y,
  width,
  card,
  imageSrc,
  zoneRotation = 0,
  cardRotation = 0,
  children,
}: YGOZoneProps) {
  const height = width * (1185 / 813);
  return (
    <g transform={`translate(${x} ${y})`}>
      <g transform={`rotate(${zoneRotation})`}>
        <g transform={`rotate(${cardRotation})`}>
          {(card?.imageSrc ?? imageSrc) ? (
            <image
              href={card?.imageSrc ?? imageSrc}
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
        {children}
      </g>
    </g>
  );
}

function Zone(props: YGOZoneProps) {
  return <CardZone {...props} />;
}

function getMonsterCardRotation(
  card: YGOCardPlacement | undefined,
  baseRotation = 0,
) {
  return (
    baseRotation + (card?.extraopponent ? 180 : 0) + (card?.defense ? -90 : 0)
  );
}

function MonsterZone({ card, ...props }: YGOZoneProps) {
  return (
    <Zone
      {...props}
      card={card}
      cardRotation={getMonsterCardRotation(card, props.cardRotation)}
    />
  );
}

function SpellTrapZone(props: YGOZoneProps) {
  return <Zone {...props} />;
}

function ExtraZone({ card, ...props }: YGOZoneProps) {
  return (
    <Zone
      {...props}
      card={card}
      cardRotation={getMonsterCardRotation(card, props.cardRotation)}
    />
  );
}

function GraveyardZone({ card, ...props }: YGOZoneProps) {
  return (
    <CardZone card={card} {...props}>
      {!card && <GraveyardSign x={0} y={0} width={props.width / 2.5} />}
    </CardZone>
  );
}

function VanishZone({ card, ...props }: YGOZoneProps) {
  return (
    <CardZone card={card} zoneRotation={90} {...props}>
      {!card && <VanishSign x={0} y={0} width={props.width / 2.5} />}
    </CardZone>
  );
}

function DeckZone({ card, ...props }: YGOZoneProps) {
  const width = props.width;
  const height = width * (1185 / 813);
  return (
    <CardZone card={card} {...props}>
      {!card && (
        <ellipse
          cx={0}
          cy={0}
          rx={width / 5}
          ry={height / 5}
          fill="none"
          stroke="black"
        />
      )}
    </CardZone>
  );
}

type HandProps = {
  x: number;
  y: number;
  width: number;
  cardWidth: number;
  images?: string[];
  cardRotation?: number;
};

function Hand({ x, y, width, cardWidth, images, cardRotation = 0 }: HandProps) {
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
          cardRotation={cardRotation}
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
  cm1?: YGOCardPlacement;
  cm2?: YGOCardPlacement;
  cm3?: YGOCardPlacement;
  cm4?: YGOCardPlacement;
  cm5?: YGOCardPlacement;
  cst1?: YGOCardPlacement;
  cst2?: YGOCardPlacement;
  cst3?: YGOCardPlacement;
  cst4?: YGOCardPlacement;
  cst5?: YGOCardPlacement;
  cf?: YGOCardPlacement;
  cg?: YGOCardPlacement;
  cv?: YGOCardPlacement;
  cd?: YGOCardPlacement;
  ced?: YGOCardPlacement;
  ch?: string[];
  om1?: YGOCardPlacement;
  om2?: YGOCardPlacement;
  om3?: YGOCardPlacement;
  om4?: YGOCardPlacement;
  om5?: YGOCardPlacement;
  ost1?: YGOCardPlacement;
  ost2?: YGOCardPlacement;
  ost3?: YGOCardPlacement;
  ost4?: YGOCardPlacement;
  ost5?: YGOCardPlacement;
  of?: YGOCardPlacement;
  og?: YGOCardPlacement;
  ov?: YGOCardPlacement;
  od?: YGOCardPlacement;
  oed?: YGOCardPlacement;
  oh?: string[];
  ex1?: YGOCardPlacement;
  ex2?: YGOCardPlacement;
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
  const opponentCardRotation = 180;
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
      <SpellTrapZone
        x={x[1]}
        y={y[0]}
        width={cardwidth}
        card={ost1}
        cardRotation={opponentCardRotation}
      />
      <SpellTrapZone
        x={x[2]}
        y={y[0]}
        width={cardwidth}
        card={ost2}
        cardRotation={opponentCardRotation}
      />
      <SpellTrapZone
        x={x[3]}
        y={y[0]}
        width={cardwidth}
        card={ost3}
        cardRotation={opponentCardRotation}
      />
      <SpellTrapZone
        x={x[4]}
        y={y[0]}
        width={cardwidth}
        card={ost4}
        cardRotation={opponentCardRotation}
      />
      <SpellTrapZone
        x={x[5]}
        y={y[0]}
        width={cardwidth}
        card={ost5}
        cardRotation={opponentCardRotation}
      />

      <MonsterZone
        x={x[1]}
        y={y[1]}
        width={cardwidth}
        card={om1}
        cardRotation={opponentCardRotation}
      />
      <MonsterZone
        x={x[2]}
        y={y[1]}
        width={cardwidth}
        card={om2}
        cardRotation={opponentCardRotation}
      />
      <MonsterZone
        x={x[3]}
        y={y[1]}
        width={cardwidth}
        card={om3}
        cardRotation={opponentCardRotation}
      />
      <MonsterZone
        x={x[4]}
        y={y[1]}
        width={cardwidth}
        card={om4}
        cardRotation={opponentCardRotation}
      />
      <MonsterZone
        x={x[5]}
        y={y[1]}
        width={cardwidth}
        card={om5}
        cardRotation={opponentCardRotation}
      />

      <Zone
        x={x[6]}
        y={y[1]}
        width={cardwidth}
        card={of}
        cardRotation={opponentCardRotation}
      />
      <GraveyardZone
        x={x[0]}
        y={y[1]}
        width={cardwidth}
        card={og}
        cardRotation={opponentCardRotation}
      />
      <VanishZone
        x={x[0] + vanishOffset}
        y={y[2] - vanishOffset}
        width={cardwidth}
        card={ov}
        cardRotation={opponentCardRotation}
      />
      <DeckZone
        x={x[0]}
        y={y[0]}
        width={cardwidth}
        card={od}
        cardRotation={opponentCardRotation}
      />
      <DeckZone
        x={x[6]}
        y={y[0]}
        width={cardwidth}
        card={oed}
        cardRotation={opponentCardRotation}
      />

      <ExtraZone x={x[2]} y={y[2]} width={cardwidth} card={ex1} />
      <ExtraZone x={x[4]} y={y[2]} width={cardwidth} card={ex2} />

      <Zone x={x[0]} y={y[3]} width={cardwidth} card={cf} />
      <GraveyardZone x={x[6]} y={y[3]} width={cardwidth} card={cg} />
      <VanishZone
        x={x[6] - vanishOffset}
        y={y[2] + vanishOffset}
        width={cardwidth}
        card={cv}
      />
      <DeckZone x={x[6]} y={y[4]} width={cardwidth} card={cd} />
      <DeckZone x={x[0]} y={y[4]} width={cardwidth} card={ced} />

      <MonsterZone x={x[1]} y={y[3]} width={cardwidth} card={cm1} />
      <MonsterZone x={x[2]} y={y[3]} width={cardwidth} card={cm2} />
      <MonsterZone x={x[3]} y={y[3]} width={cardwidth} card={cm3} />
      <MonsterZone x={x[4]} y={y[3]} width={cardwidth} card={cm4} />
      <MonsterZone x={x[5]} y={y[3]} width={cardwidth} card={cm5} />

      <SpellTrapZone x={x[1]} y={y[4]} width={cardwidth} card={cst1} />
      <SpellTrapZone x={x[2]} y={y[4]} width={cardwidth} card={cst2} />
      <SpellTrapZone x={x[3]} y={y[4]} width={cardwidth} card={cst3} />
      <SpellTrapZone x={x[4]} y={y[4]} width={cardwidth} card={cst4} />
      <SpellTrapZone x={x[5]} y={y[4]} width={cardwidth} card={cst5} />

      <Hand
        x={width / 2}
        y={topGap / 2}
        width={width - 20}
        cardWidth={cardwidth * 0.8}
        images={oh}
        cardRotation={opponentCardRotation}
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
  cm1?: YGOCardPlacement;
  cm2?: YGOCardPlacement;
  cm3?: YGOCardPlacement;
  cm4?: YGOCardPlacement;
  cm5?: YGOCardPlacement;
  cst1?: YGOCardPlacement;
  cst2?: YGOCardPlacement;
  cst3?: YGOCardPlacement;
  cst4?: YGOCardPlacement;
  cst5?: YGOCardPlacement;
  cf?: YGOCardPlacement;
  cg?: YGOCardPlacement;
  cv?: YGOCardPlacement;
  cd?: YGOCardPlacement;
  ced?: YGOCardPlacement;
  ch?: string[];
  ex1?: YGOCardPlacement;
  ex2?: YGOCardPlacement;
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
      <ExtraZone x={x[2]} y={y[0]} width={cardwidth} card={ex1} />
      <ExtraZone x={x[4]} y={y[0]} width={cardwidth} card={ex2} />

      <Zone x={x[0]} y={y[1]} width={cardwidth} card={cf} />
      <GraveyardZone x={x[6]} y={y[1]} width={cardwidth} card={cg} />
      <VanishZone
        x={x[6] - vanishOffset}
        y={y[0] + vanishOffset}
        width={cardwidth}
        card={cv}
      />
      <DeckZone x={x[6]} y={y[2]} width={cardwidth} card={cd} />
      <DeckZone x={x[0]} y={y[2]} width={cardwidth} card={ced} />

      <MonsterZone x={x[1]} y={y[1]} width={cardwidth} card={cm1} />
      <MonsterZone x={x[2]} y={y[1]} width={cardwidth} card={cm2} />
      <MonsterZone x={x[3]} y={y[1]} width={cardwidth} card={cm3} />
      <MonsterZone x={x[4]} y={y[1]} width={cardwidth} card={cm4} />
      <MonsterZone x={x[5]} y={y[1]} width={cardwidth} card={cm5} />

      <SpellTrapZone x={x[1]} y={y[2]} width={cardwidth} card={cst1} />
      <SpellTrapZone x={x[2]} y={y[2]} width={cardwidth} card={cst2} />
      <SpellTrapZone x={x[3]} y={y[2]} width={cardwidth} card={cst3} />
      <SpellTrapZone x={x[4]} y={y[2]} width={cardwidth} card={cst4} />
      <SpellTrapZone x={x[5]} y={y[2]} width={cardwidth} card={cst5} />
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
