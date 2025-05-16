
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
        className="grid "
        style={{
          width: "600px",
          height: "400px",
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          gap: "2px",
          // padding: "10px",
          boxSizing: "border-box",
        }}
      >
        {Array.from({ length: totalCells }).map((_, index) => (
          <button
            key={index}
            onClick={() => onSelect(index)}
            className="rounded"
            style={{
              backgroundColor: index === oddCell ? oddColor : baseColor,
              width: "100%",
              height: "100%",
              border: "1px solid #fff",
            }}
          />
        ))}
      </div>
    </div>
  );
};



export default GameBoard;
