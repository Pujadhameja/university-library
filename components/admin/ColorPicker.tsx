import { useState, useRef } from "react";
import { useClickAway, useDebounce } from "react-use";
import { HexColorInput, HexColorPicker } from "react-colorful";

interface Props {
  onPickerChange: (color: string) => void;
}

const ColorPicker = ({ onPickerChange }: Props) => {
  const popoverRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState("#000000");

  useDebounce(() => onPickerChange(color), 500, [color]);
  useClickAway(popoverRef, () => setIsOpen(false));

  return (
    <div className="relative">
      <div className="flex min-h-14 flex-row items-center gap-3 rounded-md border border-gray-100 bg-light-600 p-4 text-base font-semibold text-dark-400">
        <div
          className="size-5 cursor-pointer rounded-sm"
          style={{ backgroundColor: color }}
          onClick={() => setIsOpen((prev) => !prev)}
        />

        <div className="flex flex-row items-center">
          <p>#</p>
          <HexColorInput
            color={color}
            onChange={setColor}
            className="h-full flex-1 bg-transparent font-ibm-plex-sans outline-none"
          />
        </div>
      </div>

      {isOpen && (
        <div className="absolute left-0 top-full z-50 mt-3" ref={popoverRef}>
          <HexColorPicker color={color} onChange={setColor} />
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
