
type GameBoardProps = {
  rows: number;
  cols: number;
  oddCell: number;
  baseColor: string;
  oddColor: string;
  onSelect: (index: number) => void;
};

const GameBoard = ({ rows, cols, oddCell, baseColor, oddColor, onSelect }: GameBoardProps) => {
  const totalCells = rows * cols;

  const sizeClass =
    rows >= 8
      ? "min-w-[60px] min-h-[60px]"
      : rows >= 6
        ? "min-w-[80px] min-h-[80px]"
        : "min-w-[100px] min-h-[100px]";

  return (
    <div
      className="grid gap-2 p-4 max-w-full max-h-[90vh] overflow-hidden"
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
    >
      {Array.from({ length: totalCells }).map((_, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          className={`border-1 border-[#fff] rounded ${sizeClass}`}
          style={{
            backgroundColor: index === oddCell ? oddColor : baseColor,
          }}
        />
      ))}
    </div>
  );
};

export default GameBoard;
