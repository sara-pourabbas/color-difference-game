
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

  return (
    <div className="flex justify-center items-center w-full">
      <div
        className="grid w-[600px] h-[400px] box-border [gap:2px]"
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
      >
        {Array.from({ length: totalCells }).map((_, index) => (
          <button
            key={index}
            onClick={() => onSelect(index)}
            className="rounded w-full h-full border border-[#fff]"
            style={{
              backgroundColor: index === oddCell ? oddColor : baseColor,
            }}
          />
        ))}
      </div>
    </div>
  );
};



export default GameBoard;
