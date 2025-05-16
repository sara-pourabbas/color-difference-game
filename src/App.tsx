import { useEffect, useMemo, useState } from "react";
import GameBoard from "./components/GameBoard";
import { generateColorPair } from "./utils/colorUtils";

const App = () => {
  const [group, setGroup] = useState(0); 
  const [subLevel, setSubLevel] = useState(0); 
  const [mistake, setMistake] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [oddCell, setOddCell] = useState<number | null>(null);

const stages = [
  { rows: 3, cols: 4 },
  { rows: 4, cols: 6 },
  { rows: 5, cols: 8 },
  { rows: 6, cols: 10 },
  { rows: 7, cols: 12 },
  { rows: 8, cols: 14 },
  { rows: 9, cols: 16 },
];

  const { rows, cols } = stages[group];
  const totalCells = rows * cols;

  const { base, odd } = useMemo(
    () => generateColorPair(group * 3 + subLevel),
    [group, subLevel]
  );

  const handleSelect = (index: number) => {
    if (index === oddCell) {
      if (group === stages.length - 1 && subLevel === 2) {
        setGameOver(true);
      } else if (subLevel === 2) {
        setGroup((prev) => prev + 1);
        setSubLevel(0);
      } else {
        setSubLevel((prev) => prev + 1);
      }
    } else {
      setMistake(true);
    }
  };

  const handleRetry = () => {
    setGroup(0);
    setSubLevel(0);
    setMistake(false);
  };

  const handleRestart = () => {
    setGroup(0);
    setSubLevel(0);
    setGameOver(false);
    setMistake(false);
  };

  useEffect(() => {
    setOddCell(Math.floor(Math.random() * totalCells));
  }, [group, subLevel]);

  if (gameOver) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-green-100 text-center p-4">
        <h1 className="text-3xl font-bold text-green-700 mb-4">تبریک! 🎉</h1>
        <p className="text-lg mb-6">شما همه‌ی مراحل رو با موفقیت پشت سر گذاشتید.</p>
        <button
          onClick={handleRestart}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          بازی دوباره
        </button>
      </div>
    );
  }

  return (
    <div className="h-screen overflow-hidden flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-2xl font-bold mb-2 mt-0">مرحله {group + 1} - {subLevel + 1}</h1>
      {mistake ? (
        <>
          <p className="text-red-600 text-lg mb-4">اشتباه بود! دوباره تلاش کن</p>
          <button
            onClick={handleRetry}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            تلاش دوباره
          </button>
        </>
      ) : (
        oddCell !== null && (
          <GameBoard
            rows={rows}
            cols={cols}
            oddCell={oddCell}
            baseColor={base}
            oddColor={odd}
            onSelect={handleSelect}
          />
        )
      )}
    </div>
  );
};

export default App;
