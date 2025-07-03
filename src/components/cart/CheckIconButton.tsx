import { FaRegCheckCircle, FaRegCircle } from 'react-icons/fa';

interface Props {
  isChecked: boolean;
  onCheck: () => void;
}

function CheckIconButton({ isChecked, onCheck }: Props) {
  return (
    <div className="mt-2">
      <button onClick={onCheck}>
        {isChecked ? <FaRegCheckCircle /> : <FaRegCircle />}
      </button>
    </div>
  );
}

export default CheckIconButton;
